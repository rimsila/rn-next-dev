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

let IconLogout1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M733.726 647.766 778.98 693.02 960 512 778.98 330.98 733.724 376.236 837.49 480 384 480 384 544 837.49 544Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M782.982 783.532C710.458 856.058 614.036 896 511.472 896c-102.574 0-199.012-39.942-271.544-112.47C167.394 711.002 128 614.57 128 512c0-102.562 39.394-198.99 111.93-271.522C312.464 167.946 408.9 128 511.472 128c102.558 0 198.982 39.946 271.51 112.476 5.054 5.056 9.932 10.242 14.666 15.524l81.462 0c-80.948-116.056-215.418-192-367.638-192C264.042 64 64 264.596 64 512c0 247.43 200.042 448 447.472 448 152.224 0 286.7-75.94 367.644-192l-81.46 0C792.92 773.286 788.042 778.472 782.982 783.532z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconLogout1.defaultProps = {
  size: 26,
};

IconLogout1 = React.memo ? React.memo(IconLogout1) : IconLogout1;

export default IconLogout1;
