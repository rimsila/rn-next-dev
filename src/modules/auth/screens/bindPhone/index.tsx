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
      <TouchableOpacity onPress={form.submit} style={styles.btn}>
        <Text style={{ fontSize: 18, lineHeight: 22, color: '#fff', fontWeight: '500' }}>Confirm</Text>
      </TouchableOpacity>
    </Form>
  );
};

export default function BindPhone() {
  return (
    <AuthTemplate
      title="Bind mobile phone number"
      subtitle="The bound mobile phone number can be used to log in. If the account is lost or abnormal, the password can be retrieved by binding the mobile phone number"
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
