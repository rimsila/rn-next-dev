/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconDollar from './IconDollar';
import IconMerchantBlue from './IconMerchantBlue';
import IconCar from './IconCar';
import IconDate from './IconDate';
import IconHouseAlt from './IconHouseAlt';
import IconSiGlyphCustomerSupport from './IconSiGlyphCustomerSupport';

export type IconNames = 'icon-dollar' | 'icon-merchant-blue' | 'icon-car' | 'icon-date' | 'icon-house_alt' | 'icon-si-glyph-customer-support';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-dollar':
      return <IconDollar key="1" {...rest} />;
    case 'icon-merchant-blue':
      return <IconMerchantBlue key="2" {...rest} />;
    case 'icon-car':
      return <IconCar key="3" {...rest} />;
    case 'icon-date':
      return <IconDate key="4" {...rest} />;
    case 'icon-house_alt':
      return <IconHouseAlt key="5" {...rest} />;
    case 'icon-si-glyph-customer-support':
      return <IconSiGlyphCustomerSupport key="6" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
