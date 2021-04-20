import { Button, Flex, InputItem, TextareaItem } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/core';
import { STACK } from 'constants/StackNav';
import Container from 'modules/auth/components/Container';
import Form, { Field, useForm } from 'rc-field-form';
import { Store } from 'rc-field-form/es/interface';
import React from 'react';
import { Alert, Image, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const Profile = () => {
  const [form] = useForm();
  const { navigate } = useNavigation();

  const handleFinish = (values: Store) => {
    console.log('vv', values);
    if (values.name && values.phone) {
      navigate(STACK.home.index);
    } else {
      Alert.alert('All field are require!');
    }
  };

  return (
    <Container
      {...{
        content: {
          style: {
            backgroundColor: 'white',
            padding: 0,
          },
        },
      }}
    >
      <KeyboardAwareScrollView enableOnAndroid>
        <Form component={false} form={form} onFinish={handleFinish}>
          <Flex direction="column" align="stretch">
            <Text style={{ fontSize: 17, marginBottom: 15, alignSelf: 'center' }}>Update your profile now!</Text>

            <Image
              source={require('static/profile.jpg')}
              style={{
                width: 110,
                height: 110,
                borderRadius: 100,
                alignSelf: 'center',
              }}
            />

            <Field name="name" trigger="onChangeText">
              <TextInput
                placeholder="Name"
                style={{
                  borderWidth: 1,
                  borderColor: '#e5e5e5',
                  height: 48,
                  paddingHorizontal: 10,
                  marginVertical: 15,
                }}
              />
            </Field>
            <Field name="Sex" trigger="onChangeText">
              <InputItem clear type="number" labelNumber={3} placeholder="Input Your Age">
                Age:
              </InputItem>
            </Field>
            <Field name="note" trigger="onChangeText">
              <TextareaItem
                style={{
                  borderWidth: 1,
                  borderColor: '#e5e5e5',
                  marginBottom: 15,
                }}
                rows={4}
                placeholder="Other"
                last
              />
            </Field>

            <Button
              style={{
                marginTop: 15,
              }}
              type="primary"
              onPress={form.submit}
            >
              Save
            </Button>
          </Flex>
        </Form>
      </KeyboardAwareScrollView>
    </Container>
  );
};
