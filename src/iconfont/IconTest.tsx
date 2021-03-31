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

let IconTest: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1219 1024" width={size} height={size} {...rest}>
      <Path
        d="M814.32381 1024H121.904762a121.904762 121.904762 0 0 1-121.904762-121.904762V121.904762a121.904762 121.904762 0 0 1 121.904762-121.904762h975.238095a121.904762 121.904762 0 0 1 121.904762 121.904762v733.379048a24.380952 24.380952 0 0 1-13.897143 22.186666 24.380952 24.380952 0 0 1-25.843809-3.169524L812.129524 575.146667 627.078095 780.190476l204.556191 202.361905a24.380952 24.380952 0 0 1-17.310476 41.447619zM48.761905 659.504762V902.095238a73.142857 73.142857 0 0 0 73.142857 73.142857h633.904762L241.371429 466.651429z m760.685714-142.384762a24.380952 24.380952 0 0 1 15.36 5.36381L1170.285714 804.571429V121.904762a73.142857 73.142857 0 0 0-73.142857-73.142857H121.904762a73.142857 73.142857 0 0 0-73.142857 73.142857v468.601905L224.060952 414.47619a24.380952 24.380952 0 0 1 34.377143 0l334.019048 331.093334 198.948571-219.428572a24.380952 24.380952 0 0 1 18.041905-9.020952z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTest.defaultProps = {
  size: 18,
};

IconTest = React.memo ? React.memo(IconTest) : IconTest;

export default IconTest;
