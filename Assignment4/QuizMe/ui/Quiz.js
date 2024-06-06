import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator, FlatList, ScrollView, Image } from 'react-native';
import { Modal, Portal,  Text, TextInput, Button, Appbar } from 'react-native-paper';


const Quiz = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [start, setStart] = useState(false);

  const StartBtn = () => {
    setStart(true);
  }

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

  const FlashCard = (props) => {
    console.log(props);
    const [displayAnswer, setDisplayAnswer] = useState('');

    const showAnswer = () => {
      setDisplayAnswer("Answer: " + props.answer);
    }

    return (
      <View style={styles.flashCard}>
        <Text>{props.question}</Text>
        <Text>{displayAnswer}</Text>
        <Button 
          mode='contained' 
          onPress={showAnswer} 
          style={styles.AnsBtn}>
          Show Answer
        </Button>

      </View>

    );
  }

  useEffect(() => {
    getQuiz();
  }, []);


  return (
    
    <View style={styles.outerContainer}>

      <View style={styles.heading}>
          <Appbar.Header style={{
            width: 400,
          }}>
            <Appbar.Content title="Quiz"/>
          </Appbar.Header>
      </View>

      <View style={styles.container}>
        {start ? (<Button mode="outlined" textColor='orange' onPress={getQuiz} style={styles.reloadBtn}>Reload Quiz</Button>): (<View></View>)}
        {console.log(start)}
        {start ? (
            <ScrollView>
              {isLoading ? (
                  <Text>Loading...</Text>
              ) : (
                  data.map((qq, index) => {
                  return (
                      <FlashCard key={index} question={qq.question} answer={qq.answer}/>

                  );
                  })
              )}

            </ScrollView>
            )
        :
          (<View>
            {/* <Image source={require("../assets/book.jpg")} style={{alignSelf: 'center', margin: 20,  width:80, height: 100}}/> */}
            <Button mode="contained" onPress={StartBtn}>Start the Quiz?</Button>
          </View>)
        }
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
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'column',
    flex: 6,
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
  flashCard: {
    height: 120,
    width: 300,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 16,
    marginBottom: 10,
    justifyContent: 'space-between',
    padding: 10,
  },
  AnsBtn: {
    marginTop: 10,
    width: 140,
    alignSelf: 'center',
  },
  reloadBtn: {
    marginBottom: 20
  }
});

export default Quiz;