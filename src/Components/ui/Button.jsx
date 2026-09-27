import React from 'react';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-[#08140d] hover:bg-primary-400 focus:ring-primary-500',
        secondary: 'bg-[#2a2a2a] text-gray-100 border border-[#3a3a3a] hover:bg-[#323232] focus:ring-primary-500',
        outline: 'border border-primary-500 text-primary-500 bg-transparent hover:bg-primary-500/15 focus:ring-primary-500',
        ghost: 'text-gray-300 hover:bg-white/10 hover:text-white focus:ring-primary-500'
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

export const Button = React.forwardRef(({ children, className, variant, size, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
