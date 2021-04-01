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

let IconBackPinkCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.49 64.14c-247.35 0-447.87 200.48-447.87 447.8 0 77.85 19.88 151.05 54.83 214.83 4.83 17.1 20.53 29.63 39.17 29.63 22.49 0 40.71-18.22 40.71-40.7l-0.37-3.78c0-17.05-10.49-31.64-25.36-37.7l6.26-6.26c-22.45-47.5-35.02-100.59-35.02-156.62 0-202.68 164.33-366.99 367.05-366.99 202.71 0 367.05 164.31 367.05 366.99S713.61 878.33 510.89 878.33c-79.87 0-153.78-25.53-214.03-68.84-7.47-9.09-18.79-14.9-31.48-14.9-22.48 0-40.71 18.22-40.71 40.7l0.37 3.78c0 18.12 11.85 33.47 28.21 38.74 72.98 51.58 162.06 81.91 258.23 81.91 247.35 0 447.87-200.48 447.87-447.79 0-247.31-200.51-447.79-447.86-447.79z m-8.4 254.35c-15.9-15.9-41.68-15.9-57.57 0L289.19 475.5c-1.51 0.9-2.96 1.91-4.37 3.02-10.93 7.3-18.15 19.72-18.15 33.85 0 17.05 10.49 31.65 25.37 37.71L445.5 704.21c15.9 15.9 41.68 15.9 57.57 0 15.9-15.9 15.9-41.67 0-57.56l-93.26-93.67 306.25-0.28c22.48 0 40.71-18.22 40.71-40.71 0-22.48-18.23-40.7-40.71-40.7l-308.1 0.28 95.11-95.52c15.92-15.89 15.92-41.66 0.02-57.56z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBackPinkCircle.defaultProps = {
  size: 22,
};

IconBackPinkCircle = React.memo ? React.memo(IconBackPinkCircle) : IconBackPinkCircle;

export default IconBackPinkCircle;
