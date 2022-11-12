import * as React from 'react';
import combineCSS from './helpers/combineCSS';
import styles from './scss/NavigationList.module.css';
import StyleProps from './types/StyleProps';
import variant from './types/Variants';

type NavigationListProps = {
  variant?: variant;
} & StyleProps &
  React.PropsWithChildren;

const NavigationListContainer: React.FC<NavigationListProps> = (
  props: NavigationListProps
) => {
  // Set the Base Classes
  let classes: (string | undefined)[] = [styles.NavigationList];
  if (props.variant) {
    classes.push(styles[props.variant]);
  }
  classes.push(props.className);

  // Render
  return (
    <nav id={props.id} className={combineCSS(classes)} style={props.style}>
      <ul>{props.children}</ul>
    </nav>
  );
};

type NavigationListItemProps = {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
} & StyleProps &
  React.PropsWithChildren;

const NavigationListItem: React.FC<NavigationListItemProps> = (
  props: NavigationListItemProps
) => {
  // Render
  return (
    <li
      id={props.id}
      className={combineCSS([styles.NavigationListItem, props.className])}
      style={props.style}
    >
      {props.href && (
        <a
          className={styles.NavigationItem}
          href={props.href}
          onClick={props.onClick}
        >
          {props.children}
        </a>
      )}
      {!props.href && (
        <span className={styles.NavigationItem}>{props.children}</span>
      )}
    </li>
  );
};

export const NavigationList = Object.assign(NavigationListContainer, {
  Item: NavigationListItem,
});
