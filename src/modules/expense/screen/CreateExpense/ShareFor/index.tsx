import { Flex } from '@ant-design/react-native';
import { COLOR } from 'constants/color';
import IconFont from 'iconfont';
import { Field } from 'rc-field-form';
import React from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SharedFor = ({ field, add, remove, disabledRemove, disabledAdd }) => {
  return (
    <>
      <Flex justify="around">
        <Flex>
          <Field name={[field.name, 'user']}>
            <TextInput
              placeholder="User"
              style={{
                width: 'auto',
                minWidth: 165,
                borderWidth: 1,
                borderColor: '#e5e5e5',
                height: 45,
                paddingHorizontal: 10,
                marginVertical: 10,
              }}
            />
          </Field>
          <Field name={[field.name, 'amount']}>
            <TextInput
              keyboardType="numeric"
              placeholder="amount"
              style={{
                width: 'auto',
                minWidth: 165,
                borderWidth: 1,
                borderColor: '#e5e5e5',
                height: 45,
                paddingHorizontal: 10,
                marginVertical: 15,
              }}
            />
          </Field>
        </Flex>
        <Flex direction="column" style={{ height: 45 }} justify="between">
          <TouchableOpacity onPress={() => remove(field?.name)} disabled={disabledRemove}>
            <IconFont name="icon-delete-center" size={21} color={disabledRemove ? 'grey' : COLOR.red6} />
          </TouchableOpacity>
          <TouchableOpacity onPress={add} disabled={disabledAdd}>
            <IconFont name="icon-add-green" size={20} color={disabledAdd ? 'grey' : COLOR.cyan7} />
          </TouchableOpacity>
        </Flex>
      </Flex>
    </>
  );
};

export default SharedFor;
