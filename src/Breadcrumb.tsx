import * as React from 'react';
import combineCSS from './helpers/combineCSS';
import styles from './scss/Breadcrumb.module.css';
import StyleProps from './types/StyleProps';
import variant from './types/Variants';

type BreadcrumbProps = {} & StyleProps & React.PropsWithChildren;

const BreadcrumbContainer: React.FC<BreadcrumbProps> = (
  props: BreadcrumbProps
) => {
  // Render
  return (
    <ul
      id={props.id}
      className={combineCSS([styles.Breadcrumb, props.className])}
      style={props.style}
    >
      {props.children}
    </ul>
  );
};

type BreadcrumbItemProps = {
  href?: string;
  variant?: variant;
  ariaLabel?: string;
} & StyleProps &
  React.PropsWithChildren;

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (
  props: BreadcrumbItemProps
) => {
  // Render
  return (
    <li
      id={props.id}
      className={combineCSS([styles.BreadcrumbItem, props.className])}
      style={props.style}
    >
      <a
        href={props.href}
        className={props.variant ? styles[props.variant.toString()] : ''}
        title={props.ariaLabel}
        aria-label={props.ariaLabel}
      >
        {props.children}
      </a>
    </li>
  );
};

export const Breadcrumb = Object.assign(BreadcrumbContainer, {
  Item: BreadcrumbItem,
});
