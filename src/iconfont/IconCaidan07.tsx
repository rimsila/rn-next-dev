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

let IconCaidan07: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M515.478588 14.230588c-274.025412 0-496.941176 222.945882-496.941176 496.941176 0 274.010353 222.915765 496.926118 496.941176 496.926118 273.980235 0 496.926118-222.915765 496.926118-496.926118C1012.404706 237.176471 789.473882 14.230588 515.478588 14.230588zM801.942588 878.742588c-14.652235-145.182118-137.532235-258.846118-286.479059-258.846118-148.946824 0-271.826824 113.679059-286.464 258.846118C119.627294 793.313882 49.136941 660.374588 49.136941 511.171765c0-257.144471 209.212235-466.386824 466.356706-466.386824 257.129412 0 466.341647 209.242353 466.341647 466.386824C981.820235 660.374588 911.329882 793.344 801.942588 878.742588z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M511.713882 241.829647c-89.765647 0-162.816 73.065412-162.816 162.816s73.065412 162.800941 162.816 162.800941c89.720471 0 162.785882-73.035294 162.785882-162.800941S601.434353 241.829647 511.713882 241.829647z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconCaidan07.defaultProps = {
  size: 22,
};

IconCaidan07 = React.memo ? React.memo(IconCaidan07) : IconCaidan07;

export default IconCaidan07;
