"use client";

import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Ornament } from "@/components/ui/Ornament";
import { ListingCard } from "@/components/listings/ListingCard";
import { charterListings, formatEur } from "@/data/charter";
import { salesListings } from "@/data/sales";

export function FeaturedFleet() {
  const t = useTranslations("home");
  const locale = useLocale();

  const charter = charterListings
    .filter((c) => c.featured)
    .slice(0, 2)
    .map((c) => ({
      href: c.hasDetailPage ? `/charter/${c.slug}` : "/contact?interest=charter",
      image: c.images[0],
      title: c.name,
      meta: `${c.length} · ${c.guests} ${locale === "it" ? "ospiti" : "guests"}`,
      price: `${formatEur(c.prices.day, locale)}${locale === "it" ? "/g" : "/day"}`,
      badge: t("featuredCharter"),
      cta: locale === "it" ? "Dettagli" : "View details",
    }));

  const sales = salesListings
    .filter((s) => s.featured)
    .slice(0, 2)
    .map((s) => ({
      href: s.hasDetailPage ? `/sales/${s.slug}` : "/contact?interest=sales",
      image: s.images[0],
      title: s.name,
      meta: `${s.length} · ${s.year}`,
      price: formatEur(s.price, locale),
      badge: t("featuredSale"),
      cta: locale === "it" ? "Dettagli" : "View details",
    }));

  const items = [...charter, ...sales];

  return (
    <section className="bg-cream py-16 sm:py-28 md:py-36">
      <Container>
        <SectionReveal>
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-royal text-brass">
              {t("featuredEyebrow")}
            </p>
            <Ornament className="mt-6 max-w-[6rem]" />
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-medium text-navy sm:text-4xl md:text-5xl">
              {t("featuredTitle")}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm text-navy/55 sm:text-base">
              {t("featuredSubtitle")}
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-16 sm:gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible [&::-webkit-scrollbar]:hidden">
          {items.map((item, i) => (
            <SectionReveal key={item.href + item.title} delay={i * 0.08} className="min-w-[260px] shrink-0 md:min-w-0">
              <ListingCard {...item} />
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
