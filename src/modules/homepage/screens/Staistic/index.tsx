import { Carousel } from '@ant-design/react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Statistic = () => {
  const onHorizontalSelectedIndexChange = index => {
    console.log('horizontal change to', index);
  };

  return (
    <Carousel style={styles.wrapper} selectedIndex={2} autoplay infinite afterChange={onHorizontalSelectedIndexChange}>
      <View style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
        <Text>Carousel 1</Text>
      </View>
      <View style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
        <Text>Carousel 2</Text>
      </View>
      <View style={[styles.containerHorizontal, { backgroundColor: 'yellow' }]}>
        <Text>Carousel 3</Text>
      </View>
      <View style={[styles.containerHorizontal, { backgroundColor: 'aqua' }]}>
        <Text>Carousel 4</Text>
      </View>
      <View style={[styles.containerHorizontal, { backgroundColor: 'fuchsia' }]}>
        <Text>Carousel 5</Text>
      </View>
    </Carousel>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});
