import * as React from 'react';
import combineCSS from './helpers/combineCSS';
import styles from './scss/ToolBar.module.css';
import StyleProps from './types/StyleProps';

type ToolBarProps = {} & StyleProps & React.PropsWithChildren;

/**
 * ToolBar Container
 *
 */
const ToolBarContainer: React.FC<ToolBarProps> = (props: ToolBarProps) => {
  // Render
  return (
    <div
      id={props.id}
      className={combineCSS([styles.ToolBar, props.className])}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

type ToolBarGroupGroups = {} & StyleProps & React.PropsWithChildren;

/**
 * ToolBar Group
 *
 * Groups a collection of toolbar elements together.
 *
 */
const ToolBarGroup: React.FC<ToolBarGroupGroups> = (
  props: ToolBarGroupGroups
) => {
  // Render
  return (
    <span
      id={props.id}
      className={combineCSS([styles.ToolBarGroup, props.className])}
      style={props.style}
    >
      {props.children}
    </span>
  );
};

type ToolBarButtonProps = {
  ariaLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & StyleProps &
  React.PropsWithChildren;

const ToolBarButton: React.FC<ToolBarButtonProps> = (
  props: ToolBarButtonProps
) => {
  // Render
  return (
    <button
      id={props.id}
      className={combineCSS([styles.ToolBarButton, props.className])}
      style={props.style}
      onClick={props.onClick}
      title={props.ariaLabel}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </button>
  );
};

export const ToolBar = Object.assign(ToolBarContainer, {
  Group: ToolBarGroup,
  Button: ToolBarButton,
});
