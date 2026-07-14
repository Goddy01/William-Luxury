"use client";

import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Ornament } from "@/components/ui/Ornament";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const t = useTranslations("home");
  const locale = useLocale() as "it" | "en";

  return (
    <section className="bg-cream py-16 sm:py-28 md:py-36">
      <Container>
        <SectionReveal>
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-royal text-brass">
              {t("testimonialsEyebrow")}
            </p>
            <Ornament className="mt-6 max-w-[6rem]" />
            <h2 className="mt-6 font-display text-3xl font-medium text-navy sm:text-4xl md:text-5xl">
              {t("testimonialsTitle")}
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-10 sm:mt-16 md:grid-cols-3 md:gap-8">
          {testimonials.map((item, i) => (
            <SectionReveal key={item.author} delay={i * 0.1}>
              <blockquote className="h-full border-t border-brass/30 pt-8">
                <p className="font-display text-xl italic leading-snug text-navy sm:text-2xl">
                  “{item.quote[locale]}”
                </p>
                <footer className="mt-8">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-brass">
                    {item.author}
                  </p>
                  <p className="mt-1 text-sm text-navy/45">{item.place[locale]}</p>
                </footer>
              </blockquote>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
