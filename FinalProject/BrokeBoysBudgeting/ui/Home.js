import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Image } from 'react-native';
import { TextInput, Text, Button, Appbar, Modal, Portal } from 'react-native-paper';


const Home = () => {
  const [expense, setExpense] = useState('');
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.heading}>
        <Appbar.Header style={{
            width: 400,
          }}>
            <Appbar.Content title="Home"/>
          </Appbar.Header>
      </View>
        
        <View style={styles.container}>
          <View style={styles.top}>
            <Text variant="displaySmall" style={{marginTop: 30, marginBottom: 30}}>$939.44 Left</Text>
            <Text variant="headlineSmall" style={{color: 'green'}}>You're doing great! Keep it up!</Text>
            {/* <Image
              style={styles.moneyFriend}
              source={require('../img/happy.png')}
            /> */}
          </View>
          
          <View style = {styles.addNew}>
            <Portal>
              <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
                <TextInput
                  label="New Expense"
                  style={styles.inputNew}
                  value={expense}
                  onChangeText={expense => setExpense(expense)}
                />
                <TextInput
                  label="Price"
                  style={styles.inputNewShort}
                  value={expense}
                  onChangeText={expense => setExpense(expense)}
                />
                <Button style={{marginTop: 20}} mode="contained">
                  Add Expense
                </Button>
              </Modal>
            </Portal>

              <Button style={{marginTop: 30}} mode="contained" onPress={showModal}>
                Add New Expense
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
    moneyFriend: {
      width: 195,
      height: 195,
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
        flex: 4,
        alignItems: 'center',
      },
      addNew: {
        flexDirection: 'column',
        height: 120,
        flex: 1,
        justifyContent: 'flex-end'
      },
      inputNew: {
        flex: 3,
        paddingTop: 5,
        maxHeight: 70,
        paddingBottom: 5,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        width: 300,
      },
      inputNewShort: {
        flex: 3,
        paddingTop: 5,
        maxHeight: 70,
        paddingBottom: 5,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        width: 130,
      },
      containerStyle:{
        backgroundColor: 'white', 
        padding: 20,
        height: 400,
      },

});

export default Home;