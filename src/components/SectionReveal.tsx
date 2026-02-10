'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function SectionReveal({ children, className }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}
