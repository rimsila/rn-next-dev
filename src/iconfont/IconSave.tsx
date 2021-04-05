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

let IconSave: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M648.533 193.422v182.045h-455.11v455.11h198.155a182.044 182.044 0 1 1 240.844 0h198.156v-508.45L701.872 193.423h-53.339z m-455.11 91.022H557.51v-91.022H193.422v91.022zM739.555 102.4L921.6 284.444v546.134c0 50.062-40.96 91.022-91.022 91.022H193.422a91.022 91.022 0 0 1-91.022-91.022V193.422a91.022 91.022 0 0 1 91.022-91.022h546.134zM512 603.022a91.022 91.022 0 1 0 0 182.045 91.022 91.022 0 0 0 0-182.045z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSave.defaultProps = {
  size: 26,
};

IconSave = React.memo ? React.memo(IconSave) : IconSave;

export default IconSave;
