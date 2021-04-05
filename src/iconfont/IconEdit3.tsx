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

let IconEdit3: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M469.333333 590.933333l-36.266666-38.4-14.933334 14.933334-17.066666 55.466666 55.466666-19.2zM463.04 522.901333l143.317333-143.296 37.696 37.717334-143.296 143.296z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 0C228.266667 0 0 228.266667 0 512s228.266667 512 512 512 512-228.266667 512-512S795.733333 0 512 0z m256 725.333333c0 23.466667-19.2 42.666667-42.666667 42.666667H298.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667h426.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v426.666666z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M298.666667 725.333333h426.666666V298.666667H298.666667v426.666666z m49.066666-76.8l29.866667-98.133333c0-4.266667 2.133333-6.4 4.266667-8.533333l206.933333-206.933334c8.533333-8.533333 21.333333-8.533333 29.866667 0l68.266666 68.266667c8.533333 8.533333 8.533333 21.333333 0 29.866667L480 640c-2.133333 2.133333-6.4 4.266667-8.533333 4.266667l-98.133334 29.866666h-6.4c-6.4 0-10.666667-2.133333-14.933333-6.4-4.266667-4.266667-6.4-12.8-4.266667-19.2z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconEdit3.defaultProps = {
  size: 26,
};

IconEdit3 = React.memo ? React.memo(IconEdit3) : IconEdit3;

export default IconEdit3;
