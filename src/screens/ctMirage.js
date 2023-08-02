import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const onPressStuff1 = () => {
    navigation.navigate('ficheStuff/stuffMirage1CT');  
  };
  const onPressStuff2 = () => {
    navigation.navigate('ficheStuff/stuffMirage2CT');  
  };
  const onPressStuff3 = () => {
    navigation.navigate('ficheStuff/stuffMirage3CT');  
  };
  const onPressStuff4 = () => {
    navigation.navigate('ficheStuff/stuffMirage4CT');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quick Stuff</Text>
      <TouchableOpacity style={styles.square} onPress={onPressStuff1}>
        <Image
          source={require('../../assets/image/at.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.square} onPress={onPressStuff2}>
        <Image
          source={require('../../assets/image/at.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.square} onPress={onPressStuff3}>
        <Image
          source={require('../../assets/image/at.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.square} onPress={onPressStuff4}>
        <Image
          source={require('../../assets/image/at.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  square: {
    width: '45%',
    aspectRatio: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default HomeScreen;
