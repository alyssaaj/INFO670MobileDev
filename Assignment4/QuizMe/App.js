import * as React from 'react';
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


import Quiz from './ui/Quiz';
import Edit from './ui/Edit';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  }

}
const QuizScreen = ( {navigation} ) => {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Quiz />
      </View>
    </PaperProvider>
  );
};
const EditScreen = ( {navigation} ) => {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Edit />
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
          name="Quiz" 
          component={QuizScreen} 
          options={{
            tabBarLabel: "Quiz",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="comment-question-outline" size={26} />
            )
          }}
          />
        <Tab.Screen 
          name="Edit" 
          component={EditScreen} 
          options={{
            tabBarLabel: "Edit",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="pencil-plus-outline" size={26} />
            )
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
  },
});