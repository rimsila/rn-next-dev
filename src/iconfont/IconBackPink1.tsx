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

let IconBackPink1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M966.186667 546.944a41.898667 41.898667 0 1 0-45.866667-41.685333 49.024 49.024 0 0 0 45.866667 41.685333z m-204.330667 0a41.898667 41.898667 0 1 0 0-83.413333 41.685333 41.685333 0 0 0 0 83.413333z m-738.133333-8.533333l254.378666 246.058666a41.301333 41.301333 0 0 0 58.368-58.368l-179.2-179.2h412.842667a41.770667 41.770667 0 0 0 41.685333-41.685333 44.842667 44.842667 0 0 0-41.685333-41.685333H157.269333l183.466667-179.2a41.301333 41.301333 0 0 0-58.368-58.368L23.808 476.16c-13.824 14.250667-33.024 29.013333-18.218667 44.672z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBackPink1.defaultProps = {
  size: 18,
};

IconBackPink1 = React.memo ? React.memo(IconBackPink1) : IconBackPink1;

export default IconBackPink1;
