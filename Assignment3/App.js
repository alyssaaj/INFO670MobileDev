import React, {useState} from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, MD3DarkTheme as DefaultTheme } from 'react-native-paper';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {name as appName} from './app.json';
import { Button, Text, TextInput } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  }

}

const GalleryScreen = ({navigation}) => {
  return (
    <PaperProvider theme={theme}>
      <View>
        <Text>This is the gallery</Text>
      </View>

    </PaperProvider>

  );
};

const PictureViewingScreen = ({navigation}) => {
  return (
    <PaperProvider theme={theme}>
      <View>
        <Text>This is the picture viewing</Text>
      </View>
    </PaperProvider>

  );
};

const ProfileScreen = ({navigation}) => {
  return (
    <PaperProvider theme={theme}>
      <View>
        <Text>This is the profile</Text>
      </View>
    </PaperProvider>

  );
};


//const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Gallery"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'tomato' }}>
            <Tab.Screen 
            name="Gallery" 
            component={GalleryScreen}
            options={{
              tabBarLabel: "G",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }} 
            />
            <Tab.Screen 
            name="Picture Viewing" 
            component={PictureViewingScreen}
            options={{
              tabBarLabel: "PV",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
            />
            <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
              tabBarLabel: "P",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
            />
        </Tab.Navigator>

    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //     name="Gallery"
    //     component={GalleryScreen}
    //     options={{title:"Gallery"}}
    //     />
    //     <Stack.Screen
    //     name="PictureViewing"
    //     component={PictureViewingScreen}
    //     options={{title:"Picture Viewing"}}
    //     />
    //     <Stack.Screen
    //     name="Profile"
    //     component={ProfileScreen}
    //     options={{title:"Profile"}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>

  );

}

AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  messageContainer: {
    flex: 1, 
    flexDirection: 'row', 
    backgroundColor: 'skyblue', 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
  },
  shadow: {
    shadowColor: '#171717', 
    shadowOffsetWidth: 0, 
    shadowOffsetHeight: 2, 
    shadowOpacity: 0.2, 
    shadowRadius: 3, 
    backgroundColor: 'white', 
    zIndex: 9999, 
  }
});