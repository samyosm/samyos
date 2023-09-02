import cn from 'clsx';
import { IconBaseProps } from 'react-icons';
export interface TextProps {
  size?: 'lg' | 'md' | 'sm' | 'xs';
  level?: 'page' | 'organism' | 'atom';
  children: React.ReactNode;
  className?: string;
  LeadingIcon?: React.ComponentType<IconBaseProps>;
  TrailingIcon?: React.ComponentType<IconBaseProps>;
}

export const Text = ({
  children,
  className,
  size = 'md',
  level = 'atom',
  LeadingIcon,
  TrailingIcon,
}: TextProps) => {
  const currentConfig = config[level];

  const Tag = currentConfig.tag as 'h1' | 'h2' | 'p';

  return (
    <Tag
      className={cn(
        'flex items-center',
        className,
        currentConfig.base,
        currentConfig[size]
      )}
    >
      {LeadingIcon && <LeadingIcon className="opacity-80 dark:opacity-90" />}
      {children}
      {TrailingIcon && <TrailingIcon className="opacity-80 dark:opacity-90" />}
    </Tag>
  );
};

const config = {
  page: {
    tag: 'h1',
    base: 'font-bold gap-2',
    lg: 'text-4xl',
    md: 'text-2xl',
    sm: 'text-xl',
    xs: 'text-lg',
  },
  organism: {
    tag: 'h2',
    base: 'font-medium gap-1',
    lg: 'text-xl',
    md: 'text-lg',
    sm: 'text-md',
    xs: 'text-sm',
  },
  atom: {
    tag: 'p',
    base: 'gap-1',
    lg: 'text-lg',
    md: 'text-md',
    sm: 'text-sm',
    xs: 'text-xs',
  },
};
