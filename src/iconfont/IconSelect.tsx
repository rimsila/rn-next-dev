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

let IconSelect: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M562.834782 698.477089c-10.392698 10.389628-27.16878 10.457166-37.47859 0.148379L186.626491 359.894743c-10.308787-10.308787-10.241248-27.084868 0.151449-37.474496l0 0c10.388605-10.392698 27.169803-10.460236 37.474496-0.151449l338.734818 338.729701C573.291948 671.308309 573.22441 688.084391 562.834782 698.477089L562.834782 698.477089 562.834782 698.477089zM562.834782 698.477089"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M901.685233 323.271638c10.392698 10.389628 10.461259 27.169803 0.152473 37.474496L563.106981 699.476859c-10.308787 10.308787-27.085892 10.241248-37.47859-0.148379l0 0c-10.388605-10.392698-10.457166-27.16878-0.148379-37.47859l338.730725-338.729701C874.519524 312.815495 891.296629 312.87894 901.685233 323.271638L901.685233 323.271638 901.685233 323.271638zM901.685233 323.271638"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconSelect.defaultProps = {
  size: 26,
};

IconSelect = React.memo ? React.memo(IconSelect) : IconSelect;

export default IconSelect;
