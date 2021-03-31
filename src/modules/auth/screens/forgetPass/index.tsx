/**
 * When logging in by mobile phone number, set the login password
 */
import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Form, { Field, useForm } from 'rc-field-form';
import { Store } from 'rc-field-form/es/interface';

import AuthTemplate from 'modules/auth/components/AuthTemplate';
import { useNavigation } from '@react-navigation/core';

const FormContent = () => {
  const [form] = useForm();
  const navigation = useNavigation();

  const handleFinish = (values: Store) => {
    console.log(values);
    navigation.navigate('ForgetPass');
  };

  return (
    <Form component={false} form={form} onFinish={handleFinish}>
      <Field name="phone" trigger="onChangeText">
        <TextInput
          placeholder="Please enter your mobile phone number"
          style={{ borderWidth: 1, borderColor: '#e5e5e5', height: 48, marginBottom: 24 }}
        />
      </Field>
      <Field name="sms" trigger="onChangeText">
        <TextInput
          placeholder="Please enter the verification code"
          style={{ borderWidth: 1, borderColor: '#e5e5e5', height: 48, marginBottom: 24 }}
        />
      </Field>
      <Field name="sms" trigger="onChangeText">
        <TextInput
          placeholder="Please enter a new password"
          style={{ borderWidth: 1, borderColor: '#e5e5e5', height: 48, marginBottom: 24 }}
        />
      </Field>
      <Field name="sms" trigger="onChangeText">
        <TextInput
          placeholder="Please confirm your password again"
          style={{ borderWidth: 1, borderColor: '#e5e5e5', height: 48, marginBottom: 24 }}
        />
      </Field>
      <TouchableOpacity onPress={form.submit} style={styles.btn}>
        <Text style={{ fontSize: 18, lineHeight: 22, color: '#fff', fontWeight: '500' }}>Confirm</Text>
      </TouchableOpacity>
    </Form>
  );
};

export default function ForgetPass() {
  return (
    <AuthTemplate
      title="Retrieve Password"
      subtitle="In order to ensure the security of your account, you can only do it once a day, otherwise the account will be locked and you cannot log in"
    >
      <FormContent />
    </AuthTemplate>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#3171F0',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
