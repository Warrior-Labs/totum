import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import combineCSS from './helpers/combineCSS';
import styles from './scss/TabNav.module.css';
import StyleProps from './types/StyleProps';
import variant from './types/Variants';

type TabContainerProps = {
  variant?: variant;
  onSelect: (e: React.MouseEvent<HTMLAnchorElement>, targetID: string) => void;
} & StyleProps &
  React.PropsWithChildren;

const TabContainer: React.FC<TabContainerProps> = (
  props: TabContainerProps
) => {
  // Set the Base Classes
  let classes: (string | undefined)[] = [styles.TabContainer];
  if (props.variant) {
    classes.push(styles[props.variant]);
  }
  classes.push(props.className);

  // Reference for the Tab Container
  const containerRef = useRef<HTMLDivElement>(null);

  // Set the tabs
  const [tabs, setTabs] = useState<HTMLDivElement[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>('');
  useEffect(() => {
    if (containerRef.current) {
      const t = Array.from(
        containerRef.current.querySelectorAll<HTMLDivElement>('[role=tab]')
      );
      t.forEach((tab) => {
        if (tab.classList.contains(styles.selected)) {
          setSelectedTab(tab.id);
        }
      });
      setTabs(t);
    }
  }, [containerRef]);

  const onSelect = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    // Prevent Default Behaviour
    e.preventDefault();

    setSelectedTab(id);

    // Call the onSelect Method
    props.onSelect(e, id);
  };

  // Render
  return (
    <div
      id={props.id}
      className={combineCSS(classes)}
      style={props.style}
      ref={containerRef}
    >
      <ul className={styles.TabList}>
        {tabs.map((tab) => {
          let linkClass = tab.id === selectedTab ? styles.selected : '';
          return (
            <li key={'tablink-' + tab.id}>
              <a
                role='tablink'
                className={linkClass}
                href={'#' + tab.id}
                onClick={(e) => onSelect(e, tab.id)}
              >
                {tab.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className={styles.TabContent}>{props.children}</div>
    </div>
  );
};

type TabItemProps = {
  id: string;
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  title: string;
} & React.PropsWithChildren;

const TabItem: React.FC<TabItemProps> = (props: TabItemProps) => {
  // Render
  return (
    <div
      id={props.id}
      className={combineCSS([
        props.selected ? styles.selected : '',
        props.className,
      ])}
      style={props.style}
      title={props.title}
      role='tab'
    >
      {props.children}
    </div>
  );
};

export const TabNav = Object.assign(TabContainer, {
  Item: TabItem,
});
