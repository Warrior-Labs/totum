import * as React from 'react';
import IconProps from './IconProps';

const DownPointerIcon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1200 1200'
      width={props.size}
      height={props.size}
    >
      <g>
        <path d='m30 418.8 206.4-207.6 363.6 363.6 363.6-363.6 206.4 207.6-570 570z' />
      </g>
    </svg>
  );
};

export default DownPointerIcon;
