import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { CharterListing } from "@/components/listings/CharterListing";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "charter" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function CharterPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations("charter");

  return (
    <div className="bg-cream">
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <CharterListing />
    </div>
  );
}
