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

let IconEyeBlue: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M445.6544 907.86133333H65.8112V90.24746667h837.45706667v498.50666667c19.3504 5.21173333 37.88373333 11.39413333 55.456 18.43733333V29.81973333H7.40160001v928.7872h498.77973332c-23.552-15.1808-43.95306667-32.24533333-60.52586666-50.7456z m15.19786667-95.55733333c107.98293333 165.03253333 269.95733333 164.90986667 269.95733333 164.90986667 227.0848 0 289.01653333-164.90986667 289.01653334-164.90986667-265.1968-349.09013333-558.97386667 0-558.97386667 0z m279.48693333 103.7568c-56.02986667 0-101.44746667-44.26773333-101.44746667-98.8768s45.4176-98.87786667 101.44746667-98.87786666c56.02773333 0 101.44746667 44.2688 101.44746667 98.87786666s-45.41973333 98.8768-101.44746667 98.8768z m-26.11946666-76.11733333a41.27146667 40.22613333 0 1 1 0 1.16266666zM146.53013333 240.88960001h76.92586667v74.97706667h-76.92586667v-74.97706667z m0 146.46826667h76.92586667v74.97706665h-76.92586667v-74.97706665z m0 143.06666666h76.92586667v74.97706667h-76.92586667v-74.97706667z m152.064-288.37226666h449.03360001v78.46399999H298.59413333v-78.464z m0 143.56159999h449.03360001v78.464H298.59413333v-78.464z m0 143.06666666h449.03360001v78.464H298.59413333v-78.464z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconEyeBlue.defaultProps = {
  size: 22,
};

IconEyeBlue = React.memo ? React.memo(IconEyeBlue) : IconEyeBlue;

export default IconEyeBlue;
