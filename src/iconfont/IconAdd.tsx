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

let IconAdd: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 73.155765c242.296471 0 438.844235 196.547765 438.844235 438.844235S754.296471 950.844235 512 950.844235 73.155765 754.296471 73.155765 512 269.703529 73.155765 512 73.155765zM512 0C229.496471 0 0 229.496471 0 512c0 282.503529 229.496471 512 512 512 282.503529 0 512-229.496471 512-512 0-282.503529-229.496471-512-512-512z m292.562824 477.244235h-255.096471v-257.807059h-74.962824v257.807059h-255.09647v74.992941h255.09647v252.325648h74.992942v-252.325648h255.09647v-74.992941z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconAdd.defaultProps = {
  size: 18,
};

IconAdd = React.memo ? React.memo(IconAdd) : IconAdd;

export default IconAdd;
