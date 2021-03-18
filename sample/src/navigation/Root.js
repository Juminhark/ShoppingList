import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import ShoppingScreen from '../screens/ShoppingScreen';

const RootNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Shopping" component={ShoppingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
