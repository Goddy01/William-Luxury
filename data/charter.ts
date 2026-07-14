export type LocaleCopy = { it: string; en: string };

export type CharterListing = {
  slug: string;
  name: string;
  length: string;
  guests: number;
  year: number;
  captainIncluded: boolean;
  prices: { day: number; week: number; month: number };
  currency: "EUR";
  featured: boolean;
  hasDetailPage: boolean;
  images: string[];
  location: LocaleCopy;
  description: LocaleCopy;
  specs: {
    key: string;
    it: string;
    en: string;
    valueIt: string;
    valueEn: string;
  }[];
};

const U = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?fm=webp&fit=crop&w=${w}&q=80`;

export const charterListings: CharterListing[] = [
  {
    slug: "positano-diamond",
    name: "Positano Diamond",
    length: "18 m",
    guests: 10,
    year: 2021,
    captainIncluded: true,
    prices: { day: 2800, week: 16500, month: 52000 },
    currency: "EUR",
    featured: true,
    hasDetailPage: true,
    images: [
      U("photo-1567899378494-47b22a2ae96a"),
      U("photo-1544551763-46a013bb70d5"),
      U("photo-1605281317010-fe5ffe798166"),
      U("photo-1559827260-dc66d52bef19"),
      U("photo-1544552866-d3ed42536cfd"),
      U("photo-1528127269322-539801943592"),
    ],
    location: { it: "Sorrento · Costiera Amalfitana", en: "Sorrento · Amalfi Coast" },
    description: {
      it: "Un motoryacht contemporaneo pensato per giornate tra Capri e Amalfi. Ponte ampio, saloon luminoso e un capitano che conosce ogni caletta. Ideale per famiglie e gruppi che cercano comfort e discrezione.",
      en: "A contemporary motor yacht designed for days between Capri and Amalfi. Generous decks, a luminous saloon, and a captain who knows every cove. Ideal for families and groups seeking comfort with discretion.",
    },
    specs: [
      { key: "type", it: "Tipo", en: "Type", valueIt: "Motoryacht", valueEn: "Motor yacht" },
      { key: "length", it: "Lunghezza", en: "Length", valueIt: "18 m", valueEn: "18 m" },
      { key: "year", it: "Anno", en: "Year", valueIt: "2021", valueEn: "2021" },
      { key: "guests", it: "Ospiti", en: "Guests", valueIt: "10", valueEn: "10" },
      { key: "captain", it: "Capitano", en: "Captain", valueIt: "Incluso", valueEn: "Included" },
      { key: "base", it: "Base", en: "Base", valueIt: "Sorrento", valueEn: "Sorrento" },
    ],
  },
  {
    slug: "capri-breeze",
    name: "Capri Breeze",
    length: "12 m",
    guests: 8,
    year: 2019,
    captainIncluded: true,
    prices: { day: 1450, week: 8500, month: 28000 },
    currency: "EUR",
    featured: true,
    hasDetailPage: false,
    images: [U("photo-1605281317010-fe5ffe798166"), U("photo-1544551763-46a013bb70d5")],
    location: { it: "Capri", en: "Capri" },
    description: {
      it: "Gozzo moderno, elegante e agile. Perfetto per escursioni verso la Grotta Azzurra e le isole del Golfo.",
      en: "A modern, elegant gozzo. Perfect for excursions toward the Blue Grotto and the Gulf islands.",
    },
    specs: [
      { key: "type", it: "Tipo", en: "Type", valueIt: "Gozzo", valueEn: "Gozzo" },
      { key: "length", it: "Lunghezza", en: "Length", valueIt: "12 m", valueEn: "12 m" },
      { key: "guests", it: "Ospiti", en: "Guests", valueIt: "8", valueEn: "8" },
      { key: "captain", it: "Capitano", en: "Captain", valueIt: "Incluso", valueEn: "Included" },
    ],
  },
  {
    slug: "amalfi-whisper",
    name: "Amalfi Whisper",
    length: "24 m",
    guests: 12,
    year: 2022,
    captainIncluded: true,
    prices: { day: 4200, week: 24000, month: 78000 },
    currency: "EUR",
    featured: true,
    hasDetailPage: false,
    images: [U("photo-1569263979104-865ab7cd8d13"), U("photo-1544552866-d3ed42536cfd")],
    location: { it: "Amalfi", en: "Amalfi" },
    description: {
      it: "Yacht di rappresentanza per crociere settimanali lungo la costa. Equipaggio dedicato, atmosfere riservate.",
      en: "A flagship yacht for weekly coastal cruising. Dedicated crew, reserved atmospheres.",
    },
    specs: [
      { key: "type", it: "Tipo", en: "Type", valueIt: "Motoryacht", valueEn: "Motor yacht" },
      { key: "length", it: "Lunghezza", en: "Length", valueIt: "24 m", valueEn: "24 m" },
      { key: "guests", it: "Ospiti", en: "Guests", valueIt: "12", valueEn: "12" },
      { key: "captain", it: "Capitano", en: "Captain", valueIt: "Incluso", valueEn: "Included" },
    ],
  },
  {
    slug: "nerano-soleil",
    name: "Nerano Soleil",
    length: "14 m",
    guests: 9,
    year: 2020,
    captainIncluded: true,
    prices: { day: 1800, week: 10500, month: 34000 },
    currency: "EUR",
    featured: false,
    hasDetailPage: false,
    images: [U("photo-1528127269322-539801943592"), U("photo-1559827260-dc66d52bef19")],
    location: { it: "Nerano", en: "Nerano" },
    description: {
      it: "Barca aperta e solare, pensata per bagni a Marina del Cantone e pranzi a bordo.",
      en: "An open, sunlit boat made for swimming at Marina del Cantone and lunches on board.",
    },
    specs: [
      { key: "type", it: "Tipo", en: "Type", valueIt: "Open", valueEn: "Open boat" },
      { key: "length", it: "Lunghezza", en: "Length", valueIt: "14 m", valueEn: "14 m" },
      { key: "guests", it: "Ospiti", en: "Guests", valueIt: "9", valueEn: "9" },
      { key: "captain", it: "Capitano", en: "Captain", valueIt: "Incluso", valueEn: "Included" },
    ],
  },
  {
    slug: "ischia-azure",
    name: "Ischia Azure",
    length: "16 m",
    guests: 10,
    year: 2018,
    captainIncluded: true,
    prices: { day: 2100, week: 12500, month: 40000 },
    currency: "EUR",
    featured: false,
    hasDetailPage: false,
    images: [U("photo-1544552866-d3ed42536cfd"), U("photo-1507525428034-b723cf961d3e")],
    location: { it: "Ischia", en: "Ischia" },
    description: {
      it: "Crociere diurne tra Ischia, Procida e il Golfo di Napoli, con spazio e comfort per ospiti esigenti.",
      en: "Day cruises between Ischia, Procida and the Gulf of Naples — space and comfort for discerning guests.",
    },
    specs: [
      { key: "type", it: "Tipo", en: "Type", valueIt: "Motoryacht", valueEn: "Motor yacht" },
      { key: "length", it: "Lunghezza", en: "Length", valueIt: "16 m", valueEn: "16 m" },
      { key: "guests", it: "Ospiti", en: "Guests", valueIt: "10", valueEn: "10" },
      { key: "captain", it: "Capitano", en: "Captain", valueIt: "Incluso", valueEn: "Included" },
    ],
  },
];

export function getCharterBySlug(slug: string) {
  return charterListings.find((c) => c.slug === slug);
}

export function formatEur(amount: number, locale: string) {
  return new Intl.NumberFormat(locale === "it" ? "it-IT" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}
