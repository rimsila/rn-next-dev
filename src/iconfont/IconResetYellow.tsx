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

let IconResetYellow: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M921.85088 615.60832a31.72864 31.72864 0 0 1-1.1776 8.8832c-60.68224 223.77472-291.2768 355.9936-515.05152 295.31648a419.80928 419.80928 0 0 1-295.31648-295.31648 34.304 34.304 0 1 1 66.16576-17.12128c50.62656 187.24864 243.46112 298.00448 430.70976 247.37792a351.21664 351.21664 0 0 0 247.37792-247.37792 34.304 34.304 0 0 1 67.34848 8.23296h-0.05632z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M276.64384 594.69824a34.29376 34.29376 0 0 1-47.80032 31.5136l-91.6992-39.21408-39.27552 91.87328a34.29888 34.29888 0 0 1-63.08352-26.89536l52.66432-123.50976a34.8928 34.8928 0 0 1 45.0816-18.36032l123.2128 52.60288a34.304 34.304 0 0 1 20.91008 31.872v0.11776z m632.12032-174.98624a34.29376 34.29376 0 0 1-67.52768 7.34208c-45.32224-188.60544-234.95168-304.75264-423.55712-259.44064A351.21664 351.21664 0 0 0 163.32288 408.2176a34.29888 34.29888 0 0 1-65.63328-19.72736C164.52096 166.48192 398.68416 40.67328 620.6976 107.50976a419.80416 419.80416 0 0 1 287.24224 304.14336c0.52736 2.65728 0.80384 5.3504 0.82432 8.05888z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M991.93344 356.56192a34.24256 34.24256 0 0 1-5.15072 17.12128L916.52096 487.8336a34.28864 34.28864 0 0 1-47.39072 11.32032l-114.1504-70.26176a34.304 34.304 0 1 1 35.54304-58.40896l85.71392 51.41504 51.42016-85.65248a34.29888 34.29888 0 0 1 63.73888 20.37248l0.5376-0.05632z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconResetYellow.defaultProps = {
  size: 26,
};

IconResetYellow = React.memo ? React.memo(IconResetYellow) : IconResetYellow;

export default IconResetYellow;
