"use client";

import { motion } from "motion/react";
import { fadeUp, staggerParent } from "@/lib/motion";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";

/**
 * Reveals children with a fade-up when scrolled into view.
 * Driven by a custom IntersectionObserver (see useReveal) rather than Motion's
 * whileInView, so it stays reliable under React StrictMode / dev double-mounts
 * and always falls back to visible.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUp}
      initial="hidden"
      animate={shown ? "show" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Parent that staggers its <RevealItem> children once the group is in view.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={staggerParent(stagger, delay)}
      initial="hidden"
      animate={shown ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

/** Child of RevealGroup — inherits the parent's stagger timing. */
export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
