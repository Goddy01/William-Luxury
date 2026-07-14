import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Ornament } from "@/components/ui/Ornament";
import { siteImages } from "@/data/images";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "transfers" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function TransfersPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations("transfers");

  return (
    <div className="bg-cream">
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Container className="py-14 sm:py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionReveal>
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]">
              <Image
                src={siteImages.ncc}
                alt=""
                fill
                className="img-grade object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="text-[10px] uppercase tracking-royal text-brass">
              {t("noPrice")}
            </p>
            <Ornament className="mt-5 ml-0 max-w-[4rem]" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-navy/65 sm:text-base">
              {t("body1")}
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-navy/65 sm:text-base">
              {t("body2")}
            </p>
            <Link
              href="/contact?interest=transfers"
              className="mt-10 inline-flex border border-brass/50 bg-brass/10 px-8 py-3.5 text-[10px] uppercase tracking-[0.22em] text-navy transition-all duration-500 ease-luxury hover:bg-brass hover:text-navy"
            >
              {t("cta")}
            </Link>
          </SectionReveal>
        </div>
      </Container>
    </div>
  );
}
