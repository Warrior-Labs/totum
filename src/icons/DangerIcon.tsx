import * as React from 'react';
import IconProps from './IconProps';

const DangerIcon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      width={props.size}
      height={props.size}
    >
      <g>
        <path d='M51.7,22c-0.4-0.6-1-1-1.7-1s-1.4,0.4-1.7,1L17.8,74.7c-0.4,0.6-0.4,1.4,0,2c0.4,0.6,1,1,1.7,1h60.9c0,0,0,0,0,0   c1.1,0,2-0.9,2-2c0-0.5-0.2-0.9-0.4-1.2L51.7,22z M23,73.7L50,27l27,46.7H23z'></path>
        <polygon points='49,60.4 52.6,60.4 53.4,45.2 48.2,45.2  '></polygon>
        <path d='M47.6,65c0,1.1,1.2,2,3.2,2c1.9,0,3.2-0.9,3.2-2c0-1.1-1.3-2-3.2-2C48.9,63,47.6,63.9,47.6,65z'></path>
      </g>
    </svg>
  );
};

export default DangerIcon;
