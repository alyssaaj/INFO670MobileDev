import React, {useState} from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {name as appName} from './app.json';
import { Button, Text, TextInput } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Picture from './ui/Picture';
import Person from './ui/Person';
import AllPictures from './ui/AllPictures';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  }

}

const GalleryStack = () => { 
  return (
    <Stack.Navigator initialRouteName="GalleryScreen">
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
      />
      <Stack.Screen
        name="Full Image"
        component={WideScreen}  
      />
    </Stack.Navigator>
  )
}

const GalleryScreen = ({navigation}) => {
  return (
    <PaperProvider theme={theme}>
          <View style={styles.container}>
            <AllPictures navigation={navigation}/>
          </View>
    </PaperProvider>

  );

};

const WideScreen = ( props ) => {
  return (
    <PaperProvider theme={theme}>
      <View>
        <Picture title={props.route.params.title} content={props.route.params.content} picLoc={props.route.params.picLoc}/>
      </View>
    </PaperProvider>
  );
};

const ProfileScreen = ( {navigation} ) => {
  return (
    <PaperProvider theme={theme}>
      <View>
        <Person />
      </View>
    </PaperProvider>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="GalleryStack" 
            component={GalleryStack} 
            options={{
              tabBarLabel: "Gallery",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="view-gallery" color={color} size={26} />
              ),
            }} 
          />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }} 
          />
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
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
