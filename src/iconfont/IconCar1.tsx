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

let IconCar1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M960 704H106.666667a85.333333 85.333333 0 0 1-85.333334-85.333333v-146.346667A85.333333 85.333333 0 0 1 34.133333 426.666667l80.213334-128L85.333333 234.666667h480.213334a128 128 0 0 1 90.666666 37.546666L789.333333 405.333333l152.533334 45.653334A85.333333 85.333333 0 0 1 1002.666667 533.333333v128a42.666667 42.666667 0 0 1-42.666667 42.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M213.333333 682.666667m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M213.333333 682.666667m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M469.333333 277.333333h108.8a64 64 0 0 1 46.506667 19.84l109.013333 114.773334a21.333333 21.333333 0 0 1-15.36 36.053333H469.333333a21.333333 21.333333 0 0 1-21.333333-21.333333v-128a21.333333 21.333333 0 0 1 21.333333-21.333334zM123.733333 448H384a21.333333 21.333333 0 0 0 21.333333-21.333333v-128a21.333333 21.333333 0 0 0-21.333333-21.333334H203.733333a21.333333 21.333333 0 0 0-17.92 10.026667l-79.146666 128A21.333333 21.333333 0 0 0 123.733333 448z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M810.666667 682.666667m-106.666667 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z"
        fill={getIconColor(color, 4, '#333333')}
      />
      <Path
        d="M810.666667 682.666667m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
        fill={getIconColor(color, 5, '#333333')}
      />
      <Path
        d="M810.666667 682.666667m-21.333334 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z"
        fill={getIconColor(color, 6, '#333333')}
      />
      <Path
        d="M213.333333 682.666667m-21.333333 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z"
        fill={getIconColor(color, 7, '#333333')}
      />
      <Path d="M64 554.666667H21.333333v-64h85.333334l-42.666667 64z" fill={getIconColor(color, 8, '#333333')} />
      <Path
        d="M981.333333 554.666667h-54.613333a42.666667 42.666667 0 0 1-40.533333-29.226667L874.666667 490.666667h64a42.666667 42.666667 0 0 1 42.666666 42.666666z"
        fill={getIconColor(color, 9, '#333333')}
      />
    </Svg>
  );
};

IconCar1.defaultProps = {
  size: 26,
};

IconCar1 = React.memo ? React.memo(IconCar1) : IconCar1;

export default IconCar1;
