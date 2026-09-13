"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { cn } from "king/lib/cn";

type Props = {
  images: string[];
};

const AUTO_ADVANCE_MS = 3200;

// Visual position of each card in the stack, front to back. Only the top
// 3 are rendered fanned out; anything deeper stays hidden right behind
// the 3rd card until it's shuffled forward.
const STACK_STYLES = [
  { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, zIndex: 3 },
  { x: 18, y: 16, rotate: 7, scale: 0.94, opacity: 1, zIndex: 2 },
  { x: 34, y: 28, rotate: -6, scale: 0.88, opacity: 0.9, zIndex: 1 },
];
const HIDDEN_STYLE = {
  x: 34,
  y: 28,
  rotate: -6,
  scale: 0.84,
  opacity: 0,
  zIndex: 0,
};

const getStackStyle = (pos: number) => STACK_STYLES[pos] ?? HIDDEN_STYLE;

const ImageCarousel = ({ images }: Props) => {
  const [order, setOrder] = useState(() => images.map((_, i) => i));
  const hovering = useRef(false);

  const shuffleNext = useCallback(() => {
    setOrder((prev) =>
      prev.length <= 1 ? prev : [...prev.slice(1), prev[0]]
    );
  }, []);

  const shufflePrev = useCallback(() => {
    setOrder((prev) =>
      prev.length <= 1 ? prev : [prev[prev.length - 1], ...prev.slice(0, -1)]
    );
  }, []);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      if (!hovering.current) shuffleNext();
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(interval);
  }, [images.length, shuffleNext]);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[360px]"
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      {order.map((imageIndex, pos) => {
        const image = images[imageIndex];
        const style = getStackStyle(pos);
        const isSvg = image.endsWith(".svg");
        const isFront = pos === 0;

        return (
          <motion.button
            key={`${image}-${imageIndex}`}
            type="button"
            aria-label={isFront ? "Shuffle to next photo" : undefined}
            tabIndex={isFront ? 0 : -1}
            onClick={isFront ? shuffleNext : undefined}
            animate={{
              x: style.x,
              y: style.y,
              rotate: style.rotate,
              scale: style.scale,
              opacity: style.opacity,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            style={{ zIndex: style.zIndex }}
            className={cn(
              "glass absolute inset-0 overflow-hidden rounded-2xl",
              isFront ? "cursor-pointer" : "pointer-events-none"
            )}
          >
            <div
              className={cn(
                "relative h-full w-full",
                isSvg && "bg-gradient-to-br from-primary-strong to-accent-blue"
              )}
            >
              <Image
                alt={`Photo ${imageIndex + 1}`}
                src={image}
                fill
                unoptimized={image.endsWith(".gif")}
                className={isSvg ? "object-contain p-14" : "object-cover"}
              />
            </div>
          </motion.button>
        );
      })}

      {images.length > 1 && (
        <>
          <button
            onClick={shufflePrev}
            aria-label="Previous photo"
            className="glass absolute -left-4 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-foreground md:flex"
          >
            <Icon icon="ph:caret-left-bold" width={16} height={16} />
          </button>
          <button
            onClick={shuffleNext}
            aria-label="Next photo"
            className="glass absolute -right-4 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-foreground md:flex"
          >
            <Icon icon="ph:caret-right-bold" width={16} height={16} />
          </button>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;