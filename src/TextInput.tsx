import * as React from 'react';
import combineCSS from './helpers/combineCSS';
import formStyles from './scss/Forms.module.css';
import styles from './scss/TextInput.module.css';
import variant from './types/Variants';

type TextInputProps = {
  id: string;
  variant?: variant;
  type: 'text' | 'password' | 'email' | 'number';
  label: string;
  autoComplete?: boolean;
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * TextInput is a single-line text input field.
 */
export const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
  // Set the Base Classes
  let classes: (string | undefined)[] = [styles.TextInput];
  if (props.variant) {
    classes.push(styles[props.variant]);
  }

  // Render
  return (
    <div className={combineCSS([formStyles.FormControl, styles.FormControl])}>
      <input
        id={props.id}
        className={combineCSS(classes)}
        required={props.required}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        autoComplete={props.autoComplete ? '' : 'Off'}
      />
      <label htmlFor={props.id} className={styles.InputLabel}>
        {props.label}
        {props.required ? ' *' : ''}
      </label>
    </div>
  );
};

type MultilineTextInputProps = {
  id: string;
  variant?: variant;
  label: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

/**
 * MultiTextInput is a multi-line text input field.
 */
export const MultilineTextInput: React.FC<MultilineTextInputProps> = (
  props: MultilineTextInputProps
) => {
  // Set the Base Classes
  let classes: (string | undefined)[] = [styles.TextInput];
  if (props.variant) {
    classes.push(styles[props.variant]);
  }

  // Render
  return (
    <div className={combineCSS([formStyles.FormControl, styles.FormControl])}>
      <textarea
        id={props.id}
        className={combineCSS(classes)}
        rows={props.rows ? props.rows : 1}
        required={props.required}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <label htmlFor={props.id} className={styles.InputLabel}>
        {props.label}
        {props.required ? ' *' : ''}
      </label>
    </div>
  );
};
