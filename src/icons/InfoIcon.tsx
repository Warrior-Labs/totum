import * as React from 'react';
import IconProps from './IconProps';

const InfoIcon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      width={props.size}
      height={props.size}
    >
      <g>
        <path d='M50,18A32,32,0,1,0,82,50,32,32,0,0,0,50,18Zm0,56A24,24,0,1,1,74,50,24,24,0,0,1,50,74Z'></path>
        <rect x='46' y='48' width='8' height='18'></rect>
        <circle cx='50' cy='38' r='4'></circle>
      </g>
    </svg>
  );
};

export default InfoIcon;
