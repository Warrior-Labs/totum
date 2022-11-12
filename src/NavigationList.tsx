import * as React from 'react';
import { isValidElement } from 'react';
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
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
} & StyleProps &
  React.PropsWithChildren;

const NavigationListItem: React.FC<NavigationListItemProps> = (
  props: NavigationListItemProps
) => {
  // Get NavigationSubList from children
  const subList = React.Children.toArray(props.children).find(
    (child) => isValidElement(child) && child.type === NavigationSubList
  );

  // Get children without NavigationSubList
  const childrenWithoutSubNav = React.Children.toArray(props.children).filter(
    (child) => (isValidElement(child) ? child.type !== NavigationSubList : true)
  );

  // Render ItemWithSubNav if SubNav is present
  if (subList && isValidElement(subList)) {
    return (
      <li
        id={props.id}
        className={combineCSS([props.className])}
        style={props.style}
      >
        <button className={styles.NavigationItem} onClick={props.onClick}>
          {childrenWithoutSubNav}
        </button>
        {subList}
      </li>
    );
  }

  // Render
  return (
    <li
      id={props.id}
      className={combineCSS([props.className])}
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
        <button className={styles.NavigationItem} onClick={props.onClick}>
          {props.children}
        </button>
      )}
    </li>
  );
};

type NavigationSubListProps = {
  hidden?: boolean;
} & StyleProps &
  React.PropsWithChildren;

const NavigationSubList: React.FC<NavigationSubListProps> = (
  props: NavigationSubListProps
) => {
  // Set the Base Classes
  let classes: (string | undefined)[] = [styles.NavigationSubList];
  if (props.hidden) {
    classes.push(styles.hidden);
  }
  classes.push(props.className);

  // Render
  return (
    <ul id={props.id} className={combineCSS(classes)} style={props.style}>
      {props.children}
    </ul>
  );
};

export const NavigationList = Object.assign(NavigationListContainer, {
  Item: NavigationListItem,
  Sub: NavigationSubList,
});
