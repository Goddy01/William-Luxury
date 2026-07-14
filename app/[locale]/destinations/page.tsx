import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { destinations } from "@/data/destinations";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "destinations" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function DestinationsPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations("destinations");
  const loc = locale as "it" | "en";

  return (
    <div className="bg-cream">
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Container className="py-12 sm:py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {destinations.map((d, i) => (
            <SectionReveal key={d.slug} delay={(i % 3) * 0.08}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    className="img-grade object-cover transition-transform duration-[1.1s] ease-luxury group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <h2 className="font-display text-2xl text-cream sm:text-3xl">
                      {d.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-cream/70">
                      {d.line[loc]}
                    </p>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
