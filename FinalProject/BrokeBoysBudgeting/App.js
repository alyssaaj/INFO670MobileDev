
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
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { useState, useEffect, useContext, createContext } from 'react';
import Home from './ui/Home';
import Expenses from './ui/Expenses';
import Profile from './ui/Profile';
import SignIn from './ui/SignIn';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  }

};
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return(
    <Tab.Navigator
      //initialRouteName="Profile"
      >
            <Tab.Screen 
              name="Home" 
              component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({color}) => (
                      <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                  }} />
            <Tab.Screen 
              name="Expenses" 
              component={ExpensesScreen} 
              options={{
                tabBarLabel: "Expenses",
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons name="cash-multiple" color={color} size={26} />
                ),
              }} />
            <Tab.Screen 
              name="Profile" 
              component={ProfileScreen} 
              options={{
                  tabBarLabel: "Profile",
                  tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                  ),
                }} />
    </Tab.Navigator>

  );
};
const SignInScreen = ({navigation}) => {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <SignIn navigation={navigation}/>
      </View>
    </PaperProvider>
  );
};

const HomeScreen = () => {
  //setUserID('love');
  return (
    <PaperProvider theme={theme}>
      <Text style={styles.logo}>Broke Boys Budgeting</Text>
      <View style={styles.container}>
        <Home/>
      </View>
    </PaperProvider>
  );
};
const ExpensesScreen = () => {
  return (
    <PaperProvider theme={theme}>
      <Text style={styles.logo}>Broke Boys Budgeting</Text>
      <View style={styles.container}>
        <Expenses />
      </View>
    </PaperProvider>
  );
};
const ProfileScreen = () => {
  return (
    <PaperProvider theme={theme}>
      <Text style={styles.logo}>Broke Boys Budgeting</Text>
      <View style={styles.container}>
        <Profile />
      </View>
    </PaperProvider>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <Stack.Navigator 
          initialRouteName="SignIn"
          screenOptions={{headerShown:false}}>
              <Stack.Screen
                name="SignIn"
                component={SignInScreen}
              />
              <Stack.Screen
                name="AppStack"
                component={AppStack}  
              />
        </Stack.Navigator> */}
        <AppStack/>



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
  logo: {
    fontSize: 28,
    fontFamily: 'Avenir-Book',
    textAlign: 'center',
    backgroundColor: "rgb(240, 219, 255)",
    paddingTop: 10,
    paddingBottom: 10,
  },
});
