import Container from 'modules/auth/components/Container';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from 'store/auth';

export default function Homepage() {
  const { logout } = useAuth();
  return (
    <Container>
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
    </Container>
  );
}
