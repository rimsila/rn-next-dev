import React, { FC } from 'react';
import { Dimensions, ImageBackground, ImageBackgroundProps, SafeAreaView, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

export type IContainer = {
  content?: Partial<ImageBackgroundProps>;
};

const Container: FC<IContainer> = props => {
  const { children, content } = props;
  return (
    <ImageBackground
      source={require('../../assets/bg.webp')}
      {...content}
      style={{ width, height, paddingHorizontal: 15, paddingVertical: 20, ...(content?.style as any) }}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView {...{ style: { flex: 1 } }}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default Container;
