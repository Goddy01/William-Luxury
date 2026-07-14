"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { ListingCard } from "@/components/listings/ListingCard";
import { charterListings, formatEur } from "@/data/charter";
import { cn } from "@/lib/cn";

type Period = "day" | "week" | "month";

export function CharterListing() {
  const t = useTranslations("charter");
  const locale = useLocale();
  const [period, setPeriod] = useState<Period>("day");

  const suffix =
    period === "day" ? t("perDay") : period === "week" ? t("perWeek") : t("perMonth");

  const tabs: { id: Period; label: string }[] = [
    { id: "day", label: t("priceDay") },
    { id: "week", label: t("priceWeek") },
    { id: "month", label: t("priceMonth") },
  ];

  return (
    <Container className="py-12 sm:py-16 md:py-20">
      <div className="mb-10 flex flex-wrap items-center gap-2 sm:mb-14">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setPeriod(tab.id)}
            className={cn(
              "px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ease-luxury",
              period === tab.id
                ? "bg-navy text-cream"
                : "border border-brass/30 text-navy/60 hover:border-brass hover:text-navy"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {charterListings.map((boat) => (
          <ListingCard
            key={boat.slug}
            href={
              boat.hasDetailPage
                ? `/charter/${boat.slug}`
                : "/contact?interest=charter"
            }
            image={boat.images[0]}
            title={boat.name}
            meta={`${boat.length} · ${boat.guests} ${t("guests").toLowerCase()}${boat.captainIncluded ? ` · ${t("captain")}` : ""}`}
            price={`${formatEur(boat.prices[period], locale)}${suffix}`}
            badge={boat.captainIncluded ? t("captain") : undefined}
            cta={boat.hasDetailPage ? t("viewDetails") : t("enquire")}
          />
        ))}
      </div>
    </Container>
  );
}
