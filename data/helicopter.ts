import { siteImages } from "./images";

export type HelicopterOffering = {
  id: "tour" | "transfer" | "wedding" | "gender";
  fromPrice?: number;
  image: string;
};

export const helicopterOfferings: HelicopterOffering[] = [
  { id: "tour", fromPrice: 895, image: siteImages.helicopterTour },
  { id: "transfer", image: siteImages.helicopterTransfer },
  { id: "wedding", image: siteImages.helicopterWedding },
  { id: "gender", image: siteImages.helicopterReveal },
];

export const helicopterMeta = {
  fromPrice: 895,
  seatsMin: 3,
  seatsMax: 5,
  tourDestinations: ["Naples", "Amalfi Coast", "Gulf Islands"] as const,
};
