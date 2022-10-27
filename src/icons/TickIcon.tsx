import * as React from 'react';
import IconProps from './IconProps';

const TickIcon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 98 98'
      width={props.size}
      height={props.size}
    >
      <g>
        <path d='M42.5,59.5a2,2,0,0,0,1.4.6,1.9,1.9,0,0,0,1.4-.5L64.6,41.3a2,2,0,0,0,.1-2.8,2.2,2.2,0,0,0-2.9-.1L44,55.3l-7.8-8.2a1.9,1.9,0,0,0-2.8,0,2,2,0,0,0-.1,2.8Z'></path>
        <path d='M49,84.8A35.8,35.8,0,1,0,13.2,49,35.8,35.8,0,0,0,49,84.8Zm0-67.6A31.8,31.8,0,1,1,17.2,49,31.8,31.8,0,0,1,49,17.2Z'></path>
      </g>
    </svg>
  );
};

export default TickIcon;
