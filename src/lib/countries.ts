// Country dialling codes for the contact form phone field.
// `code` is the ISO 3166-1 alpha-2 code used by flag-icons (`fi fi-<code>`).
// Sorted alphabetically by name. Add or remove entries here only.

export type Country = {
  code: string;
  name: string;
  dial: string;
};

export const COUNTRIES: readonly Country[] = [
  { code: "ae", name: "United Arab Emirates", dial: "+971" },
  { code: "in", name: "India", dial: "+91" },
  { code: "sa", name: "Saudi Arabia", dial: "+966" },
  { code: "qa", name: "Qatar", dial: "+974" },
  { code: "kw", name: "Kuwait", dial: "+965" },
  { code: "bh", name: "Bahrain", dial: "+973" },
  { code: "om", name: "Oman", dial: "+968" },
  { code: "ye", name: "Yemen", dial: "+967" },
  { code: "jo", name: "Jordan", dial: "+962" },
  { code: "lb", name: "Lebanon", dial: "+961" },
  { code: "iq", name: "Iraq", dial: "+964" },
  { code: "ir", name: "Iran", dial: "+98" },
  { code: "tr", name: "Türkiye", dial: "+90" },
  { code: "eg", name: "Egypt", dial: "+20" },
  { code: "ma", name: "Morocco", dial: "+212" },
  { code: "dz", name: "Algeria", dial: "+213" },
  { code: "tn", name: "Tunisia", dial: "+216" },
  { code: "ng", name: "Nigeria", dial: "+234" },
  { code: "gh", name: "Ghana", dial: "+233" },
  { code: "ke", name: "Kenya", dial: "+254" },
  { code: "tz", name: "Tanzania", dial: "+255" },
  { code: "ug", name: "Uganda", dial: "+256" },
  { code: "za", name: "South Africa", dial: "+27" },
  { code: "pk", name: "Pakistan", dial: "+92" },
  { code: "bd", name: "Bangladesh", dial: "+880" },
  { code: "lk", name: "Sri Lanka", dial: "+94" },
  { code: "np", name: "Nepal", dial: "+977" },
  { code: "my", name: "Malaysia", dial: "+60" },
  { code: "sg", name: "Singapore", dial: "+65" },
  { code: "id", name: "Indonesia", dial: "+62" },
  { code: "ph", name: "Philippines", dial: "+63" },
  { code: "th", name: "Thailand", dial: "+66" },
  { code: "vn", name: "Vietnam", dial: "+84" },
  { code: "kr", name: "South Korea", dial: "+82" },
  { code: "jp", name: "Japan", dial: "+81" },
  { code: "cn", name: "China", dial: "+86" },
  { code: "kz", name: "Kazakhstan", dial: "+7" },
  { code: "ru", name: "Russia", dial: "+7" },
  { code: "gb", name: "United Kingdom", dial: "+44" },
  { code: "ie", name: "Ireland", dial: "+353" },
  { code: "de", name: "Germany", dial: "+49" },
  { code: "fr", name: "France", dial: "+33" },
  { code: "it", name: "Italy", dial: "+39" },
  { code: "es", name: "Spain", dial: "+34" },
  { code: "pt", name: "Portugal", dial: "+351" },
  { code: "nl", name: "Netherlands", dial: "+31" },
  { code: "be", name: "Belgium", dial: "+32" },
  { code: "ch", name: "Switzerland", dial: "+41" },
  { code: "se", name: "Sweden", dial: "+46" },
  { code: "no", name: "Norway", dial: "+47" },
  { code: "pl", name: "Poland", dial: "+48" },
  { code: "ro", name: "Romania", dial: "+40" },
  { code: "gr", name: "Greece", dial: "+30" },
  { code: "ua", name: "Ukraine", dial: "+380" },
  { code: "us", name: "United States", dial: "+1" },
  { code: "ca", name: "Canada", dial: "+1" },
  { code: "mx", name: "Mexico", dial: "+52" },
  { code: "br", name: "Brazil", dial: "+55" },
  { code: "ar", name: "Argentina", dial: "+54" },
  { code: "au", name: "Australia", dial: "+61" },
  { code: "nz", name: "New Zealand", dial: "+64" },
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
