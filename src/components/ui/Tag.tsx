"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "king/lib/cn";
import { fadeUpItem } from "king/lib/motion";

type Props = {
  label: string;
  icon?: ReactNode;
  className?: string;
};

const Tag = ({ label, icon, className }: Props) => {
  return (
    <motion.span
      variants={fadeUpItem}
      whileHover={{ scale: 1.06, y: -2 }}
      className={cn(
        "glass inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5",
        "text-sm text- shadow-sm cursor-default select-none",
        "hover:border-primary/50 dark:hover:border-primary/50",
        className
      )}
    >
      {icon && <span className="text-base leading-none">{icon}</span>}
      {label}
    </motion.span>
  );
};

export default Tag;