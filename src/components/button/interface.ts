import type { ClickHandler } from '@/components-headless';

import type { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  className?: React.HTMLAttributes<HTMLButtonElement>['className'];
  onClick?: ClickHandler;
}

export type { ButtonProps };
