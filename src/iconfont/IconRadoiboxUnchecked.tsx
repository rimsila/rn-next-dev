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

let IconRadoiboxUnchecked: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0c282.763636 0 512 229.236364 512 512s-229.236364 512-512 512S0 794.763636 0 512 229.236364 0 512 0z m0 69.818182C267.799273 69.818182 69.818182 267.799273 69.818182 512s197.981091 442.181818 442.181818 442.181818 442.181818-197.981091 442.181818-442.181818S756.200727 69.818182 512 69.818182z m0 139.636363c167.098182 0 302.545455 135.447273 302.545455 302.545455s-135.447273 302.545455-302.545455 302.545455S209.454545 679.098182 209.454545 512 344.901818 209.454545 512 209.454545z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRadoiboxUnchecked.defaultProps = {
  size: 22,
};

IconRadoiboxUnchecked = React.memo ? React.memo(IconRadoiboxUnchecked) : IconRadoiboxUnchecked;

export default IconRadoiboxUnchecked;
