import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Modal, Portal, Text, Button, TextInput, Appbar } from 'react-native-paper';
import Quiz from './Quiz';


const Edit = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [responseStatus, setResponseStatus] = useState('');

  const addQuestion = () => {
    if(question != null && question !== '' && answer != null && answer !== ''){
      const url = `https://www.cs.drexel.edu/~amj426/A4/addQuestion.php?question=${question}&answer=${answer}`;
      fetch(url)
        .then(response => response.text())
        .then(data => {
          if (data === "1") {
            setResponseStatus("Question added successfully.");
            Alert.alert("Success", "Question added successfully.");
          } else {
            setResponseStatus("Failed to add question.");
            Alert.alert("Error", "Failed to add question.");
          }
        })
        .catch(error => {
          setResponseStatus("Error: " + error.message + ", MORE: " + JSON.stringify(error));
          console.log(error);
          // Alert.alert("Error", "Error: " + error.message);
        });

    }
    else{
      setResponseStatus("Failed to add question. A field was left blank.");
      Alert.alert("Error", "Failed to add question. A field was left blank.");
    }
  };


  return (
    <View style={styles.outerContainer}>

        <View style={styles.heading}>
          <Appbar.Header style={{
            width: 400,
          }}>
            <Appbar.Content title="Edit"/>
          </Appbar.Header>
        </View>

        <View style={styles.container}>
          <View style={styles.addNew}>
            <Text variant="headlineLarge" style={styles.label}>Question:</Text>
            <TextInput
              style={styles.input}
              value={question}
              onChangeText={setQuestion}
            />
            <Text variant="headlineLarge" style={styles.label}>Answer:</Text>
            <TextInput
              style={styles.input}
              value={answer}
              onChangeText={setAnswer}
            />
          </View>
          
          <Button
            mode="contained"
            onPress={addQuestion}
            style={styles.addBtn}>
              Add to Quiz
          </Button>
          
          {responseStatus ? <Text style={styles.responseStatus}>{responseStatus}</Text> : null}
        </View>

    </View>
    
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  heading: {
    flex: 1,
  },
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'column',
    flex: 6,
  },
  addNew: {
    alignItems: "flex-start",
    marginBottom: 20,
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
    width: 300,
  },
  responseStatus: {
    marginTop: 20,
    fontSize: 16,
    color: 'blue',
  },
  addBtn: {
    height: 40,
    width: 150,
  },
});

export default Edit;