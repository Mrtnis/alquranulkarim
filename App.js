import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Home from './src/screens/Home';
import SplashScreen from './src/utils/SplashScreen';
import Surah from './src/screens/Surah';
import Ayat from './src/screens/Ayat';

const Stack = createNativeStackNavigator();

function App() {
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

export default App;
