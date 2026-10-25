import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const MIN_SCORE = 0.5;

export type RecaptchaReason =
  | "ok"
  | "invalid-key"
  | "invalid-token"
  | "wrong-action"
  | "low-score"
  | "unknown";

export const verifyRecaptcha = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({ token: z.string().min(1) }).parse(data))
  .handler(async ({ data }) => {
    const secret = process.env["RECAPTCHA_SECRET_KEY"];
    if (!secret) {
      console.error("reCAPTCHA: RECAPTCHA_SECRET_KEY is not set");
      return { verified: false, reason: "invalid-key" as RecaptchaReason };
    }

    let response: Response;
    try {
      response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: secret.trim(), response: data.token }),
      });
    } catch (err) {
      console.error("reCAPTCHA: Google unreachable", err);
      return { verified: false, reason: "unknown" as RecaptchaReason };
    }

    if (!response.ok) {
      const body = await response.text();
      console.error(`reCAPTCHA verification failed [${response.status}]: ${body}`);
      return { verified: false, reason: "unknown" as RecaptchaReason };
    }

    const result = (await response.json()) as {
      success?: boolean;
      score?: number;
      action?: string;
      hostname?: string;
      "error-codes"?: string[];
    };

    const errors = result["error-codes"] ?? [];
    let reason: RecaptchaReason = "ok";
    if (result.success !== true) {
      reason = errors.some((e) => e.includes("secret")) ? "invalid-key" : "invalid-token";
    } else if (result.action !== "contact") {
      reason = "wrong-action";
    } else if ((result.score ?? 0) < MIN_SCORE) {
      reason = "low-score";
    }

    if (reason !== "ok") {
      console.warn(
        `reCAPTCHA rejected: reason=${reason} success=${String(result.success)} score=${String(
          result.score,
        )} action=${String(result.action)} hostname=${String(result.hostname)} errors=${errors.join(",")}`,
      );
    }

    return { verified: reason === "ok", reason };
  });
