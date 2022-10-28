import * as React from 'react';
import IconProps from './IconProps';

const HamburgerIcon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 30 26'
      width={props.size}
      height={props.size}
    >
      <g fill-rule='evenodd'>
        <path d='M0,0H30V6H0V0ZM0,10H30v6H0v-6Zm0,10H30v6H0v-6Z' />
      </g>
    </svg>
  );
};

export default HamburgerIcon;
