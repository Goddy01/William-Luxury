import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Gallery } from "@/components/listings/Gallery";
import { SpecsTable } from "@/components/listings/SpecsTable";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { formatEur } from "@/data/charter";
import { getSaleBySlug, salesListings } from "@/data/sales";
import { SITE_NAME } from "@/lib/site";

type Props = {
  params: { locale: string; slug: string };
};

export function generateStaticParams() {
  return salesListings
    .filter((s) => s.hasDetailPage)
    .flatMap((s) =>
      ["it", "en"].map((locale) => ({ locale, slug: s.slug }))
    );
}

export async function generateMetadata({
  params: { locale, slug },
}: Props): Promise<Metadata> {
  const boat = getSaleBySlug(slug);
  if (!boat) return { title: SITE_NAME };

  const loc = locale as "it" | "en";
  return {
    title: boat.name,
    description: boat.description[loc],
    openGraph: {
      title: `${boat.name} · ${SITE_NAME}`,
      description: boat.description[loc],
      type: "website",
      url: `/${locale}/sales/${slug}`,
      images: [{ url: boat.images[0], width: 1200, height: 800, alt: boat.name }],
    },
  };
}

export default async function SalesDetailPage({
  params: { locale, slug },
}: Props) {
  setRequestLocale(locale);
  const t = await getTranslations("sales");
  const boat = getSaleBySlug(slug);

  if (!boat || !boat.hasDetailPage) {
    notFound();
  }

  const loc = locale as "it" | "en";
  const price = formatEur(boat.price, locale);

  return (
    <div className="bg-cream">
      <div className="bg-navy pb-8 pt-28 sm:pb-10 sm:pt-32 md:pt-40">
        <Container>
          <Link
            href="/sales"
            className="inline-flex text-[10px] uppercase tracking-[0.18em] text-cream/50 transition-colors hover:text-brass-light sm:text-[11px]"
          >
            ← {t("backToList")}
          </Link>
          <h1 className="mt-5 break-words font-display text-3xl leading-tight text-cream sm:mt-6 sm:text-4xl md:text-6xl">
            {boat.name}
          </h1>
          <div className="mt-4 flex flex-col gap-1 text-sm text-cream/60 sm:mt-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:text-base">
            <span>{boat.length}</span>
            <span className="hidden text-brass/50 sm:inline">·</span>
            <span>{boat.location[loc]}</span>
            <span className="hidden text-brass/50 sm:inline">·</span>
            <span className="font-medium text-cream/80">{price}</span>
          </div>
        </Container>
      </div>

      <Container className="py-8 sm:py-12 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-8">
            <SectionReveal>
              <Gallery images={boat.images} alt={boat.name} />
            </SectionReveal>

            <div className="mt-8 border border-brass/30 bg-navy p-6 text-cream sm:p-8 lg:hidden">
              <p className="text-[10px] uppercase tracking-royal text-brass">
                {t("detailCta")}
              </p>
              <p className="mt-3 font-display text-2xl font-medium sm:text-3xl">
                {price}
              </p>
              <Link
                href="/contact?interest=sales"
                className="mt-6 flex w-full items-center justify-center border border-brass/70 px-6 py-3.5 text-[10px] uppercase tracking-[0.22em] text-brass-light transition-all duration-500 ease-luxury hover:border-brass hover:bg-brass/15"
              >
                {t("enquire")}
              </Link>
            </div>

            <SectionReveal className="mt-10 sm:mt-14">
              <h2 className="font-display text-xl text-navy sm:text-2xl">
                {t("description")}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy/65 sm:mt-5 sm:text-base">
                {boat.description[loc]}
              </p>
            </SectionReveal>
          </div>

          <aside className="min-w-0 lg:col-span-4">
            <SectionReveal>
              <div className="lg:sticky lg:top-28">
                <h2 className="mb-5 font-display text-xl text-navy sm:mb-6 sm:text-2xl">
                  {t("specs")}
                </h2>
                <SpecsTable
                  rows={boat.specs.map((s) => ({
                    label: s[loc],
                    value: loc === "it" ? s.valueIt : s.valueEn,
                  }))}
                />
                <div className="mt-8 hidden border border-brass/30 bg-navy p-8 text-cream shadow-royal lg:mt-10 lg:block">
                  <p className="text-[10px] uppercase tracking-royal text-brass">
                    {t("detailCta")}
                  </p>
                  <p className="mt-4 font-display text-3xl font-medium">{price}</p>
                  <Link
                    href="/contact?interest=sales"
                    className="mt-8 inline-flex border border-brass/70 px-7 py-3.5 text-[10px] uppercase tracking-[0.22em] text-brass-light transition-all duration-500 ease-luxury hover:border-brass hover:bg-brass/15"
                  >
                    {t("enquire")}
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </aside>
        </div>

        <SectionReveal className="mt-12 sm:mt-16 md:mt-20">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
            {boat.images.slice(1, 4).map((src) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden last:hidden sm:last:block"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </SectionReveal>
      </Container>
    </div>
  );
}
