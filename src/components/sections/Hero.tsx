"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Button from "king/components/ui/Button";
import { staggerContainer, fadeUpItem } from "king/lib/motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center px-4 text-center"
    >
      <motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-5"
      >
        <motion.div
          variants={fadeUpItem}
          className="glass relative h-32 w-32 rounded-full p-2 sm:h-40 sm:w-40"
        >
          <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-primary-strong to-accent-blue">
            <Image alt="Marvin logo" src="/marvin.svg" fill className="object-contain p-8" />
          </div>
        </motion.div>

        <motion.p
          variants={fadeUpItem}
          className="font-mono text-sm text-primary-strong dark:text-primary"
        >
          {"> software engineer_"}
        </motion.p>

        <motion.h1
          variants={fadeUpItem}
          className="text-[clamp(2rem,8vw,4rem)] font-semibold tracking-tight text-foreground"
        >
          Marvin Villalon
        </motion.h1>

        <motion.p
          variants={fadeUpItem}
          className="max-w-md text-foreground-muted"
        >
          I build clean, full-stack web experiences — from React front ends to
          .NET back ends.
        </motion.p>

        <motion.div
          variants={fadeUpItem}
          className="mt-2 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button
            title="Get to know me"
            icon={<Icon icon="ph:arrow-down-bold" />}
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
          />
          <Button
            title="Download CV"
            icon={<Icon icon="ph:download-simple-bold" />}
            href="/cv.pdf"
            download="Marvin-Villalon-CV.pdf"
            variant="glass"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;