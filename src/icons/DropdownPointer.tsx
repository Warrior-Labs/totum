import * as React from 'react';
import IconProps from './IconProps';

const DropdownPointer: React.FC<IconProps> = (props: IconProps) => {
  return (
    <svg
      x='0px'
      y='0px'
      width={props.size}
      height={props.size}
      viewBox='0 0 100 100'
      className={props.className}
    >
      <g>
        <path d='M76.739,33H23.261l-0.586,0.586c-3.94,3.94-3.94,8.646,0,12.586l20.153,20.153c1.915,1.916,4.463,2.971,7.172,2.971   s5.257-1.055,7.172-2.971l20.153-20.153c3.94-3.94,3.94-8.646,0-12.586L76.739,33z'></path>
      </g>
    </svg>
  );
};

export default DropdownPointer;
