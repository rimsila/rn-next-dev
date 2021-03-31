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

let IconFacebook1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.1 1004.1c-131.5 0-255-51.2-348-144.1S20 643.4 20 512s51.2-255 144.1-348C277.2 50.9 438.9-0.2 596.7 27.2c15.7 2.7 26.3 17.7 23.5 33.4-2.7 15.7-17.8 26.3-33.4 23.5-139.3-24.2-282 21-381.8 120.8C123 286.9 77.8 396 77.8 512c0 116 45.2 225.1 127.2 307.1 169.3 169.3 444.9 169.3 614.2 0 169.3-169.3 169.3-444.9 0-614.2-16.9-16.9-35.3-32.5-54.5-46.3-13-9.3-16-27.4-6.7-40.3 9.3-13 27.4-16 40.3-6.7 21.8 15.6 42.6 33.3 61.8 52.4 191.9 191.9 191.9 504.1 0 696-93 92.9-216.5 144.1-348 144.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M689.5 85.3m-28.9 0a28.9 28.9 0 1 0 57.8 0 28.9 28.9 0 1 0-57.8 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M644.6 512h-85.7v309.1H431.6V512h-64.9V405.5h64.9v-64.9c0-85.7 36.4-137.6 137.6-137.6H655v106.5h-52c-38.9 0-41.5 15.6-41.5 41.5v52h96.1l-13 109z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconFacebook1.defaultProps = {
  size: 18,
};

IconFacebook1 = React.memo ? React.memo(IconFacebook1) : IconFacebook1;

export default IconFacebook1;
