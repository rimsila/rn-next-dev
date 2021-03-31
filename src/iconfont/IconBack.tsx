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

let IconBack: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0C229.234 0 0 229.223 0 512s229.223 512 512 512 512-229.211 512-512S794.811 0 512 0z m335.737 766.411s-26.354-42.582-37.051-57.508-55.737-70.549-125.715-102.789-186.685-26.491-186.685-26.491v134.24L176.137 485.714l322.149-228.16v135.463s77.383 5.829 117.828 14.206C684.24 421.326 721.6 454.89 721.6 454.89c39.886 23.783 88.834 87.932 109.2 165.143s16.937 146.377 16.937 146.377z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBack.defaultProps = {
  size: 18,
};

IconBack = React.memo ? React.memo(IconBack) : IconBack;

export default IconBack;
