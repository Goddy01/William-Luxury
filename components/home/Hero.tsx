"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteImages } from "@/data/images";
import { Ornament } from "@/components/ui/Ornament";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const t = useTranslations("home");
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.25]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[520px] overflow-hidden bg-navy sm:min-h-[640px]"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div className="ken-burns absolute inset-0">
          <Image
            src={siteImages.hero}
            alt=""
            fill
            priority
            className="img-grade object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-royal-fade" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,22,40,0.55)_100%)]" />
        <div className="absolute inset-0 bg-amalfi-glow" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 pb-16 text-center sm:px-6 sm:pb-20"
      >
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease }}
          className="mb-8"
        >
          <Ornament light className="max-w-[8rem]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease }}
          className="font-display text-display-xl font-medium text-cream"
        >
          William Broker
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="mt-4 font-sans text-[11px] uppercase tracking-royal text-brass-light md:text-xs"
        >
          Yacht & Boat
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75, ease }}
          className="mt-8"
        >
          <Ornament light className="max-w-[5rem]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease }}
          className="mt-6 max-w-lg px-2 font-display text-xl font-normal italic leading-snug text-cream/90 sm:mt-8 sm:text-2xl md:text-3xl"
        >
          {t("heroTagline")}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, ease }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 sm:bottom-12 sm:gap-4"
      >
        <span className="text-[10px] uppercase tracking-royal text-brass-light/70">
          {t("scrollCue")}
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-brass/20">
          <span className="scroll-cue-line absolute inset-x-0 top-0 h-full bg-gradient-to-b from-brass-light via-brass to-transparent" />
        </span>
      </motion.div>
    </section>
  );
}
