import * as React from 'react';
import IconProps from './IconProps';

const DangerIcon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 71.6 62.41'
      width={props.size}
      height={props.size}
    >
      <g>
        <path d='M1.68,62.41c-.75,0-1.22-.55-1.44-.87-.32-.48-.32-1.14,0-1.62L34.44,.84c.25-.5,.84-.84,1.42-.84,.75,0,1.22,.55,1.44,.87l33.93,58.8c.26,.39,.37,.72,.37,1.06,0,.93-.75,1.68-1.68,1.68H1.68Zm2.95-3.36h62.45L35.86,5.04,4.63,59.05Z' />
        <polygon points='34.47 38.76 33.73 24.56 37.87 24.56 37.13 38.76 34.47 38.76' />
        <path d='M35.8,49.56c-1.86,0-2.7-1.36-2.7-2.7,0-1.56,1.14-2.7,2.7-2.7s2.7,1.14,2.7,2.7-1.14,2.7-2.7,2.7Z' />
      </g>
    </svg>
  );
};

export default DangerIcon;
