import Image from "next/image";
import { Suspense } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteContact } from "@/data/contact";
import { siteImages } from "@/data/images";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function ContactPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const loc = locale as "it" | "en";

  const waMessage =
    loc === "it"
      ? "Buongiorno, vorrei ricevere informazioni."
      : "Hello, I would like more information.";
  const waHref = `https://wa.me/${siteContact.whatsapp}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="bg-cream">
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Container className="py-12 sm:py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <SectionReveal className="lg:col-span-7">
            <Suspense fallback={<div className="h-96 animate-pulse bg-cream-muted/40" />}>
              <ContactForm />
            </Suspense>
          </SectionReveal>

          <SectionReveal delay={0.1} className="lg:col-span-5">
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-royal text-brass">
                  {t("details")}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-navy/70">
                  <li>
                    <a
                      href={`mailto:${siteContact.email}`}
                      className="transition-colors hover:text-brass-deep"
                    >
                      {siteContact.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${siteContact.whatsapp}`}
                      className="transition-colors hover:text-brass-deep"
                    >
                      {siteContact.phoneDisplay}
                    </a>
                  </li>
                  <li>{siteContact.address[loc]}</li>
                </ul>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-navy transition-all duration-500 hover:bg-[#25D366]/20"
                >
                  {t("whatsapp")}
                </a>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={siteImages.contactMap}
                  alt={t("mapLabel")}
                  fill
                  className="img-grade object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-navy/25" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] uppercase tracking-royal text-cream">
                    {t("mapLabel")}
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </Container>
    </div>
  );
}
