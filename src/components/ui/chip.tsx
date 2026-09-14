import React from 'react';
import { cn } from '@/lib/utils';

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'active' | 'dark';
  selected?: boolean;
  children: React.ReactNode;
}

export const Chip = ({
  variant = 'default',
  selected = false,
  className,
  children,
  ...props
}: ChipProps) => {
  const baseStyles =
    'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all cursor-pointer select-none';

  const variants = {
    default:
      'bg-sand-50 border-charcoal-300 text-charcoal-800 hover:bg-sand-100',
    active: 'bg-golden-100 border-golden-500 text-golden-900 font-semibold',
    dark: 'bg-charcoal-900 border-charcoal-800 text-sand-100 hover:bg-charcoal-800',
  };

  return (
    <div
      className={cn(
        baseStyles,
        selected ? variants.active : variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
