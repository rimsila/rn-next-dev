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

let IconDeleteCenter: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M736 480h-448c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h448c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"
        fill={getIconColor(color, 0, '#212121')}
      />
      <Path
        d="M512 32C247.466667 32 32 247.466667 32 512S247.466667 992 512 992 992 776.533333 992 512 776.533333 32 512 32z m0 896C281.6 928 96 742.4 96 512S281.6 96 512 96 928 281.6 928 512 742.4 928 512 928z"
        fill={getIconColor(color, 1, '#212121')}
      />
    </Svg>
  );
};

IconDeleteCenter.defaultProps = {
  size: 26,
};

IconDeleteCenter = React.memo ? React.memo(IconDeleteCenter) : IconDeleteCenter;

export default IconDeleteCenter;
