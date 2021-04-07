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

let IconDate1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M888.7 417.8H135.3c-16.6 0-30-13.4-30-30s13.4-30 30-30h753.3c16.6 0 30 13.4 30 30s-13.4 30-29.9 30zM390.1 266.5c-16.6 0-30-13.4-30-30v-123c0-16.6 13.4-30 30-30s30 13.4 30 30v123c0 16.6-13.5 30-30 30zM633.9 266.5c-16.6 0-30-13.4-30-30v-123c0-16.6 13.4-30 30-30s30 13.4 30 30v123c0 16.6-13.4 30-30 30zM327.5 583.1h-92.3c-16.6 0-30-13.4-30-30s13.4-30 30-30h92.3c16.6 0 30 13.4 30 30s-13.4 30-30 30zM573.5 583.1h-123c-16.6 0-30-13.4-30-30s13.4-30 30-30h123c16.6 0 30 13.4 30 30s-13.4 30-30 30zM788.7 583.1h-92.1c-16.6 0-30-13.4-30-30s13.4-30 30-30h92.1c16.6 0 30 13.4 30 30s-13.4 30-30 30zM327.5 771.1h-92.3c-16.6 0-30-13.4-30-30s13.4-30 30-30h92.3c16.6 0 30 13.4 30 30s-13.4 30-30 30zM573.5 771.1h-123c-16.6 0-30-13.4-30-30s13.4-30 30-30h123c16.6 0 30 13.4 30 30s-13.4 30-30 30zM788.7 771.1h-92.1c-16.6 0-30-13.4-30-30s13.4-30 30-30h92.1c16.6 0 30 13.4 30 30s-13.4 30-30 30z"
        fill={getIconColor(color, 0, '#2C2C2C')}
      />
      <Path
        d="M781.1 939.6H242.9C164.6 939.6 101 876 101 797.8V286.9c0-78.2 63.6-141.9 141.9-141.9h538.3c78.2 0 141.9 63.6 141.9 141.9v510.8c-0.1 78.3-63.7 141.9-142 141.9zM242.9 205.1c-45.1 0-81.9 36.7-81.9 81.9v510.8c0 45.1 36.7 81.9 81.9 81.9h538.3c45.1 0 81.9-36.7 81.9-81.9V286.9c0-45.1-36.7-81.9-81.9-81.9H242.9z"
        fill={getIconColor(color, 1, '#2C2C2C')}
      />
    </Svg>
  );
};

IconDate1.defaultProps = {
  size: 26,
};

IconDate1 = React.memo ? React.memo(IconDate1) : IconDate1;

export default IconDate1;
