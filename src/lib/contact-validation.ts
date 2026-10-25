// Validation rules for the contact form. Every field is mandatory.
// Kept as pure functions so the same rules can run on submit, on blur and in tests.

export type ContactFieldKey = "name" | "phone" | "email" | "subject" | "message";
export type ContactValues = Record<ContactFieldKey, string>;
export type ContactErrors = Partial<Record<ContactFieldKey, string | undefined>>;

export const FIELD_ORDER: readonly ContactFieldKey[] = [
  "name",
  "phone",
  "email",
  "subject",
  "message",
];

export const FIELD_IDS: Record<ContactFieldKey, string> = {
  name: "contact-name",
  phone: "contact-phone-number",
  email: "contact-email",
  subject: "contact-subject",
  message: "contact-message",
};

export const FIELD_LIMITS = {
  name: { min: 2, max: 100 },
  phone: { min: 6, max: 15 },
  email: { min: 0, max: 255 },
  subject: { min: 3, max: 150 },
  message: { min: 10, max: 2000 },
} as const;

const LABELS: Record<ContactFieldKey, string> = {
  name: "Full Name",
  phone: "Phone number",
  email: "Email ID",
  subject: "Subject",
  message: "Message",
};

const NAME_PATTERN = /^[\p{L}\p{M}'’.\- ]+$/u;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
const PHONE_ALLOWED_PATTERN = /^[\d\s()+\-.]+$/;

/** Returns a human-readable message for one field, or undefined when it is valid. */
export function validateContactField(
  key: ContactFieldKey,
  values: ContactValues,
  dial: string,
): string | undefined {
  const value = (values[key] ?? "").trim();

  if (!value) return `${LABELS[key]} is required.`;

  switch (key) {
    case "name":
      if (value.length < FIELD_LIMITS.name.min)
        return "Full Name must be at least 2 characters.";
      if (!NAME_PATTERN.test(value))
        return "Full Name can only contain letters, spaces, hyphens and apostrophes.";
      return undefined;

    case "phone":
      if (!PHONE_ALLOWED_PATTERN.test(value))
        return "Phone number can only contain digits.";
      {
        const digits = value.replace(/\D/g, "");
        const dialDigits = dial.replace(/\D/g, "");
        if (digits.length < FIELD_LIMITS.phone.min)
          return "Phone number must be at least 6 digits.";
        if (digits.length + dialDigits.length > FIELD_LIMITS.phone.max)
          return "Phone number is too long.";
      }
      return undefined;

    case "email":
      if (!EMAIL_PATTERN.test(value))
        return "Enter a valid email address, e.g. name@company.com.";
      return undefined;

    case "subject":
      if (value.length < FIELD_LIMITS.subject.min)
        return "Subject must be at least 3 characters.";
      return undefined;

    case "message":
      if (value.length < FIELD_LIMITS.message.min)
        return "Message must be at least 10 characters.";
      return undefined;
  }
}

/** Validates every field and returns only the ones that failed. */
export function validateContactForm(values: ContactValues, dial: string): ContactErrors {
  const errors: ContactErrors = {};
  for (const key of FIELD_ORDER) {
    const error = validateContactField(key, values, dial);
    if (error) errors[key] = error;
  }
  return errors;
}
