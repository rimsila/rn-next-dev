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

let IconSaveBlue: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M666.208 511.904h-305.728c-12.544 0-19.552 6.976-19.552 19.424a146944 146944 0 0 0 0 167.968c0 2.016 0.064 4.096 0.512 6.08 2.08 8.864 8.736 13.472 19.296 13.504h152.64l152.64-0.032c12.96 0 19.776-6.816 19.776-19.616v-167.52c0.032-12.864-6.848-19.808-19.584-19.808zM395.744 460.448h217.792c13.952 0 20.672-6.688 20.672-20.576v-114.144c0-13.984-6.56-20.576-20.608-20.576H395.84c-13.76 0-20.48 6.656-20.48 20.32v114.56c-0.032 13.664 6.752 20.416 20.384 20.416z m152.576-137.664h50.624v119.84h-50.624v-119.84z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 0C229.216 0 0 229.216 0 512s229.216 512 512 512 512-229.216 512-512S794.784 0 512 0z m225.376 689.632c-0.288 0.8-0.672 1.6-0.832 2.432-4.224 22.592-17.6 36.576-39.68 42.528-1.92 0.512-3.904 0.96-5.856 1.408H335.744c-0.8-0.288-1.6-0.672-2.432-0.832-20.576-3.68-34.24-15.456-41.216-35.072-1.184-3.36-1.824-6.976-2.72-10.464V334.368c0.288-0.832 0.672-1.6 0.832-2.464 4.224-22.592 17.632-36.576 39.68-42.496 1.952-0.512 3.904-0.928 5.856-1.408h305.376c12.704 2.816 22.688 10.4 31.744 19.072 15.04 14.432 29.792 29.12 44.256 44.128 9.088 9.44 17.28 19.712 20.224 33.056v305.376z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconSaveBlue.defaultProps = {
  size: 18,
};

IconSaveBlue = React.memo ? React.memo(IconSaveBlue) : IconSaveBlue;

export default IconSaveBlue;
