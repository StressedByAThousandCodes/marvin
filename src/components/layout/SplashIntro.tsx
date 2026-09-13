"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

type Greeting = {
  word: string;
  colorVar: string;
};

// Kept to Latin-script greetings on purpose: they all render in the same
// cursive typeface below. Non-Latin scripts (Cyrillic/CJK/etc.) don't have
// glyphs in this font and would silently fall back to a different typeface,
// breaking the "one consistent font" look.
const GREETINGS: Greeting[] = [
  { word: "Hello", colorVar: "var(--foreground)" },
  { word: "Bonjour", colorVar: "var(--primary-strong)" },
  { word: "Hola", colorVar: "var(--accent-blue)" },
  { word: "Ciao", colorVar: "var(--primary)" },
  { word: "Hallo", colorVar: "var(--foreground)" },
  { word: "Olá", colorVar: "var(--primary-strong)" },
  { word: "Salve", colorVar: "var(--accent-blue)" },
  { word: "Kia ora", colorVar: "var(--primary)" },
  { word: "Hello", colorVar: "var(--foreground)" },
];

const WORD_HOLD_MS = 2200;
const FINAL_HOLD_MS = 2000;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20, rotate: -8 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -14,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const SplashIntro = () => {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    let timer: ReturnType<typeof setTimeout>;
    let i = 0;

    const advance = () => {
      i += 1;
      if (i >= GREETINGS.length) {
        timer = setTimeout(() => setVisible(false), FINAL_HOLD_MS);
        return;
      }
      setIndex(i);
      timer = setTimeout(advance, WORD_HOLD_MS);
    };

    timer = setTimeout(advance, WORD_HOLD_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    }
  }, [visible]);

  const current = GREETINGS[index];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          onClick={() => setVisible(false)}
          role="button"
          aria-label="Skip intro"
          className="fixed inset-0 z-[60] flex cursor-pointer flex-col items-center justify-center gap-6 bg-bg/95 backdrop-blur-2xl"
        >
          <div className="relative flex h-56 w-full items-center justify-center px-4 sm:h-72">
            <AnimatePresence mode="sync">
              <motion.div
                key={`${current.word}-${index}`}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="absolute flex flex-wrap items-center justify-center"
                style={{
                  color: current.colorVar,
                  fontFamily: "'Dancing Script', cursive",
                  fontWeight: 700,
                  fontSize: "clamp(4rem, 22vw, 12rem)",
                  lineHeight: 1,
                }}
              >
                {Array.from(current.word).map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={letterVariants}
                    style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-muted"
          >
            tap to skip
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashIntro;
