import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {screens} from '../screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLOR_LIGHT} from '../styles/colors';
import {stylesTabBar} from './styles';

const Tab = createMaterialBottomTabNavigator();
export const BottomNavigator = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={false}
      barStyle={stylesTabBar.container}
      inactiveColor={COLOR_LIGHT.GRAY_A}
      activeColor={COLOR_LIGHT.PRIMARY}>
      <Tab.Screen
        name="Home"
        component={screens.Home}
        options={{
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'home-variant' : 'home-variant-outline'}
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={screens.Feed}
        options={{
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons name="rss" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={screens.Cart}
        options={{
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'cart' : 'cart-outline'}
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={screens.Profile}
        options={{
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              color={color}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
