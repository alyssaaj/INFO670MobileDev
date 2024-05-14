import React, {useState} from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper';
import MessageList from './MessageList';


export default function ChatScreen() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          
        </Stack.Navigator>
        <PaperProvider theme={theme}>
          <MessageList />
          {/* <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" /> */}
        </PaperProvider>
      </NavigationContainer>
    );
  }