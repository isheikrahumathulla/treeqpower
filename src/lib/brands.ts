import abbLogo from "@/assets/brands/01_ABB_logo.svg";
import schneiderLogo from "@/assets/brands/02_schneider-electric.svg";
import siemensLogo from "@/assets/brands/03_siemens.svg";
import eatonLogo from "@/assets/brands/04_Eaton_Corporation_logo.svg";
import allenBradleyLogo from "@/assets/brands/05_Allen-Bradley_logo.svg";
import rockwellLogo from "@/assets/brands/06_Rockwell_Automation_logo_(2019).svg";
import yaskawaLogo from "@/assets/brands/07_yaskawa.svg";
import danfossLogo from "@/assets/brands/08_Danfoss-Logo.svg";
import fanucLogo from "@/assets/brands/09_Fanuc_logo.svg";
import emersonLogo from "@/assets/brands/10_emerson-electric.svg";
import eurothermLogo from "@/assets/brands/11_Eurotherm_logo.svg";
import hitachiLogo from "@/assets/brands/12_Hitachi_2025_logo.svg";
import mitsubishiLogo from "@/assets/brands/13_Mitsubishi_Electric_logo.svg";
import deltaLogo from "@/assets/brands/14_DeltaPSU-Logo.svg";
import kawasakiLogo from "@/assets/brands/15_Kawasaki_Logo_vert.svg";
import cutlerHammerLogo from "@/assets/brands/16_eaton-cutler-hammer.png";
import altivarLogo from "@/assets/brands/17_altivar-drives-logo.png";
import aegLogo from "@/assets/brands/18_AEG_Logo_Red_CMYK.svg";
import omronLogo from "@/assets/brands/19_OMRON_Logo.svg";
import baldorLogo from "@/assets/brands/20_Baldor_logo.png";
import baumullerLogo from "@/assets/brands/21_Baumueller_Logo_big.jpg";
import boschLogo from "@/assets/brands/22_Bosch-logo.svg";
import sanyoLogo from "@/assets/brands/23_Sanyo_logo.svg";
import sonyLogo from "@/assets/brands/24_Sony_logo.svg";
import honeywellLogo from "@/assets/brands/25_Honeywell_logo.svg";
import toshibaLogo from "@/assets/brands/26_Toshiba_logo.svg";

export type Brand = {
  name: string;
  logo: string;
};

export const brands: Brand[] = [
  { name: "ABB", logo: abbLogo },
  { name: "Schneider Electric", logo: schneiderLogo },
  { name: "Siemens", logo: siemensLogo },
  { name: "Eaton", logo: eatonLogo },
  { name: "Allen-Bradley", logo: allenBradleyLogo },
  { name: "Rockwell Automation", logo: rockwellLogo },
  { name: "Yaskawa", logo: yaskawaLogo },
  { name: "Danfoss", logo: danfossLogo },
  { name: "GE Fanuc", logo: fanucLogo },
  { name: "Emerson", logo: emersonLogo },
  { name: "Eurotherm", logo: eurothermLogo },
  { name: "Hitachi", logo: hitachiLogo },
  { name: "Mitsubishi Electric", logo: mitsubishiLogo },
  { name: "Delta Electronics", logo: deltaLogo },
  { name: "Kawasaki", logo: kawasakiLogo },
  { name: "Cutler-Hammer", logo: cutlerHammerLogo },
  { name: "Altivar", logo: altivarLogo },
  { name: "AEG", logo: aegLogo },
  { name: "Omron", logo: omronLogo },
  { name: "Baldor", logo: baldorLogo },
  { name: "Baumüller", logo: baumullerLogo },
  { name: "Bosch", logo: boschLogo },
  { name: "Sanyo", logo: sanyoLogo },
  { name: "Sony", logo: sonyLogo },
  { name: "Honeywell", logo: honeywellLogo },
  { name: "Toshiba", logo: toshibaLogo },
];
