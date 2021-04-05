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

let IconPointinterestdeletenor: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M837.818182 325.818182c-12.101818 1.210182-29.835636 17.361455-46.545455 46.545454v558.545455c16.709818-0.418909-0.372364 15.173818 0 0H232.727273c-5.12 15.173818-22.202182-0.977455 0 0V372.363636c-22.202182-30.347636-37.515636-46.545455-46.545455-46.545454-31.883636 0-46.545455 16.197818-46.545454 46.545454v558.545455c0 40.354909 47.662545 93.090909 93.090909 93.090909h558.545454c39.936 0 93.090909-52.736 93.090909-93.090909V372.363636c0.605091-28.578909-17.733818-45.335273-46.545454-46.545454z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M465.454545 744.727273V372.363636c0-30.72-20.061091-46.545455-46.545454-46.545454s-46.545455 15.825455-46.545455 46.545454v372.363637c0 30.72 20.061091 46.545455 46.545455 46.545454s46.545455-15.266909 46.545454-46.545454zM651.636364 744.727273V372.363636c0-30.72-22.155636-46.545455-46.545455-46.545454s-46.545455 15.825455-46.545454 46.545454v372.363637c0 30.72 22.155636 46.545455 46.545454 46.545454s46.545455-15.266909 46.545455-46.545454zM698.181818 0c60.881455 0 110.592 42.356364 93.090909 93.090909v93.090909h186.181818c30.161455-18.618182 47.150545-4.654545 46.545455 0 0 32.628364-16.384 46.545455-46.545455 46.545455H46.545455c-30.161455 0-46.545455-13.358545-46.545455-46.545455 0-4.142545 16.384-18.059636 46.545455 0h186.181818V93.090909c-15.685818-50.734545 34.024727-93.090909 93.090909-93.090909z m0 46.545455H325.818182c-26.158545 0-46.545455 13.591273-46.545455 46.545454v46.545455h465.454546V93.090909c0-33.466182-14.010182-46.545455-46.545455-46.545454z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconPointinterestdeletenor.defaultProps = {
  size: 26,
};

IconPointinterestdeletenor = React.memo ? React.memo(IconPointinterestdeletenor) : IconPointinterestdeletenor;

export default IconPointinterestdeletenor;
