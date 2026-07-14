export type LocaleCopy = { it: string; en: string };

export type SalesListing = {
  slug: string;
  name: string;
  length: string;
  year: number;
  berths: number;
  price: number;
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

export const salesListings: SalesListing[] = [
  {
    slug: "mediterranea-42",
    name: "Mediterranea 42",
    length: "12.8 m",
    year: 2017,
    berths: 6,
    price: 285000,
    currency: "EUR",
    featured: true,
    hasDetailPage: true,
    images: [
      U("photo-1569263979104-865ab7cd8d13"),
      U("photo-1567899378494-47b22a2ae96a"),
      U("photo-1605281317010-fe5ffe798166"),
      U("photo-1544551763-46a013bb70d5"),
      U("photo-1544552866-d3ed42536cfd"),
      U("photo-1528127269322-539801943592"),
    ],
    location: { it: "Sorrento", en: "Sorrento" },
    description: {
      it: "Motoryacht curato e pronto a navigare. Interni luminosi, cabine silenziose e un ponte ideale per la vita a mare nel Mediterraneo centrale. Documentazione completa e assistenza alla mediazione.",
      en: "A well-kept motor yacht, ready to cruise. Bright interiors, quiet cabins and a deck made for Mediterranean living. Full documentation and brokerage support throughout.",
    },
    specs: [
      { key: "builder", it: "Cantiere", en: "Builder", valueIt: "Mediterranea", valueEn: "Mediterranea" },
      { key: "type", it: "Tipo", en: "Type", valueIt: "Motoryacht", valueEn: "Motor yacht" },
      { key: "length", it: "Lunghezza", en: "Length", valueIt: "12.8 m", valueEn: "12.8 m" },
      { key: "year", it: "Anno", en: "Year", valueIt: "2017", valueEn: "2017" },
      { key: "berths", it: "Posti letto", en: "Berths", valueIt: "6", valueEn: "6" },
      { key: "location", it: "Ubicazione", en: "Location", valueIt: "Sorrento", valueEn: "Sorrento" },
      { key: "condition", it: "Condizione", en: "Condition", valueIt: "Ottima", valueEn: "Excellent" },
    ],
  },
  {
    slug: "azimut-55",
    name: "Azimut 55",
    length: "16.8 m",
    year: 2015,
    berths: 8,
    price: 620000,
    currency: "EUR",
    featured: true,
    hasDetailPage: false,
    images: [U("photo-1567899378494-47b22a2ae96a"), U("photo-1544551763-46a013bb70d5")],
    location: { it: "Napoli", en: "Naples" },
    description: {
      it: "Linee italiane iconiche, volume generoso, ideale come barca di famiglia o per charter selezionati.",
      en: "Iconic Italian lines and generous volume — ideal as a family yacht or for select charter.",
    },
    specs: [
      { key: "builder", it: "Cantiere", en: "Builder", valueIt: "Azimut", valueEn: "Azimut" },
      { key: "length", it: "Lunghezza", en: "Length", valueIt: "16.8 m", valueEn: "16.8 m" },
      { key: "year", it: "Anno", en: "Year", valueIt: "2015", valueEn: "2015" },
      { key: "berths", it: "Posti letto", en: "Berths", valueIt: "8", valueEn: "8" },
    ],
  },
  {
    slug: "riva-rivale-52",
    name: "Riva Rivale 52",
    length: "16.1 m",
    year: 2012,
    berths: 4,
    price: 890000,
    currency: "EUR",
    featured: true,
    hasDetailPage: false,
    images: [U("photo-1544552866-d3ed42536cfd"), U("photo-1605281317010-fe5ffe798166")],
    location: { it: "Capri", en: "Capri" },
    description: {
      it: "Eleganza senza tempo. Un Riva per chi cerca presenza in porto e piacere di guida in mare aperto.",
      en: "Timeless elegance. A Riva for those who want presence in harbour and pleasure underway.",
    },
    specs: [
      { key: "builder", it: "Cantiere", en: "Builder", valueIt: "Riva", valueEn: "Riva" },
      { key: "length", it: "Lunghezza", en: "Length", valueIt: "16.1 m", valueEn: "16.1 m" },
      { key: "year", it: "Anno", en: "Year", valueIt: "2012", valueEn: "2012" },
      { key: "berths", it: "Posti letto", en: "Berths", valueIt: "4", valueEn: "4" },
    ],
  },
  {
    slug: "princess-v50",
    name: "Princess V50",
    length: "15.5 m",
    year: 2019,
    berths: 6,
    price: 745000,
    currency: "EUR",
    featured: false,
    hasDetailPage: false,
    images: [U("photo-1528127269322-539801943592"), U("photo-1559827260-dc66d52bef19")],
    location: { it: "Salerno", en: "Salerno" },
    description: {
      it: "Prestazioni e comfort britannici, basata sulla Costiera. Manutenzione recente e inventario completo.",
      en: "British performance and comfort, based on the Coast. Recent maintenance and a complete inventory.",
    },
    specs: [
      { key: "builder", it: "Cantiere", en: "Builder", valueIt: "Princess", valueEn: "Princess" },
      { key: "length", it: "Lunghezza", en: "Length", valueIt: "15.5 m", valueEn: "15.5 m" },
      { key: "year", it: "Anno", en: "Year", valueIt: "2019", valueEn: "2019" },
      { key: "berths", it: "Posti letto", en: "Berths", valueIt: "6", valueEn: "6" },
    ],
  },
  {
    slug: "jeanneau-leader-36",
    name: "Jeanneau Leader 36",
    length: "11.4 m",
    year: 2016,
    berths: 4,
    price: 195000,
    currency: "EUR",
    featured: false,
    hasDetailPage: false,
    images: [U("photo-1468413253725-0d5181091126"), U("photo-1507525428034-b723cf961d3e")],
    location: { it: "Positano", en: "Positano" },
    description: {
      it: "Daycruiser versatile, facile da gestire, perfetta per la vita tra costa e isole.",
      en: "A versatile daycruiser, easy to handle — perfect for life between coast and islands.",
    },
    specs: [
      { key: "builder", it: "Cantiere", en: "Builder", valueIt: "Jeanneau", valueEn: "Jeanneau" },
      { key: "length", it: "Lunghezza", en: "Length", valueIt: "11.4 m", valueEn: "11.4 m" },
      { key: "year", it: "Anno", en: "Year", valueIt: "2016", valueEn: "2016" },
      { key: "berths", it: "Posti letto", en: "Berths", valueIt: "4", valueEn: "4" },
    ],
  },
];

export function getSaleBySlug(slug: string) {
  return salesListings.find((s) => s.slug === slug);
}
