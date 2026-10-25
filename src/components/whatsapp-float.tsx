const WHATSAPP_CHAT = "https://wa.me/971585654226";

const WHATSAPP_PATH =
  "M12.04 2a9.9 9.9 0 0 0-8.4 15.1L2 22l5-1.3A9.9 9.9 0 1 0 12.04 2Zm0 1.9a8 8 0 1 1-4.1 14.85l-.3-.18-2.9.76.77-2.83-.18-.3A8 8 0 0 1 12.04 3.9Zm-3.3 4.1c-.2 0-.5.07-.73.33-.25.27-.9.9-.9 2.14 0 1.25.9 2.45 1.03 2.62.13.18 1.76 2.8 4.3 3.8 2.1.83 2.53.67 2.99.63.45-.05 1.47-.6 1.68-1.2.2-.58.2-1.08.15-1.18-.06-.1-.23-.16-.48-.28-.25-.13-1.47-.73-1.7-.81-.22-.09-.39-.13-.55.12-.17.25-.63.8-.77.96-.14.17-.28.19-.53.07-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.13-.25-.01-.39.11-.51.11-.12.25-.3.38-.45.12-.15.16-.25.24-.42.09-.17.05-.32-.02-.45-.07-.13-.55-1.36-.75-1.86-.2-.48-.4-.4-.55-.41h-.24Z";

export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={WHATSAPP_CHAT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TreeQ Power on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={WHATSAPP_PATH} />
      </svg>
      <span className="wa-float-label" aria-hidden="true">
        Chat on WhatsApp
      </span>
    </a>
  );
}
