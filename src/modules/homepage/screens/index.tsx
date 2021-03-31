import { useUpdateAtom } from 'jotai/utils';
import authService from 'modules/auth/authService';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { SafeAreaView } from 'react-native-safe-area-context';
import useSWR from 'swr';

const { fetch, url } = API.authorization.resource.listResource;

export default function Homepage() {
  const updateAuth = useUpdateAtom(authService.authAtom);

  const [shouldFetch, setShouldFetch] = useState(false);
  const {} = useSWR(shouldFetch ? url : null, fetch);

  const logout = () => {
    updateAuth({ signedIn: false });
  };

  const getData = () => {
    setShouldFetch(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>I am the homepage</Text>
      </View>
      <TouchableOpacity
        onPress={logout}
        style={{
          marginVertical: 15,
          backgroundColor: '#3171F0',
          height: 44,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={getData}
        style={{
          marginVertical: 15,
          backgroundColor: '#3171F0',
          height: 44,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}
      >
        <Text>Get data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => MMKV.set('token', '123')}
        style={{
          marginVertical: 15,
          backgroundColor: '#3171F0',
          height: 44,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}
      >
        <Text>Save data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log(MMKV.getString('token'))}
        style={{
          marginVertical: 15,
          backgroundColor: '#3171F0',
          height: 44,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        }}
      >
        <Text>Get data</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
