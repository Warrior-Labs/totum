import * as React from 'react';
import combineCSS from './helpers/combineCSS';
import styles from './scss/Pill.module.css';
import StyleProps from './types/StyleProps';
import variant from './types/Variants';

type PillProps = {
  variant?: variant;
} & StyleProps &
  React.PropsWithChildren;

/**
 * Pill element
 */
export const Pill: React.FC<PillProps> = (props: PillProps) => {
  // Set the Base Classes
  let classes: (string | undefined)[] = [styles.Pill];
  if (props.variant) {
    classes.push(styles[props.variant]);
  }
  classes.push(props.className);

  // Render
  return (
    <span id={props.id} style={props.style} className={combineCSS(classes)}>
      {props.children}
    </span>
  );
};
