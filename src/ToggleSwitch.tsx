import React from 'react';
import combineCSS from './helpers/combineCSS';
import formStyles from './scss/Forms.module.css';
import styles from './scss/ToggleSwitch.module.css';
import StyleProps from './types/StyleProps';
import variant from './types/Variants';

type ToggleSwitchProps = {
  label: string;
  variant?: variant;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & StyleProps;

export const ToggleSwitch: React.FC<ToggleSwitchProps> = (
  props: ToggleSwitchProps
) => {
  // Set the Base Classes
  let classes: (string | undefined)[] = [];
  if (props.variant) {
    classes.push(styles[props.variant]);
  }

  // Render
  return (
    <div
      id={props.id}
      className={combineCSS([
        styles.FormControl,
        formStyles.FormControl,
        props.className,
      ])}
      style={props.style}
    >
      <label>
        <span className={styles.ToggleSwitch}>
          <input
            type='checkbox'
            className={combineCSS(classes)}
            checked={props.checked}
            onChange={props.onChange}
          />
          <span className={styles.Slider} />
        </span>
        <span className={styles.Label}>{props.label}</span>
      </label>
    </div>
  );
};
