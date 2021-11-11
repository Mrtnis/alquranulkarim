import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Home from '../screens/Home';
import SplashScreen from '../utils/SplashScreen';
import Surah from '../screens/Surah';
import Ayat from '../screens/Ayat';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Surah" component={Surah} />
        <Stack.Screen name="Ayat" component={Ayat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
