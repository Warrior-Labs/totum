import * as React from 'react';
import IconProps from './IconProps';

const CloseIcon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 847 847'
      width={props.size}
      height={props.size}
    >
      <g>
        <path d='M423 272l217 -217c99,-99 251,53 151,152l-216 216 216 217c100,99 -52,251 -151,151l-217 -216 -216 216c-99,100 -251,-52 -152,-151l217 -217 -217 -216c-99,-99 53,-251 152,-152l216 217z'></path>
      </g>
    </svg>
  );
};

export default CloseIcon;
