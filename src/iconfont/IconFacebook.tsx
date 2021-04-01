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

let IconFacebook: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.991229 3.087349c-280.948762 0-508.710921 227.762158-508.710921 508.710921s227.762158 508.710921 508.710921 508.710921c280.966304 0 508.710921-227.762158 508.710921-508.710921s-227.744617-508.710921-508.710921-508.710921z m126.160308 313.208051h-73.517498c-29.592942 0-38.381362 6.578158-38.381362 36.188643v93.181807h104.162946v95.953405h-104.162946v268.03803h-98.146125v-268.03803h-87.147443v-95.953405h87.147443v-133.755889c0-22.190321 9.805842-42.714176 29.417525-61.571563 18.08555-17.418964 45.380522-26.137216 81.832291-26.137216h98.795169v92.094218z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFacebook.defaultProps = {
  size: 22,
};

IconFacebook = React.memo ? React.memo(IconFacebook) : IconFacebook;

export default IconFacebook;
