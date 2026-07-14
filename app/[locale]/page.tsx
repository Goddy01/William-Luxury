import { setRequestLocale, getTranslations } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { ServiceTiles } from "@/components/home/ServiceTiles";
import { DestinationsStrip } from "@/components/home/DestinationsStrip";
import { FeaturedFleet } from "@/components/home/FeaturedFleet";
import { HelicopterTeaser } from "@/components/home/HelicopterTeaser";
import { TrustPillars } from "@/components/home/TrustPillars";
import { Testimonials } from "@/components/home/Testimonials";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ServiceTiles />
      <DestinationsStrip />
      <FeaturedFleet />
      <HelicopterTeaser />
      <TrustPillars />
      <Testimonials />
    </>
  );
}
