import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'golden' | 'saffron' | 'charcoal' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,
      variant = 'golden',
      size = 'md',
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyle =
      'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-golden-400 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
    const variants = {
      golden:
        'bg-golden-500 text-charcoal-900 hover:bg-golden-600 active:bg-golden-700',
      saffron:
        'bg-saffron-700 text-sand-50 hover:bg-saffron-800 active:bg-saffron-900',
      charcoal:
        'bg-charcoal-800 text-sand-50 hover:bg-charcoal-700 active:bg-charcoal-900',
      outline:
        'border border-charcoal-400 text-charcoal-800 bg-transparent hover:bg-sand-700',
      text: 'text-charcoal-800 hover:underline bg-transparent px-0 py-0',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5',
      md: 'text-sm px-4 py-2',
      lg: 'text-base px-6 py-3',
    };

    const buttonClassName = cn(
      baseStyle,
      sizes[size],
      variants[variant],
      className,
    );

    if (asChild && React.isValidElement<{ className?: string }>(children)) {
      return React.cloneElement(children, {
        className: cn(buttonClassName, children.props.className),
      });
    }

    return (
      <button ref={ref} className={buttonClassName} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
