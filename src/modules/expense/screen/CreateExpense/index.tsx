import { Button, Flex, List, Picker, TextareaItem } from '@ant-design/react-native';
import { useNavigation } from '@react-navigation/core';
import { usePersistFn } from 'ahooks';
import { COLOR } from 'constants/color';
import { STACK } from 'constants/StackNav';
import IconFont from 'iconfont';
import Container from 'modules/auth/components/Container';
import Form, { Field, List as ListForm, useForm } from 'rc-field-form';
import { Store } from 'rc-field-form/es/interface';
import React, { useState } from 'react';
import { Alert, Image, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MultiSelect from 'react-native-multiple-select';
import SharedFor from './ShareFor';

export const CreateExpense = () => {
  const [form] = useForm();
  const { navigate } = useNavigation();
  const [room, setRoom] = useState(['CASH']);
  const [open, setOpen] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState([]);

  const items = [
    {
      id: '92iijs7yta',
      name: 'Ondo',
    },
    {
      id: 'a0s0a8ssbsd',
      name: 'Ogun',
    },
    {
      id: '16hbajsabsd',
      name: 'Calabar',
    },
    {
      id: 'nahs75a5sg',
      name: 'Lagos',
    },
    {
      id: '667atsas',
      name: 'Maiduguri',
    },
    {
      id: 'hsyasajs',
      name: 'Anambra',
    },
    {
      id: 'djsjudksjd',
      name: 'Benue',
    },
    {
      id: 'sdhyaysdj',
      name: 'Kaduna',
    },
    {
      id: 'suudydjsjd',
      name: 'Abuja',
    },
  ];

  const handleFinish = (values: Store) => {
    console.log('vv', values);
    if (values.name && values.phone) {
      navigate(STACK.home.index);
    } else {
      Alert.alert('All field are require!');
    }
  };
  const onChange = usePersistFn(value => {
    console.log('value', value);
    setOpen(false);
    setRoom(value);
  });

  const onSelectedItemsChange = selectedItems => {
    setSelectedTeams(selectedItems);
  };

  const seasons = [
    [
      {
        label: 'CASH',
        value: 'CASH',
      },
      {
        label: 'ABA',
        value: 'ABA',
      },
      {
        label: 'CREDIT_CARD',
        value: 'CREDIT_CARD',
      },
    ],
  ];
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
      <KeyboardAwareScrollView
        enableOnAndroid
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Form
          component={false}
          form={form}
          onFinish={handleFinish}
          initialValues={{ users: [{ user: '1', amount: '0' }] }}
        >
          <Flex direction="column" align="stretch">
            <Text style={{ fontSize: 17, marginBottom: 15, alignSelf: 'center' }}>
              Create new expanse transaction now!
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 15 }}>Categories</Text>

            <Picker
              wrapStyle={{
                borderWidth: 0.8,
                borderColor: '#d9d9d9',
                borderRadius: 2,
                marginBottom: 15,
              }}
              extra={` ${room}`}
              title={
                <>
                  <Text>All Categories</Text>
                </>
              }
              data={seasons}
              cols={1}
              value={room}
              onOk={onChange}
            >
              <List.Item arrow="down" thumb={<IconFont name="icon-all-blue" color={COLOR.red6} size={22} />} />
            </Picker>
            <Text style={{ fontSize: 16 }}>Invoice Photo</Text>
            <Image
              source={require('static/profile.jpg')}
              style={{
                width: '100%',
                height: 150,
                // borderRadius: 100,
                alignSelf: 'center',
                marginVertical: 15,
              }}
            />
            <Flex justify="around">
              <Text style={{ fontSize: 14 }}>Amount USD</Text>
              <Text style={{ fontSize: 14 }}>Amount KHR</Text>
            </Flex>

            <Flex justify="between" align="stretch">
              <Field name="age" trigger="onChangeText">
                <TextInput
                  keyboardType="numeric"
                  placeholder="USD"
                  style={{
                    width: '50%',
                    borderWidth: 1,
                    borderColor: '#e5e5e5',
                    height: 35,
                    paddingHorizontal: 10,
                    marginVertical: 15,
                  }}
                />
              </Field>

              <Field name="age1" trigger="onChangeText">
                <TextInput
                  placeholder="KHR"
                  keyboardType="numeric"
                  style={{
                    width: '50%',
                    borderWidth: 1,
                    borderColor: '#e5e5e5',
                    height: 35,
                    paddingHorizontal: 10,
                    marginVertical: 15,
                  }}
                />
              </Field>
            </Flex>
            <Text style={{ fontSize: 16 }}>Payment Type</Text>
            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={{
                marginVertical: 15,
                borderWidth: 0.8,
                borderColor: '#d9d9d9',
                borderRadius: 2,
              }}
            >
              <Picker
                extra={` ${room}`}
                title={
                  <>
                    <Text>All Payment Type</Text>
                  </>
                }
                data={seasons}
                cols={1}
                value={room}
                onDismiss={() => setOpen(false)}
                onOk={onChange}
                visible={open}
              >
                <List.Item arrow="down" thumb={<IconFont name="icon-dollar" color={COLOR.red6} size={26} />} />
              </Picker>
            </TouchableOpacity>

            <Text style={{ fontSize: 16 }}>Shared With</Text>
            <MultiSelect
              hideTags
              items={items}
              uniqueKey="id"
              onSelectedItemsChange={onSelectedItemsChange}
              selectedItems={selectedTeams}
              selectText="User Selected"
              searchInputPlaceholderText="Search Items..."
              onChangeInput={text => console.log(text)}
              tagRemoveIconColor="#CCC"
              tagBorderColor="#CCC"
              tagTextColor="#CCC"
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              itemTextColor="#000"
              displayKey="name"
              searchInputStyle={{ color: '#CCC' }}
              submitButtonColor="#CCC"
              submitButtonText="Submit"
              styleMainWrapper={{
                marginBottom: 10,
              }}
            />
            <Text style={{ fontSize: 16 }}>Note</Text>
            <Field name="note" trigger="onChangeText">
              <TextareaItem
                style={{
                  borderWidth: 1,
                  borderColor: '#e5e5e5',
                  marginVertical: 15,
                }}
                rows={4}
                placeholder="Description"
                last
              />
            </Field>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>Share With</Text>
            <Flex justify="around" style={{ marginBottom: 0 }}>
              <Text style={{ fontSize: 14 }}>User</Text>
              <Text style={{ fontSize: 14 }}>Amount</Text>
            </Flex>
            <ListForm name="users">
              {(fields, { remove, add }) => {
                return fields.map((field, index) => (
                  <SharedFor
                    key={field.name}
                    {...{
                      remove,
                      add,
                      field,
                      disabledRemove: fields?.length === 1,
                      disabledAdd: index !== fields?.length - 1,
                    }}
                  />
                ));
              }}
            </ListForm>

            <Text style={{ fontSize: 16 }}>Description</Text>
            <Field name="description" trigger="onChangeText">
              <TextareaItem
                style={{
                  borderWidth: 1,
                  borderColor: '#e5e5e5',
                  marginVertical: 15,
                }}
                rows={4}
                placeholder="Description"
                last
              />
            </Field>

            <Button
              style={{
                marginTop: 10,
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
    // </ScrollView>
  );
};
