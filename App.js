// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import News from './components/news';
import Splash from './components/splash';
import About from './components/about';
import MyWeb from './components/MyWeb';
import Details from './components/details';
const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="splash" options={{headerShown: false}} component={Splash} />
        <Stack.Screen name="news" options={{headerShown: false}} component={News} />
        <Stack.Screen name="about" component={About} />
        <Stack.Screen name="details"options={{headerShown: false}} component={Details} />
        <Stack.Screen name="myweb" component={MyWeb} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;