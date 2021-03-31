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

let IconSiGlyphCustomerSupport: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1088 1024" width={size} height={size} {...rest}>
      <Path
        d="M576.32 774.016c-92.288 0-186.048-54.784-240.768-127.296-262.528 0-270.464 375.04-270.464 375.04h1022.4s20.608-376.704-274.624-376.704c-54.656 73.408-144.256 128.96-236.544 128.96zM796.224 324.416c0 107.904-98.496 314.24-220.096 314.24-121.408 0-219.968-206.4-219.968-314.24s98.496-195.392 219.968-195.392c121.6 0.064 220.096 87.616 220.096 195.392z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M894.4 231.296c0-20.224-28.16-36.544-63.104-36.672V152.96c0-6.208 2.368-151.552-254.4-151.552-256.64 0-254.272 145.344-254.272 151.552v43.136c-0.64 0-1.152-0.192-1.728-0.192-34.752 0-62.72 16.064-62.72 35.968v176.256c0 19.776 28.032 35.904 62.72 35.904s62.848-16.128 62.848-35.904V231.872c0-2.752-1.728-5.248-2.752-7.808V176c0-4.416-18.432-114.112 195.904-114.112 214.4 0 192.128 109.696 192.128 114.112v50.624c-0.384 1.6-1.6 3.008-1.6 4.672v180.288c0 20.288 28.352 36.736 63.488 36.736 0.768 0 1.344-0.256 2.112-0.256V513.92h-62.976V576h124.992l-0.64-344.704z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconSiGlyphCustomerSupport.defaultProps = {
  size: 18,
};

IconSiGlyphCustomerSupport = React.memo ? React.memo(IconSiGlyphCustomerSupport) : IconSiGlyphCustomerSupport;

export default IconSiGlyphCustomerSupport;
