import React, {useState} from 'react'; 
import { Divider } from 'react-native-paper';
import { StyleSheet, View, Image} from 'react-native';
import {  Text } from 'react-native-paper';

const FullPicture = props => {
    return (
        <View>
          <View style={{flexDirection: 'row'}}>
            <Image source={props.picLoc}
            style={{ 
              aspectRatio: 1,
              resizeMode: 'contain',
              flex: 1,
            }}/>
            </View>
          <Divider style={{
            padding: 4,
          }} />
          <View style ={{
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 50,
            paddingRight: 50,
            backgroundColor: "rgb(102, 90, 111)",
          }}>
            <Text style={{color: "rgb(255, 255, 255)"}}
            variant="titleLarge">{props.title}</Text>
            <Text style={{color: "rgb(255, 255, 255)"}}
            variant="bodyMedium">{props.content}</Text>
          </View>
        </View>
    );
  };

  export default FullPicture;
  