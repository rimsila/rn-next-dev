import { Button, TextareaItem } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/core';
import { STACK } from 'constants/StackNav';
import Container from 'modules/auth/components/Container';
import Form, { Field, useForm } from 'rc-field-form';
import { Store } from 'rc-field-form/es/interface';
import React from 'react';
import { Alert, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const CreateRoom = () => {
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
          <Text style={{ fontSize: 17 }}>Complete form here to create new room</Text>

          <Field name="name" trigger="onChangeText">
            <TextInput
              placeholder="Room Name"
              style={{
                borderWidth: 1,
                borderColor: '#e5e5e5',
                height: 48,
                paddingHorizontal: 10,
                marginVertical: 15,
              }}
            />
          </Field>
          <Field name="phone" trigger="onChangeText">
            <TextareaItem
              style={{
                borderWidth: 1,
                borderColor: '#e5e5e5',
                marginBottom: 15,
              }}
              rows={4}
              placeholder="Description"
              last
            />
          </Field>

          <Button
            style={{
              marginTop: 15,
            }}
            type="primary"
            onPress={() => form.submit()}
          >
            Submit
          </Button>
        </Form>
      </KeyboardAwareScrollView>
    </Container>
  );
};
