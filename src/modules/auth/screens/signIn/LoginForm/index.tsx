import { useNavigation } from '@react-navigation/core';
import { useUpdateAtom } from 'jotai/utils';
import authService from 'modules/auth/authService';
import Form, { Field, useForm } from 'rc-field-form';
import { Store } from 'rc-field-form/es/interface';
import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, SpringUtils } from 'react-native-reanimated';
import { mix, useSpringTransition } from 'react-native-redash';
import LoginTab from '../LoginTab';

const Error = ({ children }: any) =>
  children.map((error, i) => (
    <Text
      key={i}
      style={{
        color: 'red',
        marginTop: 10,
      }}
    >
      {error}
    </Text>
  ));

const FormContent = ({ isSmsLogin }: { isSmsLogin: boolean }) => {
  const [form] = useForm();
  const navigation = useNavigation();
  const updateAuth = useUpdateAtom(authService.authAtom);

  const handleFinish = (values: Store) => {
    console.log('values', values);
    updateAuth({ signedIn: true });
    // navigation.navigate('ConfigPass');
  };

  return (
    <Form component={false} form={form} onFinish={handleFinish}>
      {isSmsLogin ? (
        <>
          <Field
            name="phone"
            // trigger="onChangeText"
            {...{
              rules: [
                {
                  required: true,
                  message: 'This field is required!',
                },
              ],
            }}
          >
            {() => {
              const usernameError = form.getFieldError('phone');
              // console.log('getFieldError', form.getFieldError('phone'));
              return (
                <>
                  <TextInput
                    placeholder="Please enter your username"
                    style={{
                      borderWidth: 1,
                      borderColor: '#e5e5e5',
                      height: 48,
                      paddingHorizontal: 10,
                    }}
                  />
                  <Error>{usernameError}</Error>
                </>
              );
            }}
          </Field>

          <Field
            name="sms"
            // trigger="onChangeText"
            {...{
              rules: [
                {
                  required: true,
                  message: 'This field is required!',
                },
              ],
            }}
          >
            {() => {
              const smsError = form.getFieldError('sms');
              return (
                <>
                  <TextInput
                    placeholder="Please enter password"
                    style={{
                      borderWidth: 1,
                      borderColor: '#e5e5e5',
                      height: 48,
                      paddingHorizontal: 10,
                      marginTop: 20,
                    }}
                  />
                  <Error>{smsError}</Error>
                </>
              );
            }}
          </Field>
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
        </>
      )}
      <TouchableOpacity onPress={form.submit} style={styles.loginBtn}>
        <Text style={{ fontSize: 17, lineHeight: 22, color: '#fff', fontWeight: '500' }}>Login</Text>
      </TouchableOpacity>
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
    marginHorizontal: 18,
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
