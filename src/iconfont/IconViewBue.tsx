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

let IconViewBue: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M804.864 10.24H219.136C103.936 10.24 10.24 103.936 10.24 219.136v585.216C10.24 920.064 103.936 1013.76 219.136 1013.76h585.216c115.2 0 208.896-93.696 208.896-208.896V219.136C1013.76 103.936 920.064 10.24 804.864 10.24z m125.44 794.624c0 69.12-56.32 125.44-125.44 125.44H219.136c-69.12 0-125.44-56.32-125.44-125.44V219.136c0-69.12 56.32-125.44 125.44-125.44h585.216c69.12 0 125.44 56.32 125.44 125.44v585.728z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 219.136c-202.752 0-376.32 217.088-376.32 285.184s173.568 285.184 376.32 285.184 376.32-217.088 376.32-285.184-173.568-285.184-376.32-285.184z m0 486.912c-152.064 0-277.504-161.792-291.84-201.216 14.336-39.424 139.776-201.216 291.84-201.216s277.504 161.792 291.84 201.216c-14.336 38.912-139.776 201.216-291.84 201.216z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M512 371.2c-73.216 0-133.12 59.904-133.12 133.12s59.904 133.12 133.12 133.12 133.12-59.904 133.12-133.12-59.904-133.12-133.12-133.12z m0 182.784c-27.136 0-49.664-22.016-49.664-49.664s22.016-49.664 49.664-49.664 49.664 22.016 49.664 49.664-22.528 49.664-49.664 49.664z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconViewBue.defaultProps = {
  size: 18,
};

IconViewBue = React.memo ? React.memo(IconViewBue) : IconViewBue;

export default IconViewBue;
