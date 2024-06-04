import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator, FlatList } from 'react-native';
import { Modal, Portal,  Text, TextInput, Button, PaperProvider } from 'react-native-paper';

//import {Picker} from '@react-native-picker/picker';
// import * as Permissions from 'expo-permissions';
//import axios from 'axios'; 

const Quiz = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [responseStatus, setResponseStatus] = useState('');
  
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);


  const getQuiz = async () => {
    try {
      const response = await fetch('https://www.cs.drexel.edu/~amj426/A4/getQuiz.php');
      const json = await response.json();
      setData(json);
      //console.log("here " + json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuiz();
  }, []);


  return (
    <View style={styles.container}>
        {isLoading ? (
            <Text>Loading...</Text>
        ) : (
            data.map((qq) => {
            return (
                <View>
                    <Text>{qq.question}: {qq.answer}</Text>
                    {/* <Button onPress={Alert.alert('The answer is...', "yes")}>
                        {qq.question}
                    </Button> */}
                </View>
            );
            })
        )}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  responseStatus: {
    marginTop: 20,
    fontSize: 16,
    color: 'blue',
  },
});

export default Quiz;