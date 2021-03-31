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

let IconEditSquare: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M711.04 85.76A227.114667 227.114667 0 0 1 878.549333 145.066667a229.589333 229.589333 0 0 1 59.690667 167.936v398.08a229.248 229.248 0 0 1-59.264 167.936 228.138667 228.138667 0 0 1-167.936 59.264h-398.08A227.498667 227.498667 0 0 1 145.024 878.933333a227.498667 227.498667 0 0 1-59.264-167.936v-398.08A227.498667 227.498667 0 0 1 145.066667 145.024 227.498667 227.498667 0 0 1 312.96 85.76h398.08z m-242.517333 632.96l286.848-287.701333c26.026667-26.453333 26.026667-69.034667 0-95.061334l-55.381334-55.381333a67.413333 67.413333 0 0 0-95.488 0l-28.586666 28.970667c-4.266667 4.266667-4.266667 11.52 0 15.786666 0 0 67.797333 67.328 69.077333 69.034667 4.693333 5.12 7.68 11.946667 7.68 19.626667 0 15.317333-12.373333 28.117333-28.16 28.117333-7.253333 0-14.08-2.986667-18.773333-7.68L534.613333 363.690667a9.258667 9.258667 0 0 0-12.8 0l-203.306666 203.306666c-14.08 14.08-22.186667 32.810667-22.613334 52.821334l-2.56 101.034666c0 5.546667 1.706667 10.666667 5.546667 14.506667 3.84 3.84 8.96 5.973333 14.506667 5.973333h100.138666c20.48 0 40.106667-8.106667 55.04-22.613333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconEditSquare.defaultProps = {
  size: 18,
};

IconEditSquare = React.memo ? React.memo(IconEditSquare) : IconEditSquare;

export default IconEditSquare;
