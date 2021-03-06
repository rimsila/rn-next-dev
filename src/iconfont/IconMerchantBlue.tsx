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

let IconMerchantBlue: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1297 1024" width={size} height={size} {...rest}>
      <Path
        d="M263.918933 136.533333L127.522133 375.1936a68.266667 68.266667 0 0 1-118.510933-67.720533l155.989333-273.066667A68.266667 68.266667 0 0 1 224.324267 0h780.151466a68.266667 68.266667 0 0 1 59.323734 34.4064l155.989333 273.066667a68.266667 68.266667 0 1 1-118.510933 67.720533L964.881067 136.533333H263.918933z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M2.2528 347.818667a68.266667 68.266667 0 0 1 136.533333 0c0 33.518933 43.895467 68.266667 103.765334 68.266666 59.528533 0 102.4-34.338133 102.4-68.266666a68.266667 68.266667 0 1 1 136.533333 0c0 116.872533-109.909333 204.8-238.933333 204.8-129.160533 0-240.298667-87.927467-240.298667-204.8z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M347.7504 354.577067a68.266667 68.266667 0 1 1 136.533333 0c0 27.170133 62.122667 68.266667 128 68.266666 67.242667 0 133.802667-42.461867 133.802667-68.266666a68.266667 68.266667 0 1 1 136.533333 0c0 117.418667-137.079467 204.8-270.336 204.8-132.369067 0-264.533333-87.586133-264.533333-204.8z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M754.141867 352.597333a68.266667 68.266667 0 0 1 136.533333 0c0 33.928533 42.939733 68.266667 102.4 68.266667s102.4-34.338133 102.4-68.266667a68.266667 68.266667 0 0 1 136.533333 0c0 116.872533-109.909333 204.8-238.933333 204.8s-238.933333-87.927467-238.933333-204.8z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M1024 614.4a68.266667 68.266667 0 0 1 136.533333 0v273.066667a136.533333 136.533333 0 0 1-136.533333 136.533333H204.8a136.533333 136.533333 0 0 1-136.533333-136.533333V614.4a68.266667 68.266667 0 1 1 136.533333 0v273.066667h819.2V614.4z"
        fill={getIconColor(color, 4, '#333333')}
      />
    </Svg>
  );
};

IconMerchantBlue.defaultProps = {
  size: 26,
};

IconMerchantBlue = React.memo ? React.memo(IconMerchantBlue) : IconMerchantBlue;

export default IconMerchantBlue;
