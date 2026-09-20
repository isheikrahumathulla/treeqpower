import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const MIN_SCORE = 0.5;

export const verifyRecaptcha = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({ token: z.string().min(1) }).parse(data))
  .handler(async ({ data }) => {
    const secret = process.env["RECAPTCHA_SECRET_KEY"];
    if (!secret) {
      throw new Error("reCAPTCHA is not configured.");
    }

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: data.token }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(`reCAPTCHA verification failed [${response.status}]: ${body}`);
      throw new Error(`reCAPTCHA verification failed [${response.status}]`);
    }

    const result = (await response.json()) as {
      success?: boolean;
      score?: number;
      action?: string;
    };

    const verified =
      result.success === true &&
      (result.score ?? 0) >= MIN_SCORE &&
      result.action === "contact";

    return { verified };
  });
