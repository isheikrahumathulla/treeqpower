import abbLogo from "@/assets/brands/01_ABB_logo.svg.asset.json";
import schneiderLogo from "@/assets/brands/02_schneider-electric.svg.asset.json";
import siemensLogo from "@/assets/brands/03_siemens.svg.asset.json";
import eatonLogo from "@/assets/brands/04_Eaton_Corporation_logo.svg.asset.json";
import allenBradleyLogo from "@/assets/brands/05_Allen-Bradley_logo.svg.asset.json";
import rockwellLogo from "@/assets/brands/06_Rockwell_Automation_logo_(2019).svg.asset.json";
import yaskawaLogo from "@/assets/brands/07_yaskawa.svg.asset.json";
import danfossLogo from "@/assets/brands/08_Danfoss-Logo.svg.asset.json";
import fanucLogo from "@/assets/brands/09_Fanuc_logo.svg.asset.json";
import emersonLogo from "@/assets/brands/10_emerson-electric.svg.asset.json";
import eurothermLogo from "@/assets/brands/11_Eurotherm_logo.svg.asset.json";
import hitachiLogo from "@/assets/brands/12_Hitachi_2025_logo.svg.asset.json";
import mitsubishiLogo from "@/assets/brands/13_Mitsubishi_Electric_logo.svg.asset.json";
import deltaLogo from "@/assets/brands/14_DeltaPSU-Logo.svg.asset.json";
import kawasakiLogo from "@/assets/brands/15_Kawasaki_Logo_vert.svg.asset.json";
import cutlerHammerLogo from "@/assets/brands/16_eaton-cutler-hammer.png.asset.json";
import altivarLogo from "@/assets/brands/17_altivar-drives-logo.png.asset.json";
import aegLogo from "@/assets/brands/18_AEG_Logo_Red_CMYK.svg.asset.json";
import omronLogo from "@/assets/brands/19_OMRON_Logo.svg.asset.json";
import baldorLogo from "@/assets/brands/20_Baldor_logo.png.asset.json";
import baumullerLogo from "@/assets/brands/21_Baumueller_Logo_big.jpg.asset.json";
import boschLogo from "@/assets/brands/22_Bosch-logo.svg.asset.json";
import sanyoLogo from "@/assets/brands/23_Sanyo_logo.svg.asset.json";
import sonyLogo from "@/assets/brands/24_Sony_logo.svg.asset.json";
import honeywellLogo from "@/assets/brands/25_Honeywell_logo.svg.asset.json";
import toshibaLogo from "@/assets/brands/26_Toshiba_logo.svg.asset.json";

export type Brand = {
  name: string;
  logo: string;
};

export const brands: Brand[] = [
  { name: "ABB", logo: abbLogo.url },
  { name: "Schneider Electric", logo: schneiderLogo.url },
  { name: "Siemens", logo: siemensLogo.url },
  { name: "Eaton", logo: eatonLogo.url },
  { name: "Allen-Bradley", logo: allenBradleyLogo.url },
  { name: "Rockwell Automation", logo: rockwellLogo.url },
  { name: "Yaskawa", logo: yaskawaLogo.url },
  { name: "Danfoss", logo: danfossLogo.url },
  { name: "GE Fanuc", logo: fanucLogo.url },
  { name: "Emerson", logo: emersonLogo.url },
  { name: "Eurotherm", logo: eurothermLogo.url },
  { name: "Hitachi", logo: hitachiLogo.url },
  { name: "Mitsubishi Electric", logo: mitsubishiLogo.url },
  { name: "Delta Electronics", logo: deltaLogo.url },
  { name: "Kawasaki", logo: kawasakiLogo.url },
  { name: "Cutler-Hammer", logo: cutlerHammerLogo.url },
  { name: "Altivar", logo: altivarLogo.url },
  { name: "AEG", logo: aegLogo.url },
  { name: "Omron", logo: omronLogo.url },
  { name: "Baldor", logo: baldorLogo.url },
  { name: "Baumüller", logo: baumullerLogo.url },
  { name: "Bosch", logo: boschLogo.url },
  { name: "Sanyo", logo: sanyoLogo.url },
  { name: "Sony", logo: sonyLogo.url },
  { name: "Honeywell", logo: honeywellLogo.url },
  { name: "Toshiba", logo: toshibaLogo.url },
];
