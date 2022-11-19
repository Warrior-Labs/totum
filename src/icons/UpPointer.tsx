import * as React from 'react';
import IconProps from './IconProps';

const UpPointerIcon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1200 1200'
      width={props.size}
      height={props.size}
    >
      <g>
        <path d='m1170 824.4c0 31.199-12 61.199-34.801 85.199-46.801 46.801-123.6 46.801-170.4 0l-364.8-363.6-364.8 363.6c-46.801 46.801-123.6 46.801-170.4 0-46.801-46.801-46.801-123.6 0-170.4l450-450c22.801-22.801 52.801-34.801 85.199-34.801s62.398 13.199 85.199 34.801l450 450c22.801 23.996 34.801 55.195 34.801 85.195z' />
      </g>
    </svg>
  );
};

export default UpPointerIcon;
