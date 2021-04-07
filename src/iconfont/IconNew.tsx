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

let IconNew: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path d="M512 513m-506 0a506 506 0 1 0 1012 0 506 506 0 1 0-1012 0Z" fill={getIconColor(color, 0, '#333333')} />
      <Path d="M512 513m-475 0a475 475 0 1 0 950 0 475 475 0 1 0-950 0Z" fill={getIconColor(color, 1, '#333333')} />
      <Path d="M262 483h500v60H262z" fill={getIconColor(color, 2, '#333333')} />
      <Path d="M482 763V263h60v500z" fill={getIconColor(color, 3, '#333333')} />
    </Svg>
  );
};

IconNew.defaultProps = {
  size: 26,
};

IconNew = React.memo ? React.memo(IconNew) : IconNew;

export default IconNew;
