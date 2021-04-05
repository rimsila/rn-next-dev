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

let IconEdit: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0C229.234215 0 0 229.226338 0 512c0 282.765785 229.234215 512 512 512 282.773662 0 512-229.234215 512-512 0-282.773662-229.226338-512-512-512zM191.361969 824.761108l72.176246-203.004062 130.827816 130.827816-203.004062 72.176246z m229.793477-98.965662L290.327631 594.967631l334.855877-334.855877 130.827815 130.827815-334.855877 334.855877z m396.209231-396.209231l-34.563939 34.563939L651.972923 233.322338l34.563939-34.563938a52.145231 52.145231 0 0 1 73.735876 0l57.091939 57.091938a52.145231 52.145231 0 0 1 0 73.735877z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconEdit.defaultProps = {
  size: 26,
};

IconEdit = React.memo ? React.memo(IconEdit) : IconEdit;

export default IconEdit;
