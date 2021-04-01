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

let IconAddGreen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-896C299.968 128 128 299.968 128 512s171.968 384 384 384 384-171.968 384-384S724.032 128 512 128z m192 448h-128v128c0 35.392-28.608 64-64 64a64 64 0 0 1-64-64v-128h-128a64 64 0 1 1 0-128h128v-128a64.021333 64.021333 0 0 1 128 0v128h128a64 64 0 0 1 64 64c0 35.392-28.608 64-64 64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconAddGreen.defaultProps = {
  size: 22,
};

IconAddGreen = React.memo ? React.memo(IconAddGreen) : IconAddGreen;

export default IconAddGreen;
