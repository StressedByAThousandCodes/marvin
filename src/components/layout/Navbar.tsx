"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS } from "king/constants/nav";
import { useScrollSpy } from "king/hooks/useScrollSpy";
import { cn } from "king/lib/cn";
import { staggerContainer, fadeUpItem } from "king/lib/motion";

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(["hero", ...NAV_LINKS.map((l) => l.id)]);

  const handleNavClick = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[92%] sm:w-auto">
        <nav className="glass flex items-center justify-between gap-6 rounded-full px-4 py-2.5 sm:px-6">
          <button
            onClick={() => scrollToId("hero")}
            className="font-mono text-sm font-medium text-foreground"
          >
            marvin<span className="text-primary-strong dark:text-primary">.dev</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    "relative px-3 py-1.5 text-sm rounded-full transition-colors",
                    activeId === link.id
                      ? "text-foreground"
                      : "text-foreground-muted hover:text-foreground"
                  )}
                >
                  {activeId === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-primary/15"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
            >
              <Icon icon={open ? "ph:x-bold" : "ph:list-bold"} width={18} height={18} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 glass md:hidden"
          >
            <motion.ul
              variants={staggerContainer(0.08)}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center gap-6"
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link.id} variants={fadeUpItem}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={cn(
                      "text-3xl font-semibold tracking-tight",
                      activeId === link.id ? "text-primary-strong dark:text-primary" : "text-foreground"
                    )}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
            <ThemeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;