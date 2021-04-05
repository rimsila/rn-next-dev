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

let IconLogOut: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M652.8 840.533333c-12.501333 0-23.466667-4.693333-32.853333-14.08-18.773333-18.773333-18.773333-48.512 0-65.706666L868.693333 512l-248.746666-248.746667c-18.773333-18.773333-18.773333-48.512 0-65.706666 18.773333-18.773333 48.512-18.773333 65.706666 0l281.6 281.6c18.773333 18.773333 18.773333 48.512 0 65.706666l-281.6 281.6c-7.808 9.386667-20.352 14.08-32.853333 14.08zM89.6 42.666667h397.354667c26.624 0 46.933333 20.352 46.933333 46.933333 0 26.581333-20.309333 46.933333-46.933333 46.933333H136.533333v750.933334h350.421334c26.624 0 46.933333 20.352 46.933333 46.933333 0 26.581333-20.309333 46.933333-46.933333 46.933333H89.6A46.08 46.08 0 0 1 42.666667 934.4V89.6C42.666667 63.018667 63.018667 42.666667 89.6 42.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M884.352 558.933333H328.96a46.08 46.08 0 0 1-46.933333-46.933333c0-26.581333 20.352-46.933333 46.933333-46.933333h555.392c26.581333 0 46.933333 20.352 46.933333 46.933333 0 26.581333-20.352 46.933333-46.933333 46.933333z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconLogOut.defaultProps = {
  size: 26,
};

IconLogOut = React.memo ? React.memo(IconLogOut) : IconLogOut;

export default IconLogOut;
