import * as React from 'react';
import combineCSS from './helpers/combineCSS';
import styles from './scss/Button.module.css';
import StyleProps from './types/StyleProps';
import variant from './types/Variants';

type ButtonProps = {
  variant?: variant;
  flat?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel?: string;
} & StyleProps &
  React.PropsWithChildren;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  // Set the Base Classes
  let classes: (string | undefined)[] = [styles.Button];
  if (props.variant) {
    classes.push(styles[props.variant]);
  }
  if (props.flat === true) {
    classes.push(styles.flat);
  }
  classes.push(props.className);

  // Render
  return (
    <button
      id={props.id}
      className={combineCSS(classes)}
      style={props.style}
      onClick={props.onClick}
      title={props.ariaLabel}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </button>
  );
};
