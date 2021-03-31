import Container from 'modules/auth/components/Container';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Easing } from 'react-native-reanimated';
import { useTransition } from 'react-native-redash';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import LoginForm from './LoginForm';
import Logo from './Logo';
import ThirdPartyLogin from './ThirdPartyLogin';
import LoginBtnGroup from './LoginBtnGroup';

export default function SignIn() {
  const [showLoginForm, setLoginForm] = useState<number>(0);
  const [activeKey, setActiveKey] = useState('sms');
  const isSmsLogin = activeKey === 'sms';

  const showAnimation = useTransition(showLoginForm, { duration: 600, easing: Easing.inOut(Easing.ease) });
  /**
   * The animation effect is triggered after the button is clicked:
   * 1. The logo and welcome message are moved to the upper left corner
   * 2. The login button group fades away
   * 3. The form slides from the bottom into the middle of the page
   */
  const handlePress = (activeKey: string) => {
    setLoginForm(1);
    setActiveKey(activeKey);
  };

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <KeyboardAwareScrollView enableOnAndroid>
          {/* logo and welcome message */}
          <Logo {...{ showAnimation }} />
          {/* Login button group */}
          <LoginBtnGroup {...{ showAnimation }} onPress={handlePress} />
          {/* login form */}
          <LoginForm {...{ showLoginForm, showAnimation, isSmsLogin, changeTab: setActiveKey }} />
        </KeyboardAwareScrollView>
      </View>
      {/* Third party login at the bottom */}
      {/* <ThirdPartyLogin {...{ showAnimation }} onPress={setLoginForm} /> */}
    </Container>
  );
}
