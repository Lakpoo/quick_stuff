import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SubMenu1 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/at.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SubMenu1;
