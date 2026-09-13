import { HTMLAttributes } from "react";
import { cn } from "king/lib/cn";

type Props = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "article";
};

const GlassCard = ({ className, children, ...rest }: Props) => {
  return (
    <div
      className={cn(
        "glass rounded-2xl transition-transform duration-300 hover:-translate-y-1",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default GlassCard;