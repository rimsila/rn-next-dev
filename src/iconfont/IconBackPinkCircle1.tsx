/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconBackPinkCircle1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 8C234.296 8 8 234.296 8 512s226.296 504 504 504 504-226.296 504-504S789.704 8 512 8z m0 901.656c-219.24 0-397.656-178.416-397.656-397.656S292.76 114.344 512 114.344 909.656 292.76 909.656 512 731.24 909.656 512 909.656z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M585.08 366.848H427.328l13.608-13.608c13.608-13.608 13.608-36.288 0-49.896s-36.288-13.608-50.4 0l-79.128 78.624c-13.608 13.608-13.608 36.288 0 49.896l79.128 79.128c7.056 7.056 16.128 10.584 25.2 10.584 9.072 0 18.144-3.528 25.2-10.584 13.608-13.608 13.608-36.288 0-49.896l-3.528-3.528H585.08c36.792 0 66.528 36.288 66.528 81.144s-29.736 81.144-66.528 81.144h-226.8c-25.2 0-45.36 20.16-45.36 45.36s20.16 45.36 45.36 45.36h227.304c87.192 0 157.752-77.112 157.752-172.368s-71.064-171.36-158.256-171.36z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconBackPinkCircle1.defaultProps = {
  size: 22,
};

IconBackPinkCircle1 = React.memo ? React.memo(IconBackPinkCircle1) : IconBackPinkCircle1;

export default IconBackPinkCircle1;
