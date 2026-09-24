const WHATSAPP_NUMBER = "971559489080";

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/TreeQpower",
    path: "M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2a1 1 0 0 1 1-1Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tree-q-power-electromechanical-300570b3/",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.05a4.2 4.2 0 0 1 3.75-2c4 0 4.4 2.5 4.4 5.9V21h-4v-5.6c0-1.4-.03-3.1-1.9-3.1-1.9 0-2.1 1.5-2.1 3V21h-4V9Z",
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    path: "M12.04 2a9.9 9.9 0 0 0-8.4 15.1L2 22l5-1.3A9.9 9.9 0 1 0 12.04 2Zm0 1.9a8 8 0 1 1-4.1 14.85l-.3-.18-2.9.76.77-2.83-.18-.3A8 8 0 0 1 12.04 3.9Zm-3.3 4.1c-.2 0-.5.07-.73.33-.25.27-.9.9-.9 2.14 0 1.25.9 2.45 1.03 2.62.13.18 1.76 2.8 4.3 3.8 2.1.83 2.53.67 2.99.63.45-.05 1.47-.6 1.68-1.2.2-.58.2-1.08.15-1.18-.06-.1-.23-.16-.48-.28-.25-.13-1.47-.73-1.7-.81-.22-.09-.39-.13-.55.12-.17.25-.63.8-.77.96-.14.17-.28.19-.53.07-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.13-.25-.01-.39.11-.51.11-.12.25-.3.38-.45.12-.15.16-.25.24-.42.09-.17.05-.32-.02-.45-.07-.13-.55-1.36-.75-1.86-.2-.48-.4-.4-.55-.41h-.24Z",
  },
] as const;

export function SocialLinks({ className = "", iconClassName = "size-5" }) {
  return (
    <ul className={`social-links ${className}`.trim()}>
      {socialLinks.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`TreeQ Power on ${s.label}`}
            title={s.label}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClassName}>
              <path d={s.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
