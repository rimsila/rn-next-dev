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

let IconHouseAlt: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M804.571429 457.142857H219.428571v365.714286a36.571429 36.571429 0 0 0 36.571429 36.571428h512a36.571429 36.571429 0 0 0 36.571429-36.571428V457.142857z m73.142857 0v402.285714a73.142857 73.142857 0 0 1-73.142857 73.142858H219.428571a73.142857 73.142857 0 0 1-73.142857-73.142858V457.142857H75.154286a36.571429 36.571429 0 0 1-21.632-66.066286l437.211428-320.621714a36.571429 36.571429 0 0 1 42.788572-0.329143L768 236.525714V201.142857a36.571429 36.571429 0 0 1 36.571429-36.571428h36.571428a36.571429 36.571429 0 0 1 36.571429 36.571428v113.261714l107.593143 76.342858A36.571429 36.571429 0 0 1 964.132571 457.142857H877.714286z m-256 73.142857h146.285714v292.571429h-146.285714V530.285714z m182.857143-146.285714v73.142857H219.428571v-73.142857L491.428571 160.64a36.571429 36.571429 0 0 1 42.788572-0.329143L804.571429 384z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconHouseAlt.defaultProps = {
  size: 26,
};

IconHouseAlt = React.memo ? React.memo(IconHouseAlt) : IconHouseAlt;

export default IconHouseAlt;
