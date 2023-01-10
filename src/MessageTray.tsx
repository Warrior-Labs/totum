import * as React from 'react';
import { useEffect } from 'react';
import combineCSS from './helpers/combineCSS';
import styles from './scss/MessageTray.module.css';
import StyleProps from './types/StyleProps';

type MessageTrayContainerProps = {} & StyleProps & React.PropsWithChildren;

const TrayContainer: React.FC<MessageTrayContainerProps> = (
  props: MessageTrayContainerProps
) => {
  // Render
  return (
    <div
      id={props.id}
      className={combineCSS([styles.MessageTrayContainer, props.className])}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

type MessageTrayProps = {
  size: 'sm' | 'md' | 'lg';
} & StyleProps &
  React.PropsWithChildren;

const Tray: React.FC<MessageTrayProps> = (props: MessageTrayProps) => {
  // Render
  return (
    <div
      id={props.id}
      className={combineCSS([
        styles.MessageTray,
        styles[props.size],
        props.className,
      ])}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

type MessageTrayHeaderProps = {} & StyleProps & React.PropsWithChildren;

const TrayHeader: React.FC<MessageTrayHeaderProps> = (
  props: MessageTrayHeaderProps
) => {
  // Render
  return (
    <div
      id={props.id}
      className={combineCSS([styles.MessageTrayHeader, props.className])}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

type MessageTrayFooterProps = {} & StyleProps & React.PropsWithChildren;

const TrayFooter: React.FC<MessageTrayFooterProps> = (
  props: MessageTrayFooterProps
) => {
  // Render
  return (
    <div
      id={props.id}
      className={combineCSS([styles.MessageTrayFooter, props.className])}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

type MessageListProps = {} & StyleProps & React.PropsWithChildren;

export const List: React.FC<MessageListProps> = (props: MessageListProps) => {
  // Render
  return (
    <div
      id={props.id}
      className={combineCSS([styles.MessageList, props.className])}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

type MessageItemProps = {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  selected?: boolean;
} & StyleProps &
  React.PropsWithChildren;

export const Message: React.FC<MessageItemProps> = (
  props: MessageItemProps
) => {
  // OnClick Method
  const SelectMessage = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent Default Behaviour
    e.preventDefault();

    // Get the Parent Item
    let elems = e.currentTarget.parentElement?.children;
    if (elems) {
      let messages = Array.from(elems);
      messages.forEach((el) => {
        if (el.classList.contains(styles.selected)) {
          el.classList.remove(styles.selected);
        }
      });
    }

    // Set the Class to Selected
    e.currentTarget.classList.add(styles.selected);

    // Call the onClick Method
    props.onClick(e);
  };

  const setBaseClasses = (selected?: boolean) => {
    if (selected) {
      return [styles.MessageItem, styles.selected, props.className];
    } else {
      return [styles.MessageItem, props.className];
    }
  };
  let baseClasses = setBaseClasses(props.selected);
  useEffect(() => {
    baseClasses = setBaseClasses(props.selected);
  }, [props.selected]);

  // Render
  return (
    <div
      id={props.id}
      className={combineCSS(baseClasses)}
      style={props.style}
      onClick={SelectMessage}
    >
      {props.children}
    </div>
  );
};

export const MessageTray = Object.assign(TrayContainer, {
  Tray: Tray,
  Header: TrayHeader,
  Footer: TrayFooter,
  List: List,
  Item: Message,
});
