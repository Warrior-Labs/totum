import * as React from 'react';
import combineCSS from './helpers/combineCSS';
import styles from './scss/VerticalStack.module.css';
import StyleProps from './types/styleProps';

type VerticalStackProps = {
  spacing?: string;
} & StyleProps &
  React.PropsWithChildren;

export const VerticalStack: React.FC<VerticalStackProps> = (
  props: VerticalStackProps
) => {
  // Render
  return (
    <div
      id={props.id}
      className={combineCSS([styles.VerticalStack, props.className])}
      style={{ rowGap: props.spacing, ...props.style }}
    >
      {props.children}
    </div>
  );
};

type StackItemProps = {} & StyleProps & React.PropsWithChildren;

export const StackItem: React.FC<StackItemProps> = (props: StackItemProps) => {
  // Render
  return (
    <div
      id={props.id}
      className={combineCSS([styles.StackItem, props.className])}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
