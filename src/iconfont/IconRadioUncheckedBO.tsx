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

let IconRadioUncheckedBO: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C264.576 64 64 264.576 64 512c0 247.424 200.576 448 448 448s448-200.576 448-448C960 264.576 759.424 64 512 64zM512 896c-212.096 0-384-171.904-384-384s171.904-384 384-384 384 171.904 384 384S724.096 896 512 896z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRadioUncheckedBO.defaultProps = {
  size: 22,
};

IconRadioUncheckedBO = React.memo ? React.memo(IconRadioUncheckedBO) : IconRadioUncheckedBO;

export default IconRadioUncheckedBO;
