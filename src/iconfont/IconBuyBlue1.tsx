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

let IconBuyBlue1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M918.196594 327.407623a87.013876 87.013876 0 0 0-88.665744-85.385274h-71.96094a249.245897 249.245897 0 0 0-498.282402 0H194.399352a86.99061 86.99061 0 0 0-88.595946 85.385274L46.685155 938.83133A86.99061 86.99061 0 0 0 135.327633 1023.983947h753.298203a86.99061 86.99061 0 0 0 88.642478-85.152617l-59.094986-611.423707z m-516.964793 540.230536l59.048454-170.537891h-88.619212l251.130422-241.731062-73.868732 184.729993h103.416224l-251.107156 227.53896z m-97.948775-625.61581a205.227112 205.227112 0 0 1 410.268099 0H303.283026z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBuyBlue1.defaultProps = {
  size: 18,
};

IconBuyBlue1 = React.memo ? React.memo(IconBuyBlue1) : IconBuyBlue1;

export default IconBuyBlue1;
