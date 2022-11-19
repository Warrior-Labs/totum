import * as React from 'react';
import combineCSS from './helpers/combineCSS';
import styles from './scss/AppContainer.module.css';
import StyleProps from './types/StyleProps';
import variant from './types/Variants';

type AppContainerProps = {
  variant?: variant;
} & StyleProps &
  React.PropsWithChildren;

/**
 * AppContainer is the root component of any Totum-based application.
 *
 */
export const AppContainer: React.FC<AppContainerProps> = (
  props: AppContainerProps
) => {
  // Set the Base Classes
  let classes: (string | undefined)[] = [styles.AppContainer];
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
