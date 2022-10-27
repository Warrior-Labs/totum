import * as React from 'react';
import combineCSS from './helpers/combineCSS';
import styles from './scss/Grid.module.css';
import StyleProps from './types/styleProps';

type GridProps = {} & StyleProps & React.PropsWithChildren;

/**
 * Grid Container
 */
export const Grid: React.FC<GridProps> = (props: GridProps) => {
  return (
    <div
      id={props.id}
      className={combineCSS([styles.Grid, props.className])}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

type GridItemProps = {
  colSpan: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  rowSpan?: number;
  verticalAlign?: 'top' | 'middle' | 'bottom' | 'fill';
} & StyleProps &
  React.PropsWithChildren;

/**
 * Grid Item for use within Grid element.
 */
export const GridItem: React.FC<GridItemProps> = (props: GridItemProps) => {
  let classes: (string | undefined)[] = [
    styles.GridItem,
    styles['Colspan' + props.colSpan.toString()],
  ];
  if (props.verticalAlign) {
    classes.push[styles['VAlign' + props.verticalAlign]];
  }
  if (props.className) {
    classes.push(props.className);
  }
  let rowSpanStyle: React.CSSProperties = {};
  if (props.rowSpan) {
    rowSpanStyle = { gridRow: 'span ' + props.rowSpan, ...props.style };
  } else {
    rowSpanStyle = { ...props.style };
  }
  return (
    <div id={props.id} style={rowSpanStyle} className={combineCSS(classes)}>
      {props.children}
    </div>
  );
};
