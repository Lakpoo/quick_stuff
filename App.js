import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import MenuScreenMirage from './src/screens/MenuScreenMirage';
import MenuScreenInferno from './src/screens/MenuScreenInferno';
import MenuScreenDust from './src/screens/MenuScreenDust';
import MenuScreenNuke from './src/screens/MenuScreenNuke';
import tMirage from './src/screens/tMirage';
import ctMirage from './src/screens/ctMirage';
import tInferno from './src/screens/tInferno';
import ctInferno from './src/screens/ctInferno';
import tDust from './src/screens/tDust';
import ctDust from './src/screens/ctDust';
import tNuke from './src/screens/tNuke';
import ctNuke from './src/screens/ctNuke';
import stuffMirage1CT from './src/screens/ficheStuff/stuffMirage1CT';
import stuffMirage2CT from './src/screens/ficheStuff/stuffMirage2CT';
import stuffMirage3CT from './src/screens/ficheStuff/stuffMirage3CT';
import stuffMirage4CT from './src/screens/ficheStuff/stuffMirage4CT';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuScreenMirage"
          component={MenuScreenMirage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuScreenInferno"
          component={MenuScreenInferno}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuScreenDust"
          component={MenuScreenDust}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuScreenNuke"
          component={MenuScreenNuke}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="tMirage"
          component={tMirage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ctMirage"
          component={ctMirage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="tInferno"
          component={tInferno}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ctInferno"
          component={ctInferno}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="tDust"
          component={tDust}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ctDust"
          component={ctDust}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="tNuke"
          component={tNuke}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ctNuke"
          component={ctNuke}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="stuffMirage1CT"
          component={stuffMirage1CT}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="stuffMirage2CT"
          component={stuffMirage2CT}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="stuffMirage3CT"
          component={stuffMirage3CT}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="stuffMirage4CT"
          component={stuffMirage4CT}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
