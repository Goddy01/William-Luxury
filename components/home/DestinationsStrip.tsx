"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Ornament } from "@/components/ui/Ornament";
import { destinations } from "@/data/destinations";

export function DestinationsStrip() {
  const t = useTranslations("home");
  const locale = useLocale() as "it" | "en";

  return (
    <section className="relative overflow-hidden bg-navy py-16 text-cream sm:py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(196,165,116,0.08)_0%,transparent_50%)]" />

      <Container className="relative">
        <SectionReveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-royal text-brass">
                {t("destEyebrow")}
              </p>
              <Ornament light className="mt-5 ml-0 max-w-[5rem]" />
              <h2 className="mt-5 font-display text-3xl font-medium sm:text-4xl md:text-5xl">
                {t("destTitle")}
              </h2>
              <p className="mt-4 max-w-md text-sm text-cream/55 sm:text-base">
                {t("destSubtitle")}
              </p>
            </div>
            <Link
              href="/destinations"
              className="text-[10px] uppercase tracking-[0.22em] text-brass-light transition-colors hover:text-cream"
            >
              {t("destViewAll")}
            </Link>
          </div>
        </SectionReveal>
      </Container>

      <div className="relative mt-10 sm:mt-14">
        <div className="flex gap-3 overflow-x-auto px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-4 sm:px-6 md:px-10 [&::-webkit-scrollbar]:hidden">
          {destinations.map((d, i) => (
            <SectionReveal key={d.slug} delay={i * 0.04} className="shrink-0">
              <Link
                href="/destinations"
                className="group block w-[220px] sm:w-[260px]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    className="img-grade object-cover transition-transform duration-[1.1s] ease-luxury group-hover:scale-105"
                    sizes="260px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-xl text-cream sm:text-2xl">
                      {d.name}
                    </p>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-cream/60">
                      {d.line[locale]}
                    </p>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
