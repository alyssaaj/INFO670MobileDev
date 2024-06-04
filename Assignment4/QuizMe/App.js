import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Quiz from './Quiz';
import Edit from './Edit';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Quiz" component={Quiz} />
        <Tab.Screen name="Edit" component={Edit} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}