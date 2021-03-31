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

let IconSupplierWhite: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M162.923245 523.085756A143.242914 143.242914 0 0 1 20.054008 380.527916a26.593358 26.593358 0 0 1 53.248997 0 89.620241 89.620241 0 1 0 179.240481 0 26.593358 26.593358 0 0 1 53.248997 0 143.242914 143.242914 0 0 1-142.869238 142.806958z m231.928963 0a143.242914 143.242914 0 0 1-142.806958-142.806958 26.593358 26.593358 0 0 1 53.248996 0 89.620241 89.620241 0 1 0 179.240482 0 26.593358 26.593358 0 0 1 53.248997 0 143.242914 143.242914 0 0 1-142.931517 142.806958z m233.48595 0A143.242914 143.242914 0 0 1 485.65576 380.527916a26.593358 26.593358 0 0 1 53.248996 0 89.620241 89.620241 0 1 0 179.240482 0 26.593358 26.593358 0 0 1 53.248996 0 143.242914 143.242914 0 0 1-143.056076 142.55784z m231.928963 0a143.242914 143.242914 0 0 1-142.806958-142.806958 26.593358 26.593358 0 0 1 53.248996 0 89.620241 89.620241 0 1 0 179.240482 0 26.593358 26.593358 0 0 1 53.248997 0 143.242914 143.242914 0 0 1-142.931517 142.806958z m-33.319548-27.838949v430.413818a45.090378 45.090378 0 0 1-45.028098 45.028099H241.270892a45.090378 45.090378 0 0 1-45.028099-45.028099V495.246807h-53.124438v430.413818a98.277095 98.277095 0 0 0 98.277096 98.277095h540.648583a98.277095 98.277095 0 0 0 98.277095-98.277095V495.246807zM73.9258 383.143656l97.093784-265.933584a205.522443 205.522443 0 0 1 27.402992-53.996351 23.7285 23.7285 0 0 1 21.050481-9.777886h584.119693a24.911811 24.911811 0 0 1 21.797835 9.653327 186.464907 186.464907 0 0 1 26.40652 53.373555v0.311398l97.280623 266.369541c0 0.871913 53.373556 2.491181 53.373555 2.491182a99.086729 99.086729 0 0 0 0.560516-10.151563l-101.141953-276.957062C881.566719 41.789563 857.838219 0.249118 803.59275 0.249118H219.473057c-54.307748 0-76.977497 42.972874-98.277095 98.277095L20.054008 375.483275a98.899891 98.899891 0 0 0 0.560516 10.151563s53.498115-1.868386 53.373555-2.7403z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSupplierWhite.defaultProps = {
  size: 18,
};

IconSupplierWhite = React.memo ? React.memo(IconSupplierWhite) : IconSupplierWhite;

export default IconSupplierWhite;
