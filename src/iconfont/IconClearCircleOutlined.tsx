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

let IconClearCircleOutlined: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 85.333333a426.666667 426.666667 0 1 0 426.666667 426.666667A426.666667 426.666667 0 0 0 512 85.333333z m0 768a341.333333 341.333333 0 1 1 341.333333-341.333333 341.333333 341.333333 0 0 1-341.333333 341.333333z m131.84-450.56l-22.613333-22.613333a20.48 20.48 0 0 0-29.866667 0L512 459.093333l-79.36-78.933333a20.48 20.48 0 0 0-29.866667 0l-22.613333 22.613333a20.48 20.48 0 0 0 0 29.866667L459.093333 512l-78.933333 79.36a20.48 20.48 0 0 0 0 29.866667l22.613333 22.613333a20.48 20.48 0 0 0 29.866667 0L512 564.906667l79.36 78.933333a20.48 20.48 0 0 0 29.866667 0l22.613333-22.613333a20.48 20.48 0 0 0 0-29.866667L564.906667 512l78.933333-79.36a20.48 20.48 0 0 0 0-29.866667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconClearCircleOutlined.defaultProps = {
  size: 26,
};

IconClearCircleOutlined = React.memo ? React.memo(IconClearCircleOutlined) : IconClearCircleOutlined;

export default IconClearCircleOutlined;
