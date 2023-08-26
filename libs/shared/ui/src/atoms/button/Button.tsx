import cn from 'clsx';
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'md' | 'sm';
  variant?: 'plain' | 'solid' | 'outlined' | 'soft';
  className?: string;
  /** Preferablly, this should be a `<Text>` component.*/
  children?: React.ReactNode;
}

export const Button = ({
  children,
  size = 'md',
  variant = 'solid',
  className,
  ...props
}: ButtonProps) => {
  const variantConfig = {
    plain: 'text-primary-500 hover:bg-primary-50 active:bg-primary-100',
    solid:
      'text-neutral-100 bg-primary-500 hover:bg-primary-600 active:bg-primary-700',
    outlined:
      'ring-1 ring-primary-500 ring-inset text-primary-500 hover:bg-primary-50 active:bg-primary-100',
    soft: 'text-primary-800 bg-primary-200 hover:bg-primary-300 active:text-primary-900 active:bg-primary-400',
  };

  const sizeConfig = {
    md: 'px-4 py-2 rounded-lg',
    sm: 'px-2 py-1 rounded-md text-sm',
  };

  return (
    <button
      className={cn(
        'font-medium',
        className,
        sizeConfig[size],
        variantConfig[variant]
      )}
      {...props}
    >
      {children}
    </button>
  );
};
