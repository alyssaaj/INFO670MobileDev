import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { TextInput, Button, Modal, Portal } from 'react-native-paper';
import React, { useState, useEffect, Alert} from 'react';



const SignIn = ({navigation}) => {
    const [name, setName] = useState('');
    const [budget, setBudget] = useState('');
    const [last, setLast] = useState();

    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const addUser = async () => {
        if(name != null && name !== '' && budget != null && budget !== ''){
          const url = `https://www.cs.drexel.edu/~amj426/FP/addUser.php?name=${name}&budget=${budget}`;
          fetch(url)
            .then(response => response.text())
            .then(data => {
              if (data === "1") {
                //setResponseStatus("Category added successfully.");
                Alert.alert("Success", "Category added successfully.");
              } else {
                //setResponseStatus("Failed to add category.");
                Alert.alert("Error", "Failed to add category.");
              }
              //getLastUser();
            })
            .catch(error => {
              //setResponseStatus("Error: " + error.message + ", MORE: " + JSON.stringify(error));
              console.log(error);
              Alert.alert("Error", "Error: " + error.message);
            });
            // global.currentUser=name;
            setName('');
            setBudget('');
            navigation.navigate('AppStack');
        }
        else{
          //setResponseStatus("Failed to add category. The field was left blank.");
          Alert.alert("Error", "Failed to add category. The field was left blank.");
        }
      };

    // const getLastUser = async () => {
    //     try {
    //       const response = await fetch('https://www.cs.drexel.edu/~amj426/FP/getLastUser.php');
    //       const json = await response.json();
    //       setLast(json);
    //       console.log(last[0].name);
    //     } catch (error) {
    //       console.error(error);
    //     } finally {
    //       //setLoading(false);
    //       //console.log(last[0].name);
    //       //global.currentUser=;
    //       setName('');
    //       setBudget('');
    //       navigation.navigate('AppStack');
    //     }
    // };

    return (  
        <View style={styles.container}>
            <View>
                <Text style={styles.logo}>Broke Boys</Text>
                <Text style={styles.logo2}>Budgeting</Text>
            </View>

          <Button mode="contained" style={styles.btn} onPress={()=> navigation.navigate('AppStack')} >Sign In</Button>
        
          <Button mode="contained"  style={styles.btn} onPress={showModal}>Get Started</Button>
          
            <Portal>
              <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
                <Text>Sign Up:</Text>
                <TextInput
                  label="Name"
                  style={styles.inputNew}
                  value={name}
                  onChangeText={name => setName(name)}
                />
                <TextInput
                  label="Budget"
                  style={styles.inputNew}
                  value={budget}
                  onChangeText={budget => setBudget(budget)}
                />
                <Button style={{marginTop: 20}} mode="contained" onPress={addUser}>
                  Sign Up
                </Button>
              </Modal>
            </Portal>

        </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        rowGap: 30,
        flex: 1,
        backgroundColor: "rgb(240, 219, 255)",
      },
    logo: {
        fontSize: 40,
        fontFamily: 'Avenir-Book',
        textAlign: 'center',
    },
    logo2: {
        fontSize: 60,
        fontFamily: 'Avenir-Book',
        textAlign: 'center',
    },
    btn: {
        width: 120,
    },
    inputNew: {
        padding: 0,
        maxHeight: 60,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        width: 300,
      },
      containerStyle:{
        backgroundColor: 'white', 
        padding: 20,
        height: 300,
      },
  });

  export default SignIn;
