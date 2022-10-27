import * as React from 'react';
import combineCSS from './helpers/combineCSS';
import styles from './scss/AppBar.module.css';
import StyleProps from './types/StyleProps';
import variant from './types/Variants';

type AppBarProps = {
  variant?: variant;
} & StyleProps &
  React.PropsWithChildren;

/**
 * AppBar element.
 */
export const AppBar: React.FC<AppBarProps> = (props: AppBarProps) => {
  // Set the Base Classes
  let classes: (string | undefined)[] = [styles.AppBar];
  if (props.variant) {
    classes.push(styles[props.variant]);
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
