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

let IconUsersWhite: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M89.6 981.333333A46.08 46.08 0 0 1 42.666667 934.4v-134.528c0-156.458667 86.058667-242.517333 242.474666-242.517333H558.933333c156.458667 0 242.474667 86.058667 242.474667 242.517333V934.4c0 26.581333-20.309333 46.933333-46.933333 46.933333a46.08 46.08 0 0 1-46.933334-46.933333v-134.528c0-104.832-45.354667-148.650667-148.608-148.650667H285.141333c-104.789333 0-148.608 45.397333-148.608 148.650667V934.4c0 25.045333-20.352 46.933333-46.933333 46.933333zM421.248 518.272A237.653333 237.653333 0 0 1 183.466667 280.448 237.653333 237.653333 0 0 1 421.248 42.666667a237.653333 237.653333 0 0 1 237.824 237.781333 237.653333 237.653333 0 0 1-237.824 237.824z m0-381.738667A143.530667 143.530667 0 0 0 277.333333 280.448a143.530667 143.530667 0 0 0 143.914667 143.957333 143.530667 143.530667 0 0 0 143.957333-143.957333A143.530667 143.530667 0 0 0 421.248 136.533333zM934.4 981.333333a46.08 46.08 0 0 1-46.933333-46.933333v-134.528c0-92.330667-35.968-120.490667-64.128-132.992-23.466667-10.965333-32.853333-39.125333-21.930667-62.592 10.965333-23.466667 39.125333-32.853333 62.592-21.888 53.205333 25.045333 117.333333 84.48 117.333333 217.472V934.4c0 25.045333-21.888 46.933333-46.933333 46.933333z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M671.573333 504.192c-18.773333 0-35.968-10.965333-43.818666-29.738667-9.386667-23.466667 1.578667-51.626667 26.624-61.013333a142.549333 142.549333 0 0 0 90.709333-132.992 142.549333 142.549333 0 0 0-90.709333-132.949333c-23.466667-9.386667-36.010667-37.546667-26.624-61.013334 9.386667-23.466667 37.546667-36.010667 61.013333-26.624 90.752 36.010667 148.650667 122.026667 148.650667 220.586667s-57.898667 183.04-148.650667 220.586667c-6.229333 1.578667-10.922667 3.157333-17.194667 3.157333z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconUsersWhite.defaultProps = {
  size: 26,
};

IconUsersWhite = React.memo ? React.memo(IconUsersWhite) : IconUsersWhite;

export default IconUsersWhite;
