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

let IconDeleteCenter1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 1024a512 512 0 1 1 512-512 512.576 512.576 0 0 1-512 512z m0-960a448 448 0 1 0 448 448A448.512 448.512 0 0 0 512 64z m192 480H320a32 32 0 0 1 0-64h384a32 32 0 0 1 0 64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconDeleteCenter1.defaultProps = {
  size: 26,
};

IconDeleteCenter1 = React.memo ? React.memo(IconDeleteCenter1) : IconDeleteCenter1;

export default IconDeleteCenter1;
