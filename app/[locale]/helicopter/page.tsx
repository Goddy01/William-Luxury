import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Ornament } from "@/components/ui/Ornament";
import { helicopterOfferings, helicopterMeta } from "@/data/helicopter";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "helicopter" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function HelicopterPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations("helicopter");

  const sections = [
    {
      id: "tour" as const,
      title: t("tourTitle"),
      text: t("tourText"),
      meta: t("tourTags"),
      reverse: false,
    },
    {
      id: "transfer" as const,
      title: t("transferTitle"),
      text: t("transferText"),
      meta: null,
      reverse: true,
    },
    {
      id: "wedding" as const,
      title: t("weddingTitle"),
      text: t("weddingText"),
      meta: null,
      reverse: false,
    },
    {
      id: "gender" as const,
      title: t("genderTitle"),
      text: t("genderText"),
      meta: null,
      reverse: true,
    },
  ];

  return (
    <div className="bg-cream">
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Container className="py-12 sm:py-16">
        <SectionReveal>
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-8">
            <p className="font-display text-2xl text-brass-deep sm:text-3xl">
              {t("fromPrice")}
            </p>
            <span className="hidden h-4 w-px bg-brass/40 sm:block" />
            <p className="text-sm tracking-wide text-navy/55">{t("seats")}</p>
          </div>
        </SectionReveal>
      </Container>

      <div className="pb-16 sm:pb-24 md:pb-32">
        {sections.map((section, i) => {
          const offering = helicopterOfferings.find((o) => o.id === section.id)!;
          return (
            <section
              key={section.id}
              className={i % 2 === 0 ? "bg-cream" : "bg-cream-ivory"}
            >
              <Container className="py-14 sm:py-20 md:py-28">
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    section.reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <SectionReveal>
                    <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/12]">
                      <Image
                        src={offering.image}
                        alt={section.title}
                        fill
                        className="img-grade object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </SectionReveal>
                  <SectionReveal delay={0.1}>
                    <p className="text-[10px] uppercase tracking-royal text-brass">
                      0{i + 1}
                    </p>
                    <Ornament className="mt-5 ml-0 max-w-[4rem]" />
                    <h2 className="mt-5 font-display text-3xl font-medium text-navy sm:text-4xl md:text-5xl">
                      {section.title}
                    </h2>
                    {section.meta && (
                      <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-brass-deep">
                        {section.meta}
                      </p>
                    )}
                    {offering.fromPrice && (
                      <p className="mt-4 font-display text-xl text-navy/70">
                        {locale === "it" ? "da" : "from"} €
                        {helicopterMeta.fromPrice}
                      </p>
                    )}
                    <p className="mt-5 max-w-md text-sm leading-relaxed text-navy/60 sm:text-base">
                      {section.text}
                    </p>
                  </SectionReveal>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      <section className="border-t border-brass/20 bg-navy py-16 text-center text-cream sm:py-24">
        <Container>
          <SectionReveal>
            <Ornament light className="max-w-[5rem]" />
            <Link
              href="/contact?interest=helicopter"
              className="mt-8 inline-flex border border-brass/60 px-10 py-4 text-[11px] uppercase tracking-[0.22em] text-brass-light transition-all duration-500 ease-luxury hover:border-brass hover:bg-brass/15"
            >
              {t("cta")}
            </Link>
          </SectionReveal>
        </Container>
      </section>
    </div>
  );
}
