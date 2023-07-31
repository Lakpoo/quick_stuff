import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreenMirage';
import MenuScreen from './src/screens/MenuScreenInferno';
import MenuScreen from './src/screens/MenuScreenDust';
import MenuScreen from './src/screens/MenuScreenNuke';
import tMirage from './src/screens/tMirage';
import ctMirage from './src/screens/ctMirage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreenMirage"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreenInferno"
          component={MenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreenDust"
          component={tMirage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreenNuke"
          component={ctMirage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
