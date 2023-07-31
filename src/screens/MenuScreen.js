import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const MenuScreen = ({ navigation }) => {
  const onPressTMirage = () => {
    navigation.navigate('tMirage');
  };

  const onPressCTMirage = () => {
    navigation.navigate('ctMirage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>AT & T</Text>
      <TouchableOpacity style={styles.button} onPress={onPressTMirage}>
        <Image
          source={require('../../assets/image/at.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressCTMirage}>
        <Image
          source={require('../../assets/image/t.png')}
          style={styles.buttonImage}
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
  button: {
    width: '90%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonImage: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
});

export default MenuScreen;
