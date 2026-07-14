export type Testimonial = {
  quote: { it: string; en: string };
  author: string;
  place: { it: string; en: string };
};

export const testimonials: Testimonial[] = [
  {
    quote: {
      it: "Una giornata tra Capri e Positano organizzata con precisione e calore. Il capitano sapeva esattamente dove ancorare.",
      en: "A day between Capri and Positano arranged with precision and warmth. The captain knew exactly where to anchor.",
    },
    author: "Elena M.",
    place: { it: "Milano", en: "Milan" },
  },
  {
    quote: {
      it: "Il trasferimento in elicottero al matrimonio è stato un momento che nessuno dimenticherà. Discreti, puntuali, impeccabili.",
      en: "The helicopter transfer to the wedding was a moment none of us will forget. Discreet, punctual, flawless.",
    },
    author: "James & Sophie",
    place: { it: "Londra", en: "London" },
  },
  {
    quote: {
      it: "Ci hanno accompagnato nella vendita della barca con pazienza e competenza. Un intermediario di cui ci si fida.",
      en: "They guided us through selling our boat with patience and expertise. A broker you can trust.",
    },
    author: "Marco R.",
    place: { it: "Napoli", en: "Naples" },
  },
];
