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

let IconCoffee: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M70.685456 436.463038v258.526486a258.475373 258.475373 0 0 0 258.475373 258.526486h187.94027a258.475373 258.475373 0 0 0 258.475373-258.526486V436.514151L70.685456 436.463038zM607.621148 9.930116a35.267551 35.267551 0 0 1 4.395666 49.681246c-32.814157 39.100981-40.072116 65.78165-29.951863 83.670988 3.168968 5.571251 30.309649 48.454549 36.545361 61.692659 14.107021 29.90075 15.947067 58.881477 3.782318 93.126781a236.241482 236.241482 0 0 1-38.385408 67.877258h198.367199c22.336116 0.817798 38.538745 6.491274 48.556773 17.122652 5.622363 5.826813 9.60913 13.186997 12.113638 22.080554l3.066743-0.102225a176.235532 176.235532 0 0 1 0 352.522177l-5.929037-0.20445A329.061588 329.061588 0 0 1 517.152212 1024H329.109716a328.959364 328.959364 0 0 1-328.959363-329.010476V427.876156c-1.022248-22.131666 3.168968-37.823171 12.471424-47.023402 9.353568-9.200231 23.153914-14.158133 41.349926-14.822594h150.934898a35.216439 35.216439 0 0 1 7.360184-8.689107C243.445345 330.915946 263.788078 303.315254 274.010556 274.538976c5.826813-16.355966 5.162352-26.067321-1.124472-39.407655-3.986767-8.484657-29.082952-48.147875-34.091967-57.041431-27.54958-48.658998-12.369199-104.473732 37.209823-163.661884a35.267551 35.267551 0 1 1 54.0258 45.285581c-32.814157 39.100981-40.021004 65.78165-29.900751 83.670988 3.117856 5.571251 30.309649 48.454549 36.545362 61.692659 14.055908 29.90075 15.947067 58.881477 3.731204 93.12678a236.241482 236.241482 0 0 1-38.334295 67.877259h43.854434a35.216439 35.216439 0 0 1 7.360184-8.689107C384.413326 330.915946 404.756059 303.315254 414.978537 274.538976c5.826813-16.355966 5.213464-26.067321-1.124472-39.407655-3.986767-8.484657-29.082952-48.147875-34.091967-57.041431-27.54958-48.658998-12.369199-104.473732 37.260935-163.661884a35.267551 35.267551 0 1 1 53.974687 45.285581c-32.763044 39.100981-40.021004 65.78165-29.90075 83.670988 3.168968 5.571251 30.309649 48.454549 36.545362 61.692659 14.107021 29.90075 15.947067 58.881477 3.731204 93.12678a236.241482 236.241482 0 0 1-38.334295 67.877259h43.905546a35.216439 35.216439 0 0 1 7.309072-8.689107c31.17856-26.47622 51.47018-54.076912 61.692659-82.85319 5.826813-16.355966 5.213464-26.067321-1.124472-39.407655-3.986767-8.484657-29.031839-48.147875-34.091967-57.041431-27.498468-48.658998-12.369199-104.473732 37.260935-163.661884a35.267551 35.267551 0 0 1 49.630134-4.395665z m238.439315 465.633903v211.503084a105.751542 105.751542 0 0 0 0-211.503084z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCoffee.defaultProps = {
  size: 26,
};

IconCoffee = React.memo ? React.memo(IconCoffee) : IconCoffee;

export default IconCoffee;
