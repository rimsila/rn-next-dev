/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconCar from './IconCar';
import IconCar1 from './IconCar1';
import IconRadioUncheckedBO from './IconRadioUncheckedBO';
import IconRadoiboxUnchecked from './IconRadoiboxUnchecked';
import IconEdit from './IconEdit';
import IconEdit3 from './IconEdit3';
import IconEditSquare from './IconEditSquare';
import IconEdit2 from './IconEdit2';
import IconSiGlyphCustomerSupport from './IconSiGlyphCustomerSupport';
import IconCaidan07 from './IconCaidan07';
import IconUser from './IconUser';
import IconDaka11 from './IconDaka11';
import IconTest from './IconTest';
import IconEdit1 from './IconEdit1';
import IconAddGreen from './IconAddGreen';
import IconNew from './IconNew';
import IconAddBlueCopy from './IconAddBlueCopy';
import IconBuyBlue1 from './IconBuyBlue1';
import IconMerchantBlue from './IconMerchantBlue';
import IconBuyBlackCopy from './IconBuyBlackCopy';
import IconAllBlue from './IconAllBlue';
import IconSaveBlue from './IconSaveBlue';
import IconSave from './IconSave';
import IconBackPink from './IconBackPink';
import IconBackPinkCircle from './IconBackPinkCircle';
import IconBack2 from './IconBack2';
import IconBackPinkCircle1 from './IconBackPinkCircle1';
import IconBack from './IconBack';
import IconBackPink1 from './IconBackPink1';
import IconResetYellow from './IconResetYellow';
import IconReset from './IconReset';
import IconClose from './IconClose';
import IconClearCircle from './IconClearCircle';
import IconClearCircleOutlined from './IconClearCircleOutlined';
import IconDetail from './IconDetail';
import IconEyeBlue from './IconEyeBlue';
import IconLook from './IconLook';
import IconViewBlue from './IconViewBlue';
import IconViewBue from './IconViewBue';
import IconLookBlue from './IconLookBlue';
import IconViewPrimary from './IconViewPrimary';
import IconDelete from './IconDelete';
import IconAdd from './IconAdd';
import IconPointinterestdeletenor from './IconPointinterestdeletenor';
import IconActivityproduct from './IconActivityproduct';
import IconSaleWhite from './IconSaleWhite';
import IconSettingWhite from './IconSettingWhite';
import IconSupplierWhite from './IconSupplierWhite';
import IconHrWhite from './IconHrWhite';
import IconNextReportWhite from './IconNextReportWhite';
import IconUsersWhite from './IconUsersWhite';
import IconGirlfriend from './IconGirlfriend';
import IconFacebook1 from './IconFacebook1';
import IconFacebook from './IconFacebook';

