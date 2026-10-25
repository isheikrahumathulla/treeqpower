import { expect, test } from "vitest";
import { validateContactForm as v, sanitizePhoneInput as s } from "./contact-validation";
const ok = { name: "Ali Khan", phone: "58 565 4226", email: "a@b.com", subject: "Quote", message: "Need inspection" };
test("valid", () => expect(v(ok)).toBe(""));
test("phone letters stripped", () => expect(s("58a5b6")).toBe("5856"));
test("url blocked", () => expect(v({ ...ok, message: "see www.x.com" })).toMatch(/URLs/));
test("empty", () => expect(v({ ...ok, subject: " " })).toMatch(/required/));
