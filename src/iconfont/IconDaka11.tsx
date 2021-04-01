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

let IconDaka11: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m251.412 398.829L491.159 671.082a35.49 35.49 0 0 1-1.557 1.459c-14.039 13.53-36.586 13.383-50.428-0.459L286.588 519.497c-14.001-14.001-14.001-36.911 0-50.912s36.911-14.001 50.912 0l127.166 127.166L712.5 347.917c14.001-14.001 36.911-14.001 50.912 0 14.001 14.001 14.001 36.911 0 50.912z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconDaka11.defaultProps = {
  size: 22,
};

IconDaka11 = React.memo ? React.memo(IconDaka11) : IconDaka11;

export default IconDaka11;
