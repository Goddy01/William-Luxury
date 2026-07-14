"use client";

import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { ListingCard } from "@/components/listings/ListingCard";
import { formatEur } from "@/data/charter";
import { salesListings } from "@/data/sales";

export function SalesListing() {
  const t = useTranslations("sales");
  const locale = useLocale();

  return (
    <Container className="py-12 sm:py-16 md:py-20">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {salesListings.map((boat) => (
          <ListingCard
            key={boat.slug}
            href={
              boat.hasDetailPage
                ? `/sales/${boat.slug}`
                : "/contact?interest=sales"
            }
            image={boat.images[0]}
            title={boat.name}
            meta={`${boat.length} · ${boat.year} · ${boat.berths} ${t("berths").toLowerCase()}`}
            price={formatEur(boat.price, locale)}
            badge={t("forSale")}
            cta={boat.hasDetailPage ? t("viewDetails") : t("enquire")}
          />
        ))}
      </div>
    </Container>
  );
}
