import { useNavigation } from '@react-navigation/core';
import { useUpdateAtom } from 'jotai/utils';
import authService from 'modules/auth/authService';
import Form, { Field, useForm } from 'rc-field-form';
import { Store } from 'rc-field-form/es/interface';
import React from 'react';
import { Alert, StyleSheet, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';
import Animated, { Extrapolate, interpolate, SpringUtils } from 'react-native-reanimated';
import { mix, useSpringTransition } from 'react-native-redash';
import LoginTab from '../LoginTab';

const FormContent = ({ isSmsLogin }: { isSmsLogin: boolean }) => {
  const [form] = useForm();
  const navigation = useNavigation();
  const updateAuth = useUpdateAtom(authService.authAtom);

  const handleFinish = (values: Store) => {
    console.log('values', values);
    // navigation.navigate('ConfigPass');
    if (values?.phone === 'Admin' && values?.sms === 'Admin') {
      MMKV.set('token', JSON.stringify(values?.phone + values?.sms));
      updateAuth({ signedIn: true });
    } else {
      Alert.alert('Invalid', 'Please fill-in the correct form!', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
  };

  return (
    <Form component={false} form={form} onFinish={handleFinish}>
      {isSmsLogin ? (
        <>
          <Field name="phone" trigger="onChangeText">
            <TextInput
              placeholder="Admin"
              style={{
                borderWidth: 1,
                borderColor: '#e5e5e5',
                height: 48,
                paddingHorizontal: 10,
              }}
            />
          </Field>

          <Field name="sms" trigger="onChangeText">
            <TextInput
              placeholder="Admin"
              style={{
                borderWidth: 1,
                borderColor: '#e5e5e5',
                height: 48,
                paddingHorizontal: 10,
                marginTop: 20,
              }}
            />
          </Field>
          <TouchableOpacity onPress={form.submit} style={styles.loginBtn}>
            <Text style={{ fontSize: 17, lineHeight: 22, color: '#fff', fontWeight: '500' }}>Sign In</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Field name="username" trigger="onChangeText">
            <TextInput
              autoFocus
              placeholder="Please enter username"
              style={{ borderWidth: 1, borderColor: '#e5e5e5', height: 48, marginBottom: 25, paddingHorizontal: 10 }}
            />
          </Field>
          <Field name="password" trigger="onChangeText">
            <TextInput
              placeholder="Please enter your password"
              style={{ borderWidth: 1, borderColor: '#e5e5e5', height: 48, marginBottom: 5, paddingHorizontal: 10 }}
            />
          </Field>
          <TouchableOpacity onPress={() => navigation.navigate('ForgetPass')} style={{ alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 14, lineHeight: 20, color: '#999' }}>Forgot your password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={form.submit} style={styles.loginBtn}>
            <Text style={{ fontSize: 17, lineHeight: 22, color: '#fff', fontWeight: '500' }}>Sign Up</Text>
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.policy}>I have read and agreed</Text>
        <TouchableOpacity>
          <Text style={[styles.policy, styles.link]}> User Agreement </Text>
        </TouchableOpacity>
        <Text style={styles.policy}>and</Text>
        <TouchableOpacity>
          <Text style={[styles.policy, styles.link]}> Privacy Policy</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Form>
  );
};

export default function LoginForm({
  showLoginForm,
  showAnimation,
  isSmsLogin,
  changeTab,
}: {
  showLoginForm: number;
  showAnimation: Animated.Node<number>;
  isSmsLogin: boolean;
  changeTab: (activeKey: string) => void;
}) {
  const transition = useSpringTransition(showLoginForm, {
    ...SpringUtils.makeDefaultConfig(),
    damping: 16,
  });
  const translateY = mix(transition, 700, 0);

  return (
    <Animated.View
      style={[
        styles.top,
        {
          alignItems: 'center',
          transform: [
            {
              translateY: interpolate(showAnimation, {
                inputRange: [0, 1],
                outputRange: [700, -100],
                extrapolate: Extrapolate.CLAMP,
              }),
            },
            {
              scale: interpolate(showAnimation, {
                inputRange: [0, 1],
                outputRange: [0.4, 1],
                extrapolate: Extrapolate.CLAMP,
              }),
            },
          ],
        },
      ]}
    >
      <LoginTab isSmsLogin={isSmsLogin} onPress={changeTab} />
      <Animated.View
        style={{
          marginTop: 10,
          width: '100%',
          paddingHorizontal: 20,
          transform: [{ translateY }],
        }}
      >
        <FormContent {...{ isSmsLogin }} />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  top: {
    minHeight: 310,
    height: 'auto',
    borderRadius: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  loginBtn: {
    marginVertical: 15,
    backgroundColor: '#3171F0',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  policy: {
    fontSize: 12,
    lineHeight: 17,
    color: '#999999',
  },
  link: {
    color: '#3171F0',
  },
});
