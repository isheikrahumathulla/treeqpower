// Curated photography library. Every file is a licensed free-to-use photograph
// (CC0 / public domain sources, see src/assets/library/credits.json) optimised to WebP.
// No AI-generated imagery. Reuse each entry only where it is most relevant.
import constructionSiteSupervision from "@/assets/library/construction-site-supervision.webp";
import dataCentreRacks from "@/assets/library/data-centre-racks.webp";
import dataHallBlue from "@/assets/library/data-hall-blue.webp";
import dubaiMarinaDay from "@/assets/library/dubai-marina-day.webp";
import dubaiMarinaNight from "@/assets/library/dubai-marina-night.webp";
import dubaiSkylineAerial from "@/assets/library/dubai-skyline-aerial.webp";
import dubaiTowers from "@/assets/library/dubai-towers.webp";
import electricalTechnician from "@/assets/library/electrical-technician.webp";
import engineerInspectionPortrait from "@/assets/library/engineer-inspection-portrait.webp";
import hvInsulators from "@/assets/library/hv-insulators.webp";
import hvTransformerBank from "@/assets/library/hv-transformer-bank.webp";
import industrialMachineryPanel from "@/assets/library/industrial-machinery-panel.webp";
import industrialWorkshop from "@/assets/library/industrial-workshop.webp";
import infrastructureInterchange from "@/assets/library/infrastructure-interchange.webp";
import latticeTower from "@/assets/library/lattice-tower.webp";
import lvDistributionPanel from "@/assets/library/lv-distribution-panel.webp";
import mechanicalPlantRoom from "@/assets/library/mechanical-plant-room.webp";
import networkCabinet from "@/assets/library/network-cabinet.webp";
import overheadLineInsulator from "@/assets/library/overhead-line-insulator.webp";
import petrochemicalNight from "@/assets/library/petrochemical-night.webp";
import precisionInstrumentWork from "@/assets/library/precision-instrument-work.webp";
import pressureInstrumentation from "@/assets/library/pressure-instrumentation.webp";
import refineryDusk from "@/assets/library/refinery-dusk.webp";
import rooftopSolarArray from "@/assets/library/rooftop-solar-array.webp";
import solarInstallationTeam from "@/assets/library/solar-installation-team.webp";
import standbyGenerator from "@/assets/library/standby-generator.webp";
import steelLifting from "@/assets/library/steel-lifting.webp";
import substationTransformer from "@/assets/library/substation-transformer.webp";
import substationYard from "@/assets/library/substation-yard.webp";
import switchyardBusbars from "@/assets/library/switchyard-busbars.webp";
import towerCraneCabin from "@/assets/library/tower-crane-cabin.webp";
import transmissionDusk from "@/assets/library/transmission-dusk.webp";
import transmissionGantry from "@/assets/library/transmission-gantry.webp";
import transmissionSunset from "@/assets/library/transmission-sunset.webp";
import transmissionTowerSky from "@/assets/library/transmission-tower-sky.webp";
import weldingFabrication from "@/assets/library/welding-fabrication.webp";
import windFarmAerial from "@/assets/library/wind-farm-aerial.webp";
import windTurbinesField from "@/assets/library/wind-turbines-field.webp";

export const lib = {
  constructionSiteSupervision,
  dataCentreRacks,
  dataHallBlue,
  dubaiMarinaDay,
  dubaiMarinaNight,
  dubaiSkylineAerial,
  dubaiTowers,
  electricalTechnician,
  engineerInspectionPortrait,
  hvInsulators,
  hvTransformerBank,
  industrialMachineryPanel,
  industrialWorkshop,
  infrastructureInterchange,
  latticeTower,
  lvDistributionPanel,
  mechanicalPlantRoom,
  networkCabinet,
  overheadLineInsulator,
  petrochemicalNight,
  precisionInstrumentWork,
  pressureInstrumentation,
  refineryDusk,
  rooftopSolarArray,
  solarInstallationTeam,
  standbyGenerator,
  steelLifting,
  substationTransformer,
  substationYard,
  switchyardBusbars,
  towerCraneCabin,
  transmissionDusk,
  transmissionGantry,
  transmissionSunset,
  transmissionTowerSky,
  weldingFabrication,
  windFarmAerial,
  windTurbinesField,
} as const;

export const libAlt: Record<keyof typeof lib, string> = {
  constructionSiteSupervision: "Site supervision on a live construction project",
  dataCentreRacks: "Structured cabling and equipment racks in a technical room",
  dataHallBlue: "Critical facility equipment hall with controlled power distribution",
  dubaiMarinaDay: "Dubai high-rise towers along the waterfront",
  dubaiMarinaNight: "Dubai waterfront towers illuminated at night",
  dubaiSkylineAerial: "Aerial view of the Dubai city skyline",
  dubaiTowers: "Cluster of Dubai commercial towers",
  electricalTechnician: "Electrical technician terminating wiring on a live installation",
  engineerInspectionPortrait: "Engineer in a safety helmet carrying out close-up equipment inspection",
  hvInsulators: "High-voltage porcelain insulators at a substation",
  hvTransformerBank: "Medium-voltage transformer and switchgear bank",
  industrialMachineryPanel: "Industrial machinery panel with control wiring and pipework",
  industrialWorkshop: "Industrial workshop and fabrication facility",
  infrastructureInterchange: "Illuminated road interchange infrastructure at night",
  latticeTower: "Lattice transmission tower with earthing and protection hardware",
  lvDistributionPanel: "Low-voltage distribution board with circuit protection devices",
  mechanicalPlantRoom: "Mechanical plant room with pumps, valves and pipework",
  networkCabinet: "Electronic control and network cabinet under inspection",
  overheadLineInsulator: "Overhead line insulator and conductor termination",
  petrochemicalNight: "Petrochemical processing plant illuminated at night",
  precisionInstrumentWork: "Technician carrying out precision instrument work",
  pressureInstrumentation: "Pressure gauge and process instrumentation detail",
  refineryDusk: "Oil and gas processing facility at dusk",
  rooftopSolarArray: "Rooftop solar photovoltaic array on a building",
  solarInstallationTeam: "Technicians installing rooftop solar photovoltaic panels",
  standbyGenerator: "Technician inspecting a standby diesel generator set",
  steelLifting: "Steel section being lifted by crane on site",
  substationTransformer: "Power transformer installed within a substation compound",
  substationYard: "Substation yard with busbars, isolators and gantries",
  switchyardBusbars: "Switchyard busbars, disconnectors and support structures",
  towerCraneCabin: "Tower crane structure against a clear sky",
  transmissionDusk: "Transmission line and pylon at dusk",
  transmissionGantry: "Transmission gantry and high-voltage bushings",
  transmissionSunset: "Overhead transmission lines at sunset",
  transmissionTowerSky: "Transmission tower viewed against open sky",
  weldingFabrication: "Welder carrying out fabrication work requiring weld inspection",
  windFarmAerial: "Aerial view of wind turbines across farmland",
  windTurbinesField: "Wind turbines in an open field under storm light",
};
