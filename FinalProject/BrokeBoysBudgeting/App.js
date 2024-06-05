
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {name as appName} from './app.json';
import { Button, Text, TextInput } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import * as React from 'react';
import Home from './ui/Home';
import Expenses from './ui/Expenses';
import Profile from './ui/Profile';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  }

}
const HomeScreen = ( {navigation} ) => {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Home />
      </View>
    </PaperProvider>
  );
};
const ExpensesScreen = ( {navigation} ) => {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Expenses />
      </View>
    </PaperProvider>
  );
};
const ProfileScreen = () => {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Profile />
      </View>
    </PaperProvider>
  );
};

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="Home" 
            component={HomeScreen}
              options={{
                  tabBarLabel: "Home",
                  tabBarIcon: () => (
                    <MaterialCommunityIcons name="home" size={26} />
                  ),
                }} />
          <Tab.Screen 
            name="Expenses" 
            component={ExpensesScreen} 
            options={{
              tabBarLabel: "Expenses",
              tabBarIcon: () => (
                <MaterialCommunityIcons name="cash-multiple" size={26} />
              ),
            }} />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
                tabBarLabel: "Profile",
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account" size={26} />
                ),
              }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
