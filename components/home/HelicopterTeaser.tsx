"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Ornament } from "@/components/ui/Ornament";
import { helicopterOfferings, helicopterMeta } from "@/data/helicopter";

export function HelicopterTeaser() {
  const t = useTranslations("home");

  const items = [
    { id: "tour" as const, title: t("heliTour"), desc: t("heliTourDesc") },
    { id: "transfer" as const, title: t("heliTransfer"), desc: t("heliTransferDesc") },
    { id: "wedding" as const, title: t("heliWedding"), desc: t("heliWeddingDesc") },
    { id: "gender" as const, title: t("heliGender"), desc: t("heliGenderDesc") },
  ];

  return (
    <section className="bg-cream-ivory py-16 sm:py-28 md:py-36">
      <Container>
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] uppercase tracking-royal text-brass">
              {t("heliEyebrow")}
            </p>
            <Ornament className="mt-6 max-w-[6rem]" />
            <h2 className="mt-6 font-display text-3xl font-medium text-navy sm:text-4xl md:text-5xl">
              {t("heliTitle")}
            </h2>
            <p className="mt-5 text-sm text-navy/55 sm:text-base">
              {t("heliSubtitle")}
            </p>
            <p className="mt-4 font-display text-2xl text-brass-deep sm:text-3xl">
              {t("heliFrom")} €{helicopterMeta.fromPrice}
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const offering = helicopterOfferings.find((o) => o.id === item.id)!;
            return (
              <SectionReveal key={item.id} delay={i * 0.08}>
                <Link href="/helicopter" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={offering.image}
                      alt={item.title}
                      fill
                      className="img-grade object-cover transition-transform duration-[1.1s] ease-luxury group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <h3 className="font-display text-xl text-cream sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-cream/65 sm:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal className="mt-10 text-center sm:mt-14">
          <Link
            href="/helicopter"
            className="inline-flex border border-brass/50 px-8 py-3.5 text-[10px] uppercase tracking-[0.22em] text-navy transition-all duration-500 ease-luxury hover:border-brass hover:bg-brass/10"
          >
            {t("heliCta")}
          </Link>
        </SectionReveal>
      </Container>
    </section>
  );
}
