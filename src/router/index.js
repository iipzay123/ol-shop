import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../screens';
import {Fontsize, MARGIN} from '../styles/maxing';
//func

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: Fontsize(12),
        },
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="splash"
        component={screens.Splash}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            elevation: 0,
          },
          headerLeft: null,
        }}
        name="signIn"
        component={screens.Login}
      />
    </Stack.Navigator>
  );
};

const Router = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);

export default Router;
