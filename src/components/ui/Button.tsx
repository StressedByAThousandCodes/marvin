"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "king/lib/cn";

type Props = {
  title: string;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "glass";
  className?: string;
  download?: boolean | string;
};

const Button = ({
  title,
  icon,
  href,
  onClick,
  variant = "primary",
  className,
  download,
}: Props) => {
  const content = (
    <motion.span
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium",
        "transition-colors duration-300",
        variant === "primary"
          ? "bg-primary-strong text-white shadow-md hover:bg-primary"
          : "glass text-foreground hover:border-primary/50",
        className
      )}
    >
      {title}
      {icon}
    </motion.span>
  );

  // Downloadable assets use a native anchor (Next's <Link> doesn't support
  // the `download` attribute the way a plain <a> does).
  if (href && download) {
    return (
      <a href={href} download={download} className="inline-block">
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} onClick={onClick} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type="button" className="inline-block">
      {content}
    </button>
  );
};

export default Button;