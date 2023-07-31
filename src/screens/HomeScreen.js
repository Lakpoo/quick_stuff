import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const onPressMenuMirage = () => {
    navigation.navigate('MenuScreenMirage');
  };
  const onPressMenuInferno = () => {
    navigation.navigate('MenuScreenInferno');
  };
  const onPressMenuDust = () => {
    navigation.navigate('MenuScreenDust');
  };
  const onPressMenuNuke = () => {
    navigation.navigate('MenuScreenNuke');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quick Stuff</Text>
      <TouchableOpacity style={styles.square} onPress={onPressMenuMirage}>
        <Image
          source={require('../../assets/image/mirage.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.square} onPress={onPressMenuInferno}>
        <Image
          source={require('../../assets/image/inferno.jpg')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.square} onPress={onPressMenuDust}>
        <Image
          source={require('../../assets/image/dust2.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.square} onPress={onPressMenuNuke}>
        <Image
          source={require('../../assets/image/nuke.png')}
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
