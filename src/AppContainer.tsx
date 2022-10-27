import * as React from 'react';
import combineCSS from './helpers/combineCSS';
import styles from './scss/AppContainer.module.css';
import StyleProps from './types/StyleProps';

type AppContainerProps = {} & StyleProps & React.PropsWithChildren;

/**
 * AppContainer is the root component of any Totum-based application.
 *
 */
export const AppContainer: React.FC<AppContainerProps> = (
  props: AppContainerProps
) => {
  // Render
  return (
    <div
      id={props.id}
      className={combineCSS([styles.AppContainer, props.className])}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
