import * as React from 'react';
import { useRef } from 'react';
import { Button } from './Button';
import combineCSS from './helpers/combineCSS';
import useOnClickOutside from './hooks/useOnClickOutside';
import DropdownPointer from './icons/DropdownPointer';
import styles from './scss/ActionMenu.module.css';
import StyleProps from './types/StyleProps';
import variant from './types/Variants';

type ActionMenuProps = {} & StyleProps & React.PropsWithChildren;

/**
 * ActionMenu is the base component for an Action Menu.
 */
const Menu: React.FC<ActionMenuProps> = (props: ActionMenuProps) => {
  // Close the Menu when clicking outside of it
  const menuRef = useRef<HTMLSpanElement>(null);
  const hideMenuHandler = () => {
    const menu = menuRef?.current;
    if (menu?.children) {
      Array.from(menu.children).forEach((el) => {
        if (
          el.classList.contains(styles.ActionMenuList) &&
          !el.classList.contains(styles.hidden)
        ) {
          el.classList.add(styles.hidden);
        }
      });
    }
  };
  useOnClickOutside(menuRef, hideMenuHandler);

  // Render
  return (
    <span
      {...props}
      className={combineCSS([styles.ActionMenu, props.className])}
      ref={menuRef}
    >
      {props.children}
    </span>
  );
};

type ActionMenuButtonProps = {
  variant?: variant;
} & React.PropsWithChildren &
  StyleProps;

/**
 * ActionMenuButton element
 */
const MenuButton: React.FC<ActionMenuButtonProps> = (
  props: ActionMenuButtonProps
) => {
  // Toggle Menu Method
  const onToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent Default Behaviour
    e.preventDefault();

    // Get the Element
    let btn = e.target as HTMLButtonElement;

    // Get the Siblings
    let list = btn.nextElementSibling;

    if (list?.classList.contains(styles.hidden)) {
      list.classList.remove(styles.hidden);
    } else {
      list?.classList.add(styles.hidden);
    }
  };
  // Render
  return (
    <Button
      {...props}
      className={combineCSS([styles.ActionMenuButton, props.className])}
      onClick={onToggle}
      variant={props.variant}
      flat
    >
      <span>{props.children}</span>
      <DropdownPointer size='1rem' />
    </Button>
  );
};

type ActionMenuListProps = {} & StyleProps & React.PropsWithChildren;

/**
 * Action Menu List - contains items for the action menu.
 */
const MenuList: React.FC<ActionMenuListProps> = (
  props: ActionMenuListProps
) => {
  // Render
  return (
    <ul
      {...props}
      className={combineCSS([
        styles.ActionMenuList,
        styles.hidden,
        props.className,
      ])}
    >
      {props.children}
    </ul>
  );
};

type ActionMenuItemProps = {
  variant?: variant;
  type: 'button' | 'anchor';
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & StyleProps &
  React.PropsWithChildren;

/**
 * Action Menu Item - single element in the action menu.
 */
const MenuItem: React.FC<ActionMenuItemProps> = (
  props: ActionMenuItemProps
) => {
  // Render
  return (
    <li
      id={props.id}
      style={props.style}
      className={combineCSS([styles.ActionMenuItem, props.className])}
    >
      {props.type === 'anchor' && (
        <a
          className={props.variant ? styles[props.variant.toString()] : ''}
          href={props.href}
        >
          {props.children}
        </a>
      )}
      {props.type === 'button' && (
        <button onClick={props.onClick} className={props.variant}>
          {props.children}
        </button>
      )}
    </li>
  );
};

const MenuItemSeparator: React.FC = () => {
  // Render
  return (
    <li className={combineCSS([styles.ActionMenuItem, styles.separator])}>
      <span />
    </li>
  );
};

export const ActionMenu = Object.assign(Menu, {
  Button: MenuButton,
  List: MenuList,
  Item: MenuItem,
  Separator: MenuItemSeparator,
});
