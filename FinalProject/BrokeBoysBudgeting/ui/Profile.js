import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Avatar, TextInput, Appbar, Text, Button, Modal, Portal } from 'react-native-paper';


const Profile = () => {
  const [cat, setCat] = useState('');
  const [responseStatus, setResponseStatus] = useState('');
  
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [dataUser, setDataUser] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const [userCat, setUserCat] = useState([]);
  const [name, setName] = useState('');
  const [budget, setBudget] = useState('');
  const [editTime, setEditTime] = useState(false);


  const getUser = async () => {
    try {
      const response = await fetch('https://www.cs.drexel.edu/~amj426/FP/getUser.php?id=1');
      const json = await response.json();
      setDataUser(json);
      getCategoriesByUser();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoriesByUser = async () => {
    try {
      const response = await fetch('https://www.cs.drexel.edu/~amj426/FP/getCategoriesByUser.php?user=1');
      const json = await response.json();
      setUserCat(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading2(false);
    }
  };
  
  const addCategory = () => {
    if(cat != null && cat !== ''){
      const url = `https://www.cs.drexel.edu/~amj426/FP/addCategory.php?user=1&cat=${cat}`;
      fetch(url)
        .then(response => response.text())
        .then(data => {
          if (data === "1") {
            setResponseStatus("Category added successfully.");
            Alert.alert("Success", "Category added successfully.");
          } else {
            setResponseStatus("Failed to add category.");
            Alert.alert("Error", "Failed to add category.");
          }
        })
        .catch(error => {
          setResponseStatus("Error: " + error.message + ", MORE: " + JSON.stringify(error));
          console.log(error);
          // Alert.alert("Error", "Error: " + error.message);
        });
        setCat('');
        getUser();
        hideModal();
    }
    else{
      setResponseStatus("Failed to add category. The field was left blank.");
      Alert.alert("Error", "Failed to add category. The field was left blank.");
    }
  };

  const updateUser = () => {
    if(name != null && name !== '' && budget != null && budget !== ''){
      const url = `https://www.cs.drexel.edu/~amj426/FP/updateUser.php?name=${name}&budget=${budget}`;
      fetch(url, {mode: 'cors', method: 'POST'})
        .then(response => response.text())
        .then(data => {
          if (data === "1") {
            //setResponseStatus("Category added successfully.");
            //Alert.alert("Success", "Category added successfully.");
          } else {
            //setResponseStatus("Failed to add category.");
            //Alert.alert("Error", "Failed to add category.");
          }
        })
        .catch(error => {
          //setResponseStatus("Error: " + error.message + ", MORE: " + JSON.stringify(error));
          console.log(error);
          // Alert.alert("Error", "Error: " + error.message);
        });
    }
    else{
      //setResponseStatus("Failed to add category. The field was left blank.");
      //Alert.alert("Error", "Failed to add category. The field was left blank.");
    }
    setEditTime(false);

  };

  const editUser = () => {
    setEditTime(true)
  }


  useEffect(() => {
    getUser();
  });

  return (

    <View style={styles.outerContainer}>

      <View style={styles.heading}>
        <Appbar.Header style={{
          width: 400,
        }}>
          <Appbar.Content title="Profile"/>
        </Appbar.Header>
      </View>

      <View style={styles.container}>
          <View style={styles.top}>
            <Avatar.Icon 
                size={64} 
                icon="account"
                style={{
                    alignSelf: 'center',
                    marginBottom: 20,
                }} 
            />
            {isLoading ? (<View></View>) : (
              <View>
                <View style={styles.row}>
                  <Text style={styles.label}>Name:</Text>
                  <TextInput
                    //label="Name:"
                    style={styles.input}
                    value={editTime ? (name) : (dataUser[0].name)}
                    editable={editTime}
                    //placeholder={dataUser[0].name}
                    onChangeText={name => setName(name)}
                  />
                </View>

                <View style={styles.row}>
                  <Text style={styles.label}>Budget:</Text>
                  <TextInput
                    //label="Budget:"
                    style={styles.input}
                    value={editTime ? (budget) : (dataUser[0].budget)}
                    editable={editTime}
                    //placeholder={dataUser[0].budget}
                    onChangeText={budget => setBudget(budget)}
                  />
                </View>
                {editTime ? 
                (<Button style={{marginTop: 20}} mode="contained" onPress={updateUser}>Save Profile</Button>) 
                : 
                (<Button style={{marginTop: 20}} mode="outlined" onPress={editUser}>Edit Profile</Button>) }
  
              </View>
            )}
          </View>

          <View style = {styles.addNew}> 
            <Portal>
              <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
                  <View>
                    <Text style={styles.label}>Current Categories:</Text>
                    <Text style={styles.input}>
                      {userCat.map((c, index) => (
                        <Text key={index}>{c.cat}, </Text>
                      ))}
                      </Text>
                  </View>
                <View style={{marginTop: 20}}>
                  <TextInput
                    label="New Category"
                    style={styles.inputNew}
                    value={cat}
                    onChangeText={cat => setCat(cat)}
                  />
                  <Button mode="contained" onPress={addCategory}>
                    Add Category
                  </Button>
                </View>
                
              </Modal>
            </Portal>

              <Button style={{marginTop: 20}} mode="contained" onPress={showModal}>
                Add New Category
              </Button>
          </View>
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
    top: {
      flex: 6,
    },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 330,
      },
      label: {
        fontSize: 16,
        marginBottom: 8,
        flex: 1,
      },
      input: {
        flex: 3,
        paddingTop: 5,
        paddingBottom: 5,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
      },
      addNew: {
        flexDirection: 'column',
        height: 120,
        flex: 4,
        justifyContent: 'flex-end'
      },
      inputNew: {
        flex: 3,
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
        height: 'auto',
        justifyContent: 'space-between',
      },

});

export default Profile;