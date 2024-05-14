import React, {useState} from 'react'; 
import { StyleSheet, View, Image, ScrollView  } from 'react-native';
import {Button, Text, TextInput, Card, Avatar, IconButton } from 'react-native-paper'; 
import Message from './Message';

const MessageList = () => {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState(['Roger!', 'Roger back!']); 

  return (
    <ScrollView 
      // style={{backgroundColor: theme.colors.primary}}
    >
      {/* <Message text="First message." />
      <Message text="Second message." /> */}
      {texts.map( (text, index) => (<Message key={index} text={text} />) )}
      <View>
        <TextInput 
          placeholder="Enter your message here..." 
          defaultValue={text} 
          onChangeText = { newText => setText(newText)}
          />
        <Button icon="send" rasied
          onPress = {() => {
            setTexts([...texts, text]);
            setText('');
          }}>Send</Button>
      </View>
    </ScrollView>
  ); 
}

export default MessageList; 