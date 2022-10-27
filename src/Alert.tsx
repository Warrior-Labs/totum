import * as React from 'react';
import combineCSS from './helpers/combineCSS';
import DangerIcon from './icons/DangerIcon';
import InfoIcon from './icons/InfoIcon';
import TickIcon from './icons/TickIcon';
import styles from './scss/Alert.module.css';
import StyleProps from './types/StyleProps';
import variant from './types/Variants';

type AlertProps = {
  variant: variant;
} & StyleProps &
  React.PropsWithChildren;

export const Alert: React.FC<AlertProps> = (props: AlertProps) => {
  // let baseCSS =
  //   'full-width box-sizing padding-lg-t padding-lg-b padding-l padding-r border-rad-all alert ' +
  //   props.variant;
  // Set the Base Classes
  let classes: (string | undefined)[] = [styles.Alert];
  if (props.variant) {
    classes.push(styles[props.variant]);
  }
  if (props.className) {
    classes.push(props.className);
  }

  let icon = <InfoIcon size='1.4rem' />;
  switch (props.variant) {
    case 'success':
      icon = <TickIcon size='1.4rem' />;
      break;
    case 'warning':
      icon = <InfoIcon size='1.4rem' />;
      break;
    case 'danger':
      icon = <DangerIcon size='1.4rem' />;
      break;
    default:
      icon = <InfoIcon size='1.4rem' />;
      break;
  }
  // Render
  return (
    <div id={props.id} className={combineCSS(classes)} style={props.style}>
      {icon}
      {props.children}
    </div>
  );
};
