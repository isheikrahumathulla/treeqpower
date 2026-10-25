// Country dialling codes for the contact form phone field.
// `code` is the ISO 3166-1 alpha-2 code used by flag-icons (`fi fi-<code>`).
// United Arab Emirates is pinned first, then the rest alphabetically by name.
// Add or remove entries here only.

export type Country = {
  code: string;
  name: string;
  dial: string;
};

export const COUNTRIES: readonly Country[] = [
  { code: "ae", name: "United Arab Emirates", dial: "+971" },
  { code: "dz", name: "Algeria", dial: "+213" },
  { code: "ar", name: "Argentina", dial: "+54" },
  { code: "au", name: "Australia", dial: "+61" },
  { code: "bh", name: "Bahrain", dial: "+973" },
  { code: "bd", name: "Bangladesh", dial: "+880" },
  { code: "be", name: "Belgium", dial: "+32" },
  { code: "br", name: "Brazil", dial: "+55" },
  { code: "ca", name: "Canada", dial: "+1" },
  { code: "cn", name: "China", dial: "+86" },
  { code: "eg", name: "Egypt", dial: "+20" },
  { code: "fr", name: "France", dial: "+33" },
  { code: "de", name: "Germany", dial: "+49" },
  { code: "gh", name: "Ghana", dial: "+233" },
  { code: "gr", name: "Greece", dial: "+30" },
  { code: "in", name: "India", dial: "+91" },
  { code: "id", name: "Indonesia", dial: "+62" },
  { code: "ir", name: "Iran", dial: "+98" },
  { code: "iq", name: "Iraq", dial: "+964" },
  { code: "ie", name: "Ireland", dial: "+353" },
  { code: "it", name: "Italy", dial: "+39" },
  { code: "jp", name: "Japan", dial: "+81" },
  { code: "jo", name: "Jordan", dial: "+962" },
  { code: "kz", name: "Kazakhstan", dial: "+7" },
  { code: "ke", name: "Kenya", dial: "+254" },
  { code: "kw", name: "Kuwait", dial: "+965" },
  { code: "lb", name: "Lebanon", dial: "+961" },
  { code: "my", name: "Malaysia", dial: "+60" },
  { code: "mx", name: "Mexico", dial: "+52" },
  { code: "ma", name: "Morocco", dial: "+212" },
  { code: "np", name: "Nepal", dial: "+977" },
  { code: "nl", name: "Netherlands", dial: "+31" },
  { code: "nz", name: "New Zealand", dial: "+64" },
  { code: "ng", name: "Nigeria", dial: "+234" },
  { code: "no", name: "Norway", dial: "+47" },
  { code: "om", name: "Oman", dial: "+968" },
  { code: "pk", name: "Pakistan", dial: "+92" },
  { code: "ph", name: "Philippines", dial: "+63" },
  { code: "pl", name: "Poland", dial: "+48" },
  { code: "pt", name: "Portugal", dial: "+351" },
  { code: "qa", name: "Qatar", dial: "+974" },
  { code: "ro", name: "Romania", dial: "+40" },
  { code: "ru", name: "Russia", dial: "+7" },
  { code: "sa", name: "Saudi Arabia", dial: "+966" },
  { code: "sg", name: "Singapore", dial: "+65" },
  { code: "za", name: "South Africa", dial: "+27" },
  { code: "kr", name: "South Korea", dial: "+82" },
  { code: "es", name: "Spain", dial: "+34" },
  { code: "lk", name: "Sri Lanka", dial: "+94" },
  { code: "se", name: "Sweden", dial: "+46" },
  { code: "ch", name: "Switzerland", dial: "+41" },
  { code: "tz", name: "Tanzania", dial: "+255" },
  { code: "th", name: "Thailand", dial: "+66" },
  { code: "tn", name: "Tunisia", dial: "+216" },
  { code: "tr", name: "Türkiye", dial: "+90" },
  { code: "ug", name: "Uganda", dial: "+256" },
  { code: "ua", name: "Ukraine", dial: "+380" },
  { code: "gb", name: "United Kingdom", dial: "+44" },
  { code: "us", name: "United States", dial: "+1" },
  { code: "vn", name: "Vietnam", dial: "+84" },
  { code: "ye", name: "Yemen", dial: "+967" },
] as const;

export const DEFAULT_COUNTRY_CODE = "ae";

const COUNTRY_BY_CODE = new Map(COUNTRIES.map((country) => [country.code, country]));

const DEFAULT_COUNTRY: Country =
  COUNTRIES.find((country) => country.code === DEFAULT_COUNTRY_CODE) ?? {
    code: DEFAULT_COUNTRY_CODE,
    name: "United Arab Emirates",
    dial: "+971",
  };

export function getCountry(code: string): Country {
  return COUNTRY_BY_CODE.get(code) ?? DEFAULT_COUNTRY;
}

// Builds the full international number submitted with the enquiry,
// e.g. "+971" + "58 565 4226" -> "+971585654226".
export function toInternationalNumber(dial: string, nationalNumber: string): string {
  const digits = nationalNumber.replace(/[^\d]/g, "");
  if (!digits) return "";
  return `${dial}${digits}`;
}