export type IconNames = 'icon-car' | 'icon-car1' | 'icon-radio-unchecked-b-o' | 'icon-radoibox_unchecked' | 'icon-edit' | 'icon-edit3' | 'icon-EditSquare' | 'icon-edit2' | 'icon-si-glyph-customer-support' | 'icon-caidan07' | 'icon-user' | 'icon-daka-11' | 'icon-test' | 'icon-edit1' | 'icon-add-green' | 'icon-new' | 'icon-add-blue-copy' | 'icon-buy-blue1' | 'icon-merchant-blue' | 'icon-buy-black-copy' | 'icon-all-blue' | 'icon-save-blue' | 'icon-save' | 'icon-back-pink' | 'icon-back-pink-circle' | 'icon-back2' | 'icon-back-pink-circle1' | 'icon-Back' | 'icon-back-pink1' | 'icon-reset-yellow' | 'icon-reset' | 'icon-close' | 'icon-clear_circle' | 'icon-clear_circle_outlined' | 'icon-detail' | 'icon-eye-blue' | 'icon-look' | 'icon-view-blue' | 'icon-view-bue' | 'icon-look-blue' | 'icon-view-primary' | 'icon-delete' | 'icon-Add' | 'icon-Pointinterestdeletenor' | 'icon-Activityproduct' | 'icon-sale-white' | 'icon-setting-white' | 'icon-supplier-white' | 'icon-hr-white' | 'icon-next-report-white' | 'icon-users-white' | 'icon-girlfriend' | 'icon-facebook1' | 'icon-facebook';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-car':
      return <IconCar key="1" {...rest} />;
    case 'icon-car1':
      return <IconCar1 key="2" {...rest} />;
    case 'icon-radio-unchecked-b-o':
      return <IconRadioUncheckedBO key="3" {...rest} />;
    case 'icon-radoibox_unchecked':
      return <IconRadoiboxUnchecked key="4" {...rest} />;
    case 'icon-edit':
      return <IconEdit key="5" {...rest} />;
    case 'icon-edit3':
      return <IconEdit3 key="6" {...rest} />;
    case 'icon-EditSquare':
      return <IconEditSquare key="7" {...rest} />;
    case 'icon-edit2':
      return <IconEdit2 key="8" {...rest} />;
    case 'icon-si-glyph-customer-support':
      return <IconSiGlyphCustomerSupport key="9" {...rest} />;
    case 'icon-caidan07':
      return <IconCaidan07 key="10" {...rest} />;
    case 'icon-user':
      return <IconUser key="11" {...rest} />;
    case 'icon-daka-11':
      return <IconDaka11 key="12" {...rest} />;
    case 'icon-test':
      return <IconTest key="13" {...rest} />;
    case 'icon-edit1':
      return <IconEdit1 key="14" {...rest} />;
    case 'icon-add-green':
      return <IconAddGreen key="15" {...rest} />;
    case 'icon-new':
      return <IconNew key="16" {...rest} />;
    case 'icon-add-blue-copy':
      return <IconAddBlueCopy key="17" {...rest} />;
    case 'icon-buy-blue1':
      return <IconBuyBlue1 key="18" {...rest} />;
    case 'icon-merchant-blue':
      return <IconMerchantBlue key="19" {...rest} />;
    case 'icon-buy-black-copy':
      return <IconBuyBlackCopy key="20" {...rest} />;
    case 'icon-all-blue':
      return <IconAllBlue key="21" {...rest} />;
    case 'icon-save-blue':
      return <IconSaveBlue key="22" {...rest} />;
    case 'icon-save':
      return <IconSave key="23" {...rest} />;
    case 'icon-back-pink':
      return <IconBackPink key="24" {...rest} />;
    case 'icon-back-pink-circle':
      return <IconBackPinkCircle key="25" {...rest} />;
    case 'icon-back2':
      return <IconBack2 key="26" {...rest} />;
    case 'icon-back-pink-circle1':
      return <IconBackPinkCircle1 key="27" {...rest} />;
    case 'icon-Back':
      return <IconBack key="28" {...rest} />;
    case 'icon-back-pink1':
      return <IconBackPink1 key="29" {...rest} />;
    case 'icon-reset-yellow':
      return <IconResetYellow key="30" {...rest} />;
    case 'icon-reset':
      return <IconReset key="31" {...rest} />;
    case 'icon-close':
      return <IconClose key="32" {...rest} />;
    case 'icon-clear_circle':
      return <IconClearCircle key="33" {...rest} />;
    case 'icon-clear_circle_outlined':
      return <IconClearCircleOutlined key="34" {...rest} />;
    case 'icon-detail':
      return <IconDetail key="35" {...rest} />;
    case 'icon-eye-blue':
      return <IconEyeBlue key="36" {...rest} />;
    case 'icon-look':
      return <IconLook key="37" {...rest} />;
    case 'icon-view-blue':
      return <IconViewBlue key="38" {...rest} />;
    case 'icon-view-bue':
      return <IconViewBue key="39" {...rest} />;
    case 'icon-look-blue':
      return <IconLookBlue key="40" {...rest} />;
    case 'icon-view-primary':
      return <IconViewPrimary key="41" {...rest} />;
    case 'icon-delete':
      return <IconDelete key="42" {...rest} />;
    case 'icon-Add':
      return <IconAdd key="43" {...rest} />;
    case 'icon-Pointinterestdeletenor':
      return <IconPointinterestdeletenor key="44" {...rest} />;
    case 'icon-Activityproduct':
      return <IconActivityproduct key="45" {...rest} />;
    case 'icon-sale-white':
      return <IconSaleWhite key="46" {...rest} />;
    case 'icon-setting-white':
      return <IconSettingWhite key="47" {...rest} />;
    case 'icon-supplier-white':
      return <IconSupplierWhite key="48" {...rest} />;
    case 'icon-hr-white':
      return <IconHrWhite key="49" {...rest} />;
    case 'icon-next-report-white':
      return <IconNextReportWhite key="50" {...rest} />;
    case 'icon-users-white':
      return <IconUsersWhite key="51" {...rest} />;
    case 'icon-girlfriend':
      return <IconGirlfriend key="52" {...rest} />;
    case 'icon-facebook1':
      return <IconFacebook1 key="53" {...rest} />;
    case 'icon-facebook':
      return <IconFacebook key="54" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
