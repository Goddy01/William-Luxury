"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Ornament } from "@/components/ui/Ornament";

export function TrustPillars() {
  const t = useTranslations("home");

  const pillars = [
    { title: t("pillar1Title"), text: t("pillar1Text"), n: "01" },
    { title: t("pillar2Title"), text: t("pillar2Text"), n: "02" },
    { title: t("pillar3Title"), text: t("pillar3Text"), n: "03" },
    { title: t("pillar4Title"), text: t("pillar4Text"), n: "04" },
  ];

  return (
    <section className="bg-navy py-16 text-cream sm:py-28 md:py-36">
      <Container>
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] uppercase tracking-royal text-brass">
              {t("trustEyebrow")}
            </p>
            <Ornament light className="mt-6 max-w-[6rem]" />
            <h2 className="mt-6 font-display text-3xl font-medium sm:text-4xl md:text-5xl">
              {t("trustTitle")}
            </h2>
            <p className="mt-5 text-sm text-cream/55 sm:text-base">
              {t("trustSubtitle")}
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2 lg:gap-12">
          {pillars.map((p, i) => (
            <SectionReveal key={p.n} delay={i * 0.1}>
              <div className="border-t border-brass/25 pt-6">
                <p className="text-[10px] tracking-royal text-brass">{p.n}</p>
                <h3 className="mt-3 font-display text-2xl font-medium sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/55">
                  {p.text}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
