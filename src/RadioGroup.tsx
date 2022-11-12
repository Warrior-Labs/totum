import * as React from 'react';
import { useEffect, useRef } from 'react';
import combineCSS from './helpers/combineCSS';
import styles from './scss/RadioGroup.module.css';
import StyleProps from './types/StyleProps';

type RadioGroupProps = {
  name: string;
} & StyleProps &
  React.PropsWithChildren;

const RadioGroupContainer: React.FC<RadioGroupProps> = (
  props: RadioGroupProps
) => {
  // Reference for the Fieldset
  const fieldsetRef = useRef<HTMLFieldSetElement>(null);

  // Set the Field Names
  useEffect(() => {
    if (fieldsetRef.current) {
      const i = Array.from(
        fieldsetRef.current.querySelectorAll('input[type=radio]')
      );
      i.forEach((radio) => {
        radio.setAttribute('name', props.name);
      });
    }
  }, [fieldsetRef]);

  // Render
  return (
    <fieldset
      id={props.id}
      className={combineCSS([styles.RadioGroup, props.className])}
      style={props.style}
      ref={fieldsetRef}
    >
      {props.children}
    </fieldset>
  );
};

type RadioGroupLabelProps = {} & StyleProps & React.PropsWithChildren;

const RadioGroupLabel: React.FC<RadioGroupLabelProps> = (
  props: RadioGroupLabelProps
) => {
  // Render
  return (
    <legend
      id={props.id}
      className={combineCSS([styles.RadioGroupLegend, props.className])}
      style={props.style}
    >
      {props.children}
    </legend>
  );
};

type RadioItemProps = {
  id: string;
  value: string | number;
  disabled?: boolean;
  checked?: boolean;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.PropsWithChildren;

const RadioGroupItem: React.FC<RadioItemProps> = (props: RadioItemProps) => {
  // Render
  return (
    <span className={styles.RadioGroupItem}>
      <input
        type='radio'
        id={props.id}
        value={props.value}
        disabled={props.disabled}
        required={props.required}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label htmlFor={props.id}>{props.children}</label>
    </span>
  );
};

export const RadioGroup = Object.assign(RadioGroupContainer, {
  Label: RadioGroupLabel,
  Item: RadioGroupItem,
});
