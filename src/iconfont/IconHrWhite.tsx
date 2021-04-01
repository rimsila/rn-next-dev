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

let IconHrWhite: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M518.4 616c35.2-25.6 57.6-67.2 57.6-113.6 0-76.8-62.4-140.8-139.2-140.8S297.6 424 297.6 502.4c0 46.4 22.4 88 57.6 113.6-73.6 32-126.4 107.2-126.4 193.6 0 12.8 9.6 22.4 20.8 22.4h371.2c11.2 0 20.8-9.6 20.8-22.4 3.2-86.4-49.6-161.6-123.2-193.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M696 612.8c35.2-25.6 57.6-67.2 57.6-113.6 0-76.8-62.4-140.8-139.2-140.8-11.2 0-20.8 9.6-20.8 22.4s9.6 22.4 20.8 22.4c52.8 0 96 43.2 96 97.6 0 52.8-43.2 97.6-96 97.6-11.2 0-20.8 9.6-20.8 22.4s9.6 22.4 20.8 22.4c91.2 0 164.8 75.2 164.8 166.4 0 12.8 9.6 22.4 20.8 22.4s20.8-9.6 20.8-22.4c0-89.6-51.2-164.8-124.8-196.8z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M902.4 56h-60.8v-6.4C841.6 22.4 817.6 0 788.8 0H233.6c-28.8 0-52.8 22.4-52.8 49.6v6.4H121.6C56 56 0 112 0 177.6v723.2C0 968 56 1024 121.6 1024h780.8c65.6 0 121.6-56 121.6-123.2V177.6c0-65.6-56-121.6-121.6-121.6z m36.8 844.8c0 22.4-19.2 38.4-36.8 38.4H121.6c-22.4 0-36.8-19.2-36.8-38.4V177.6c0-22.4 19.2-38.4 36.8-38.4h60.8v16c0 27.2 24 49.6 52.8 49.6H790.4c28.8 0 52.8-22.4 52.8-49.6v-16h60.8c22.4 0 36.8 19.2 36.8 38.4v723.2z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconHrWhite.defaultProps = {
  size: 22,
};

IconHrWhite = React.memo ? React.memo(IconHrWhite) : IconHrWhite;

export default IconHrWhite;
