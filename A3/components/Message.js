import React, {useState} from 'react'; 
import {Button, Text, TextInput, Card, Avatar, IconButton } from 'react-native-paper'; 

const Message = props => {
    return (
      // <View>
      //   <Image source={require('./img/favicon.png')} style={{width:20, height:20}} />
      //   <Text>{props.text}</Text>
      // </View>
      <Card.Title 
        title="Weimao Ke2"
        subtitle="Date/Time"
        left={ (props) => <Avatar.Icon {...props} icon="message" />}
        right={ (props) => <IconButton {...props} icon="delete" 
          onPress={ () => {} }
        />}
      />
    ); 
  }

  export default Message; 