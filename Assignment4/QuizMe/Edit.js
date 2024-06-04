import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Button } from 'react-native';
import { Modal, Portal,  Text, TextInput, PaperProvider } from 'react-native-paper';

//import {Picker} from '@react-native-picker/picker';
// import * as Permissions from 'expo-permissions';
//import axios from 'axios'; 

const Edit = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [responseStatus, setResponseStatus] = useState('');

  const addQuestion = () => {
    const url = `https://www.cs.drexel.edu/~amj426/A4/addQuestion.php?question=${question}&answer=${answer}`;
    fetch(url)
      .then(response => response.text())
      .then(data => {
        if (data === "1") {
          setResponseStatus("Question added successfully.");
          Alert.alert("Success", "Question added successfully.");
        } else {
          setResponseStatus("Failed to add question.");
          Alert.alert("Error", "Failed to add  question.");
        }
      })
      .catch(error => {
        setResponseStatus("Error: " + error.message + ", MORE: " + JSON.stringify(error));
        console.log(error);
        // Alert.alert("Error", "Error: " + error.message);
      });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Question:</Text>
      <TextInput
        style={styles.input}
        value={question}
        onChangeText={setQuestion}
      />
      <Text style={styles.label}>Answer:</Text>
      <TextInput
        style={styles.input}
        value={answer}
        onChangeText={setAnswer}
      />
      
      <Button
        title="Add to Quiz"
        onPress={addQuestion}
      />
      
      {responseStatus ? <Text style={styles.responseStatus}>{responseStatus}</Text> : null}
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

export default Edit;