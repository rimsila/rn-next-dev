import React, { FC } from 'react';
import { Dimensions, ImageBackground, ImageBackgroundProps, SafeAreaView, StatusBar, ViewProps } from 'react-native';

const { width, height } = Dimensions.get('window');

export type IContainer = {
  content?: Partial<ViewProps>;
} & Partial<ImageBackgroundProps>;

const Container: FC<IContainer> = props => {
  const { children, content, ...rest } = props;
  return (
    <ImageBackground
      {...rest}
      source={require('../../assets/bg.webp')}
      style={{ width, height, ...(rest.style as any) }}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        {...{
          ...content,
          style: { flex: 1, paddingHorizontal: 15, paddingVertical: 20, ...(content?.style as any) },
        }}
      >
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Container;
