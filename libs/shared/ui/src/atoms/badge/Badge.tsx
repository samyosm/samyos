import cn from 'clsx';
import React from 'react';
export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'danger';
}

export const Badge = ({ children, variant = 'info', ...props }: BadgeProps) => {
  return (
    <span
      {...props}
      className={cn(
        'inline-block w-fit px-3 py-1 rounded-full ring-1 ring-inset',
        variantColors[variant]
      )}
    >
      {children}
    </span>
  );
};

export const variantColors = {
  info: 'bg-primary-50 text-primary-900 ring-primary-500',
  success: 'bg-success-50 text-success-900 ring-success-500',
  danger: 'bg-danger-50 text-danger-900 ring-danger-500',
};
