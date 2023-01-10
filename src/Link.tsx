import * as React from 'react';
import StyleProps from './types/StyleProps';

type LinkProps = {
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  ariaLabel?: string;
} & StyleProps &
  React.PropsWithChildren;

export const Link: React.FC<LinkProps> = (props: LinkProps) => {
  // Render
  return (
    <a
      id={props.id}
      className={props.className}
      style={props.style}
      href={props.href}
      onClick={props.onClick}
      title={props.ariaLabel}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </a>
  );
};
