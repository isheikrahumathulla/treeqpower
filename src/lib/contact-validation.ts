export type ContactInput = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const URL_PATTERN =
  /(https?:\/\/|ftp:\/\/|www\.|\b[a-z0-9-]+\.(com|net|org|io|co|ae|in|info|biz|xyz|me|ly|app|dev|site|online|link|ru|uk|us)\b)/i;
const MARKUP_PATTERN = /<[^>]*>|javascript:|[<>{}]/i;
const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[a-z]{2,}$/i;

/** Keep only digits, spaces and hyphens in the phone box. */
export function sanitizePhoneInput(value: string): string {
  return value.replace(/[^\d\s-]/g, "");
}

/** Returns an error message, or "" when the form is valid. */
export function validateContactForm(input: ContactInput): string {
  const name = input.name.trim();
  const phone = input.phone.trim();
  const email = input.email.trim();
  const subject = input.subject.trim();
  const message = input.message.trim();

  if (!name || !phone || !email || !subject || !message) {
    return "Please fill in all required fields marked with *.";
  }
  if (!/^[\p{L}\s.'-]+$/u.test(name)) {
    return "Full Name may contain letters, spaces, dots, apostrophes and hyphens only.";
  }
  if (!/^[\d\s-]+$/.test(phone)) {
    return "Phone may contain numbers only.";
  }
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) {
    return "Please enter a valid phone number (7 to 15 digits).";
  }
  if (!EMAIL_PATTERN.test(email)) {
    return "Please enter a valid Email ID.";
  }
  for (const value of [name, subject, message]) {
    if (URL_PATTERN.test(value)) {
      return "Links and URLs are not permitted. Please submit plain text only.";
    }
    if (MARKUP_PATTERN.test(value)) {
      return "Please use plain text only — code or HTML is not permitted.";
    }
  }
  return "";
}
