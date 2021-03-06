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

let IconClose: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M862 162C765.4 65.3 638.7 17 512 17S258.6 65.3 162 162c-193.3 193.3-193.3 506.7 0 700 96.7 96.7 223.3 145 350 145s253.4-48.3 350-145c193.3-193.3 193.3-506.7 0-700z m-28.3 671.7c-43.4 43.5-94.1 77.1-150.5 100C628.7 955.8 571.1 967 512 967s-116.7-11.2-171.2-33.3c-56.4-22.9-107-56.5-150.5-100-43.5-43.4-77.1-94.1-100-150.5C68.2 628.7 57 571.1 57 512s11.2-116.7 33.3-171.2c22.9-56.4 56.5-107.1 100-150.5 43.4-43.4 94.1-77.1 150.5-100C395.3 68.2 452.9 57 512 57s116.7 11.2 171.2 33.3c56.4 22.9 107 56.5 150.5 100 43.5 43.4 77.1 94.1 100 150.5C955.8 395.3 967 452.9 967 512s-11.2 116.7-33.3 171.2c-22.9 56.4-56.5 107.1-100 150.5z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M698.5 669.8c7.9 7.9 7.9 20.8 0 28.7-3.9 4-9.1 5.9-14.3 5.9s-10.4-2-14.4-5.9L512 540.7 354.2 698.5c-4 4-9.2 5.9-14.4 5.9s-10.4-2-14.3-5.9c-7.9-7.9-7.9-20.8 0-28.7L483.3 512 325.5 354.2c-7.9-7.9-7.9-20.8 0-28.7 3.9-3.9 9.1-5.9 14.3-5.9s10.4 2 14.4 5.9L512 483.3l157.8-157.8c4-3.9 9.2-5.9 14.4-5.9s10.4 2 14.3 5.9c7.9 7.9 7.9 20.8 0 28.7L540.7 512l157.8 157.8z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconClose.defaultProps = {
  size: 26,
};

IconClose = React.memo ? React.memo(IconClose) : IconClose;

export default IconClose;
