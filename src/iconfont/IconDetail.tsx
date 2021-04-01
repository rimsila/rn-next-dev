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

let IconDetail: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 1024H128C57.6 1024 0 966.4 0 896V128C0 57.6 57.6 0 128 0h768c70.4 0 128 57.6 128 128v768c0 70.4-57.6 128-128 128z m64-832c0-70.4-57.6-128-128-128H192c-70.4 0-128 57.6-128 128v640c0 70.4 57.6 128 128 128h640c70.4 0 128-57.6 128-128V192zM384 768h448v64H384v-64z m0-192h448v64H384v-64z m0-192h448v64H384v-64z m0-192h448v64H384v-64zM192 768h64v64h-64v-64z m0-192h64v64h-64v-64z m0-192h64v64h-64v-64z m0-192h64v64h-64v-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconDetail.defaultProps = {
  size: 22,
};

IconDetail = React.memo ? React.memo(IconDetail) : IconDetail;

export default IconDetail;
