import * as React from 'react';
import combineCSS from './helpers/combineCSS';
import styles from './scss/Container.module.css';
import StyleProps from './types/StyleProps';

type ContainerProps = {
  display?: 'flex';
} & StyleProps &
  React.PropsWithChildren;

export const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  // Set the Base Classes
  let classes: (string | undefined)[] = [styles.Container];
  if (props.display) {
    switch (props.display) {
      case 'flex':
        classes.push(styles['flex']);
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
