import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
export default function ThirdPartyLogin({
  showAnimation,
  onPress,
}: {
  showAnimation: Animated.Node<number>;
  onPress: (status: number) => void;
}) {
  return (
    <Animated.View
      style={{
        height: 110,
        transform: [
          {
            translateY: interpolate(showAnimation, {
              inputRange: [0, 1],
              outputRange: [0, 20],
              extrapolate: Extrapolate.CLAMP,
            }),
          },
        ],
      }}
    >
      <View
        style={{
          width,
          paddingHorizontal: 60,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <View style={{ height: 1, backgroundColor: 'rgba(255, 255, 255, 0.16)', width: 55 }} />
        <View style={{ paddingHorizontal: 10, transform: [{ translateY: -10 }] }}>
          <Text style={{ fontSize: 14, lineHeight: 20, color: '#fff' }}>worth mentioning</Text>
        </View>
        <View style={{ height: 1, backgroundColor: 'rgba(255, 255, 255, 0.16)', width: 55 }} />
      </View>
      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => onPress(0)}>
          <Image source={require('../../../assets/weichat.webp')} style={{ width: 48, height: 48 }} />
        </TouchableOpacity>
        <View style={{ width: 85 }} />
        <TouchableOpacity onPress={() => onPress(0)}>
          <Image source={require('../../../assets/qq.webp')} style={{ width: 48, height: 48 }} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
