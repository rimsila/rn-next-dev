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

let IconEdit1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M849.042286 537.6a38.4 38.4 0 0 0-38.4 38.4c0 1.462857 0.146286 2.925714 0.219428 4.242286h-0.219428v366.957714H76.8V213.357714h401.042286a38.4 38.4 0 1 0 0-76.8H76.8c-42.422857 0-76.8 34.377143-76.8 76.8V947.2C0 989.622857 34.377143 1024 76.8 1024h733.842286c42.422857 0 76.8-34.377143 76.8-76.8V576a38.4 38.4 0 0 0-38.4-38.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M1001.325714 107.008L916.626286 22.381714a77.092571 77.092571 0 0 0-108.836572 0.219429L384.219429 446.317714a34.084571 34.084571 0 0 0-7.314286 10.825143L270.555429 708.242286a33.792 33.792 0 0 0 7.314285 37.449143c8.996571 9.216 23.332571 13.312 37.522286 7.314285l251.172571-106.276571a35.328 35.328 0 0 0 10.898286-7.314286l423.643429-423.643428c29.988571-29.988571 30.208-78.848 0.219428-108.763429zM528.822857 579.218286l-146.505143 62.098285 62.025143-146.578285 297.398857-297.398857 84.48 84.48L528.822857 579.218286z m417.865143-417.865143l-66.121143 66.194286-84.48-84.48 66.121143-66.194286 0.219429-0.146286 84.48 84.48-0.219429 0.146286z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconEdit1.defaultProps = {
  size: 26,
};

IconEdit1 = React.memo ? React.memo(IconEdit1) : IconEdit1;

export default IconEdit1;
