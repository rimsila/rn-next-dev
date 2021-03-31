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

let IconBackPink: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 922.5c-55.3 0-109-10.8-159.5-32.2-48.8-20.6-92.6-50.2-130.3-87.8-37.6-37.6-67.2-81.5-87.8-130.3-21.4-50.5-32.2-104.2-32.2-159.5s10.8-109 32.2-159.5c20.6-48.8 50.2-92.6 87.8-130.3 37.6-37.6 81.5-67.2 130.3-87.8 50.5-21.4 104.2-32.2 159.5-32.2s109 10.8 159.5 32.2c48.8 20.6 92.6 50.2 130.3 87.8 37.6 37.6 67.2 81.5 87.8 130.3 21.4 50.5 32.2 104.2 32.2 159.5 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-199.5-162.3-361.8-361.8-361.8S150.2 313.2 150.2 512.7 312.5 874.5 512 874.5c157.5 0 295.9-100.6 344.3-250.4 4.1-12.6 17.6-19.5 30.2-15.5 12.6 4.1 19.5 17.6 15.5 30.2-13.2 40.7-32.6 79-57.8 113.8-24.8 34.3-54.7 64.5-88.8 89.7-70.8 52.5-155 80.2-243.4 80.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M897 536.5H348.3c-13.3 0-24-10.7-24-24s10.7-24 24-24H897c13.3 0 24 10.7 24 24s-10.7 24-24 24z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M491.3 722.3c-6.1 0-12.3-2.3-17-7L288.8 529.7c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17L474.5 310c9.4-9.4 24.6-9.4 33.9 0 9.4 9.4 9.4 24.6 0 33.9L339.7 512.8l168.6 168.6c9.4 9.4 9.4 24.6 0 33.9-4.7 4.7-10.8 7-17 7z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconBackPink.defaultProps = {
  size: 18,
};

IconBackPink = React.memo ? React.memo(IconBackPink) : IconBackPink;

export default IconBackPink;
