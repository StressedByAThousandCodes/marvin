"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { cn } from "king/lib/cn";
import {
  HOBBIES,
  MOST_USED_SKILLS,
} from "king/constants/text";

type SkillItem = {
  title: string;
  icon: string;
};

type Category = {
  id: string;
  eyebrow: string;
  title: string;
  color: string;
  items: SkillItem[];
};

const CATEGORIES: Category[] = [
  {
    id: "professional",
    eyebrow: "// stack",
    title: "Professional skills",
    color: "var(--primary-strong)",
    items: MOST_USED_SKILLS,
  },
  {
    id: "hobbies",
    eyebrow: "// off the clock",
    title: "Hobbies",
    color: "var(--primary)",
    items: HOBBIES,
  },
];

// Deterministic "bento" pattern so each category grid reads as a dense,
// uneven collage instead of a uniform table. Small categories (too few
// items to make big tiles look intentional) stay uniform instead.
const MIN_ITEMS_FOR_FEATURE_TILES = 7;

const getTileClasses = (index: number, total: number) => {
  if (total < MIN_ITEMS_FOR_FEATURE_TILES) return "";

  const classes: string[] = [];
  if (index % 5 === 0) classes.push("sm:col-span-2");
  if (index % 7 === 3) classes.push("sm:row-span-2");
  return classes.join(" ");
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden px-4 py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-primary-strong dark:text-primary"
        >
          {"// 02 — skills"}
        </motion.p> */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-2 text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-primary"
        >
          What I bring to the table
        </motion.h2>

        <div className="mt-16 flex flex-col gap-20 sm:mt-20 sm:gap-24">
          {CATEGORIES.map((category) => (
            <div key={category.id}>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="font-mono text-sm"
                style={{ color: category.color }}
              >
                {category.eyebrow}
              </motion.p>
              {/* <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.05 }}
                className="mt-1 text-2xl font-semibold text-foreground sm:text-3xl"
              >
                {category.title}
              </motion.h3> */}

              <div
                className="mt-6 grid auto-rows-[100px] gap-3 grid-flow-row-dense sm:auto-rows-[120px] sm:gap-4"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                }}
              >
                {category.items.map((item, index) => {
                  const tileClasses = getTileClasses(
                    index,
                    category.items.length,
                  );
                  const isBig = tileClasses.includes("row-span-2");
                  return (
                    <motion.div
                      key={`${item.title}-${index}`}
                      initial={{
                        opacity: 0,
                        scale: 0.85,
                        rotate: index % 2 === 0 ? -4 : 4,
                      }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        delay: (index % 12) * 0.04,
                        type: "spring",
                        stiffness: 220,
                        damping: 20,
                      }}
                      whileHover={{
                        scale: 1.05,
                        rotate: index % 2 === 0 ? -1.5 : 1.5,
                        y: -4,
                      }}
                      className={cn(
                        "glass flex flex-col items-center justify-center gap-2 rounded-2xl p-3 text-center transition-shadow hover:shadow-lg",
                        tileClasses,
                      )}
                      style={{ borderColor: `${category.color}40` }}
                    >
                      <Icon
                        icon={item.icon}
                        width={isBig ? 40 : 24}
                        height={isBig ? 40 : 24}
                      />
                      <span
                        className={cn(
                          "font-medium leading-tight",
                          isBig ? "text-base sm:text-lg" : "text-xs sm:text-sm",
                        )}
                        style={{ color: category.color }}
                      >
                        {item.title}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
