"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import ImageCarousel from "king/components/ImageCarousel";
import Tag from "king/components/ui/Tag";
import { ProfileImages } from "king/constants/images";
import { INTRODUCTION, TRAITS } from "king/constants/text";
import { fadeUp, staggerContainer } from "king/lib/motion";

const STATS = [
  { value: "2023", label: "Started as a professional dev" },
  { value: "15+", label: "Tools & frameworks in daily use" },
  { value: "∞", label: "Curiosity for what's next" },
];

// Scattered sticker positions around the photo on large screens.
// Cycles via modulo if TRAITS ever grows past this list.
const STICKER_POSITIONS = [
  { top: "-6%", left: "-14%", rotate: -9 },
  { top: "6%", right: "-16%", rotate: 7 },
  { bottom: "22%", left: "-18%", rotate: 5 },
  { bottom: "-8%", right: "-10%", rotate: -6 },
  { top: "48%", left: "-24%", rotate: 10 },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden px-4 py-24 sm:py-32"
    >

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 pt-24 sm:pt-32 lg:flex-row lg:items-center lg:gap-24">
        {/* Photo + scattered trait stickers */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto w-full max-w-[260px] shrink-0 sm:max-w-xs lg:mx-0"
        >
          <div className="-rotate-3">
            <ImageCarousel images={ProfileImages} />
          </div>

          {/* Desktop: stickers scattered around the photo */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {TRAITS.map((trait, index) => {
              const pos = STICKER_POSITIONS[index % STICKER_POSITIONS.length];
              return (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: pos.rotate }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    delay: 0.15 + index * 0.08,
                    type: "spring",
                    stiffness: 200,
                    damping: 16,
                  }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  className="pointer-events-auto absolute"
                  style={pos}
                >
                  <Tag
                    label={trait.title}
                    icon={<Icon icon={trait.icon} width={14} height={14} />}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Mobile / tablet: stickers wrap below the photo */}
          <motion.div
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-8 flex flex-wrap justify-center gap-2 lg:hidden"
          >
            {TRAITS.map((trait, index) => (
              <motion.div
                key={trait.title}
                style={{ rotate: index % 2 === 0 ? -4 : 4 }}
              >
                <Tag
                  label={trait.title}
                  icon={<Icon icon={trait.icon} width={14} height={14} />}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Big bio + stats */}
        <div className="relative lg:flex-1">
          {/* <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-mono text-sm text-primary-strong dark:text-primary"
          >
            {"// 01 — about"}
          </motion.p> */}

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-2 text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-primary"
          >
            A little about me
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl"
          >
            {INTRODUCTION}
          </motion.p>

          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid grid-cols-3 gap-4 sm:gap-8"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl px-3 py-5 text-center sm:px-5 sm:py-7"
              >
                <p className="text-accent-blue text-3xl font-bold sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs text-foreground-muted sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;