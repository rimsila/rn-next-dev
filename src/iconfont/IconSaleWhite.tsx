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

let IconSaleWhite: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1068 1024" width={size} height={size} {...rest}>
      <Path
        d="M27.491143 85.679816A44.520791 44.520791 0 0 1 61.594069 3.405395l156.802225 65.000355 88.507332 473.256004-23.150812 86.68198a44.520791 44.520791 0 0 0 42.962563 56.007154h633.263727a44.520791 44.520791 0 0 1 0 89.041581H326.715377a133.562372 133.562372 0 0 1-129.021251-168.110505l17.9864-67.092832-75.952469-406.02961-112.192393-46.479706zM400.708931 311.66735a44.520791 44.520791 0 1 1 0-89.041582h653.298082l-137.480201 392.094604h-396.235037a44.520791 44.520791 0 0 1 0-89.041582h333.060035L928.413863 311.66735H400.708931z m0 712.33265a89.041581 89.041581 0 1 1 0-178.083163 89.041581 89.041581 0 0 1 0 178.083163z m400.687116 0a89.041581 89.041581 0 1 1 0-178.083163 89.041581 89.041581 0 0 1 0 178.083163z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSaleWhite.defaultProps = {
  size: 26,
};

IconSaleWhite = React.memo ? React.memo(IconSaleWhite) : IconSaleWhite;

export default IconSaleWhite;
