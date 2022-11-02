import * as React from 'react';
import IconProps from './IconProps';

const InfoIcon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 71.6 71.6'
      width={props.size}
      height={props.size}
    >
      <g>
        <path d='M35.8,71.6C16.06,71.6,0,55.54,0,35.8S16.06,0,35.8,0s35.8,16.06,35.8,35.8-16.06,35.8-35.8,35.8Zm0-67.3c-17.37,0-31.5,14.13-31.5,31.5s14.13,31.5,31.5,31.5,31.5-14.13,31.5-31.5S53.17,4.3,35.8,4.3Z' />
        <rect x='33.65' y='30.5' width='4.3' height='21.87' />
        <path d='M35.8,23.53c-1.19,0-2.15-.97-2.15-2.15s.97-2.15,2.15-2.15,2.15,.97,2.15,2.15-.97,2.15-2.15,2.15Z' />
      </g>
    </svg>
  );
};

export default InfoIcon;
