import * as React from 'react';
import combineCSS from './helpers/combineCSS';
import CloseIcon from './icons/CloseIcon';
import HamburgerIcon from './icons/HamburgerIcon';
import styles from './scss/AppDrawer.module.css';
import StyleProps from './types/StyleProps';
import variant from './types/Variants';

export type AppDrawerState = 'open' | 'icons' | 'hidden';

type AppDrawerProps = {
  variant?: variant;
  display?: AppDrawerState;
} & StyleProps &
  React.PropsWithChildren;

export const AppDrawer: React.FC<AppDrawerProps> = (props: AppDrawerProps) => {
  // Set the Base Classes
  let classes: (string | undefined)[] = [styles.AppDrawer];
  if (props.variant) {
    classes.push(styles[props.variant]);
  }
  if (props.display) {
    switch (props.display) {
      case 'hidden':
        classes.push(styles.hidden);
        break;
      case 'icons':
        classes.push(styles.icons);
        break;
    }
  }
  if (props.className) {
    classes.push(props.className);
  }

  // Render
  return (
    <div id={props.id} className={combineCSS(classes)} style={props.style}>
      {props.children}
    </div>
  );
};

type HamburgerButtonProps = {
  display?: AppDrawerState;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & StyleProps;

export const HamburgerButton: React.FC<HamburgerButtonProps> = (
  props: HamburgerButtonProps
) => {
  // Set the Base Classes
  let classes: (string | undefined)[] = [styles.HamburgerButtonContainer];
  let icon = <HamburgerIcon size='1.4rem' />;
  if (props.display) {
    switch (props.display) {
      case 'hidden':
        classes.push(styles.hidden);
        icon = <HamburgerIcon size='1.4rem' />;
        break;
      case 'icons':
        classes.push(styles.icons);
        icon = <HamburgerIcon size='1.4rem' />;
        break;
      case 'open':
        icon = <CloseIcon size='1.4rem' />;
    }
  }

  // Render
  return (
    <span className={combineCSS(classes)}>
      <button
        id={props.id}
        className={combineCSS([styles.HamburgerButton, props.className])}
        style={props.style}
        onClick={props.onClick}
      >
        {icon}
      </button>
    </span>
  );
};
