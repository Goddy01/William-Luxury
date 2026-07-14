export type Destination = {
  slug: string;
  name: string;
  line: { it: string; en: string };
  image: string;
};

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?fm=webp&fit=crop&w=${w}&q=80`;

export const destinations: Destination[] = [
  {
    slug: "sorrento",
    name: "Sorrento",
    line: {
      it: "Terrazze sul Golfo, limoni e un molo da cui parte ogni sogno.",
      en: "Terraces over the Gulf, lemon groves, and a harbour where every journey begins.",
    },
    image: U("photo-1534274988757-a28bf1a57c17"),
  },
  {
    slug: "nerano",
    name: "Nerano",
    line: {
      it: "Acque limpide e il silenzio delle calette, a due passi da Marina del Cantone.",
      en: "Clear water and quiet coves, a breath from Marina del Cantone.",
    },
    image: U("photo-1507525428034-b723cf961d3e"),
  },
  {
    slug: "positano",
    name: "Positano",
    line: {
      it: "Case a cascata, sera dorata e l’arrivo in barca come un rito.",
      en: "Cascading houses, golden evenings, and arriving by boat as a ritual.",
    },
    image: U("photo-1528127269322-539801943592"),
  },
  {
    slug: "amalfi",
    name: "Amalfi",
    line: {
      it: "Storia sul mare, cattedrale e una costa scolpita nella luce.",
      en: "History on the water, a cathedral, and a coastline carved in light.",
    },
    image: U("photo-1559827260-dc66d52bef19"),
  },
  {
    slug: "capri",
    name: "Capri",
    line: {
      it: "Faraglioni, Faro e quella luce che rende tutto possibile.",
      en: "Faraglioni, the lighthouse, and light that makes everything feel possible.",
    },
    image: U("photo-1516483638261-f4dbaf036963"),
  },
  {
    slug: "ischia",
    name: "Ischia",
    line: {
      it: "Termine vulcaniche, giardini e un ritmo più lento del Golfo.",
      en: "Thermal waters, gardens, and a slower rhythm of the Gulf.",
    },
    image: U("photo-1473496169904-658ba7c44d8a"),
  },
  {
    slug: "procida",
    name: "Procida",
    line: {
      it: "Case pastello, pescherecci e un’intimità che resta.",
      en: "Pastel houses, fishing boats, and an intimacy that lingers.",
    },
    image: U("photo-1540946485063-a40da27545f8"),
  },
  {
    slug: "ponza",
    name: "Ponza",
    line: {
      it: "Isole pontine, scogliere bianche e giornate senza fretta.",
      en: "Pontine islands, pale cliffs, and days without hurry.",
    },
    image: U("photo-1544551763-46a013bb70d5"),
  },
  {
    slug: "porto-cervo",
    name: "Porto Cervo",
    line: {
      it: "Costa Smeralda, eleganza riservata e ormeggi luminosi.",
      en: "Costa Smeralda, reserved elegance and luminous berths.",
    },
    image: U("photo-1567899378494-47b22a2ae96a"),
  },
  {
    slug: "ibiza",
    name: "Ibiza",
    line: {
      it: "Mediterraneo occidentale, tramonti e una notte che sa di sale.",
      en: "Western Mediterranean, sunsets, and nights that taste of salt.",
    },
    image: U("photo-1540541338287-41700207dee6"),
  },
];
