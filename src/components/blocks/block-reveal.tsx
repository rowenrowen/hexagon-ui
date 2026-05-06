"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.25, 0.1, 0.25, 1] as const;
const baseT = { duration: 0.42, ease };

export function BlockReveal({
  children,
  className,
  delay = 0,
  y = 14,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px 0px -28px 0px" }}
      transition={{ ...baseT, delay }}
    >
      {children}
    </motion.div>
  );
}

export type BlockRevealLiProps = HTMLMotionProps<"li"> & { delay?: number; hoverLift?: boolean };

export function BlockRevealLi({ children, className, delay = 0, hoverLift = false, ...rest }: BlockRevealLiProps) {
  const reduce = useReducedMotion();
  return (
    <motion.li
      className={className}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      whileHover={reduce || !hoverLift ? undefined : { y: -3, transition: { duration: 0.22, ease } }}
      viewport={{ once: true, margin: "-32px" }}
      transition={{ ...baseT, delay }}
      {...rest}
    >
      {children}
    </motion.li>
  );
}

export function BlockRevealSpan({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={className}
      initial={reduce ? false : { opacity: 0, y: 8 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ ...baseT, delay }}
    >
      {children}
    </motion.span>
  );
}

export type BlockRevealTrProps = HTMLMotionProps<"tr"> & { delay?: number };

export function BlockRevealTr({ children, className, delay = 0, ...rest }: BlockRevealTrProps) {
  const reduce = useReducedMotion();
  return (
    <motion.tr
      className={className}
      initial={reduce ? false : { opacity: 0, x: -8 }}
      whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ ...baseT, delay }}
      {...rest}
    >
      {children}
    </motion.tr>
  );
}
