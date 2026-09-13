"use client";

import { motion } from "framer-motion";
import { fadeUp } from "king/lib/motion";

type Props = {
  index: string; // e.g. "01"
  label: string; // e.g. "about"
  title: string;
};

const SectionHeading = ({ index, label, title }: Props) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mb-8 sm:mb-10"
    >
      <p className="font-mono text-sm text-primary-strong dark:text-primary mb-2">
        {`// ${index} — ${label}`}
      </p>
      <h2 className="text-[clamp(1.75rem,5vw,2.75rem)] font-semibold tracking-tight text-foreground">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;