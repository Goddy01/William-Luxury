import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { SalesListing } from "@/components/listings/SalesListing";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "sales" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function SalesPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations("sales");

  return (
    <div className="bg-cream">
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <SalesListing />
    </div>
  );
}
