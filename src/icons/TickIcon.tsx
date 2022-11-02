import * as React from 'react';
import IconProps from './IconProps';

const TickIcon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 71.6 71.6'
      width={props.size}
      height={props.size}
    >
      <g>
        <path d='M29.3,46.3c.37,.38,.87,.59,1.4,.6,.52,.03,1.02-.15,1.4-.5l19.3-18.3c.79-.75,.84-2,.1-2.8-.8-.76-2.05-.8-2.9-.1l-17.8,16.9-7.8-8.2c-.71-.77-1.91-.82-2.68-.12-.04,.04-.08,.08-.12,.12-.79,.75-.84,2-.1,2.8l9.2,9.6Z' />
        <path d='M35.8,71.6c19.77,0,35.8-16.03,35.8-35.8S55.57,0,35.8,0,0,16.03,0,35.8c0,19.77,16.03,35.8,35.8,35.8,0,0,0,0,0,0Zm0-67.6c17.56,0,31.8,14.24,31.8,31.8s-14.24,31.8-31.8,31.8S4,53.36,4,35.8h0C4,18.24,18.24,4,35.8,4h0Z' />
      </g>
    </svg>
  );
};

export default TickIcon;
