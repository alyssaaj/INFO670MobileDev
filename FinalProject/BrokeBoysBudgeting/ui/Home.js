import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Image } from 'react-native';
import { TextInput, Text, Button, Appbar, Modal, Portal } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';


const Home = () => {

  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');

  const [responseStatus, setResponseStatus] = useState('');
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [open, setOpen] = useState(false);
  const [cat, setCat] = useState(null);
  const [itemsDD, setItemsDD] = useState([]);

  const [expenses, setExpenses] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [left, setLeft] = useState();
  const [isLoading, setLoading] = useState(true);

  const [count, setCount] = useState(0);
  const [addC, setAddC] = useState(false);
  

  const addNewExpenseBtn = () => {
    getCategoriesByUser();
    showModal();
  };

  const getCategoriesByUser = async () => {
    try {
      const response = await fetch('https://www.cs.drexel.edu/~amj426/FP/getCategoriesByUser.php?user=1');
      const json = await response.json();
      setItemsDD(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };


  const getAmountLeft = async () => {
    console.log("here");

    try {
      const response = await fetch('https://www.cs.drexel.edu/~amj426/FP/getExpensesByUser.php?user=1');
      const json = await response.json();
      setExpenses(json);
    } catch (error) {
      console.error(error);
    } finally {
      var totalSpent = 0;
      for (const key in expenses) {
        totalSpent = totalSpent + Number(expenses[key].price);
      }
      console.log(totalSpent);
      try {
        const response = await fetch('https://www.cs.drexel.edu/~amj426/FP/getUser.php?id=1');
        const json = await response.json();
        setDataUser(json);
      } catch (error) {
        console.error(error);
      } finally {
          var amountLeft = 0;
          for (const key in dataUser) {
            amountLeft = Number(dataUser[key].budget) - totalSpent;
          }
          setLeft(amountLeft.toFixed(2));
          setLoading(false);
          if (count < 1){
            setCount(count + 1);
          }
        
      }

    }
  };


  const addExpense = () => {
    if(item != null && item !== '' && cat != null && cat !== '' && price != null && price !== ''){
      const url = `https://www.cs.drexel.edu/~amj426/FP/addExpense.php?user=1&item=${item}&category=${cat}&price=${price}`;
      fetch(url)
        .then(response => response.text())
        .then(data => {
          if (data === "1") {
            //setResponseStatus("Expense added successfully.");
            //Alert.alert("Success", "Expense added successfully.");
          } else {
            setResponseStatus("Failed to add expense.");
            Alert.alert("Error", "Failed to add expense.");
          }
          setItem('');
          setPrice('');
          setCat(null);
          setLeft(left-Number(price).toFixed(2));
          hideModal();
        })
        .catch(error => {
          setResponseStatus("Error: " + error.message + ", MORE: " + JSON.stringify(error));
          console.log(error);
          // Alert.alert("Error", "Error: " + error.message);
        });
    }
    else{
      setResponseStatus("Failed to add expense. A field was left blank.");
      Alert.alert("Error", "Failed to add expense. A field was left blank.");
    }
  };


  useEffect(() => {
    getAmountLeft();
  }, [count]);

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
            {isLoading ? 
            (<Text variant="headlineSmall" style={{marginTop: 30, marginBottom: 30}}>Calculating Amount Left...</Text>) : 
            (<Text variant="displaySmall" style={{marginTop: 30, marginBottom: 30}}>${left} Left</Text>)}
        
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
                  label="Item"
                  style={styles.inputNew}
                  value={item}
                  onChangeText={item => setItem(item)}
                />
                <DropDownPicker
                  schema={{
                    label: 'cat',
                    value: 'cat'
                  }}
                  open={open}
                  value={cat}
                  items={itemsDD}
                  setOpen={setOpen}
                  setValue={setCat}
                  setItems={setItemsDD}
                  style={{marginBottom: 10}}
                />
                <TextInput
                  label="Price"
                  style={styles.inputNewShort}
                  value={price}
                  onChangeText={price => setPrice(price)}
                />
                <Button style={{marginTop: 20}} onPress={addExpense} mode="contained">
                  Add Expense
                </Button>
              </Modal>
            </Portal>

              <Button style={{marginTop: 30}} mode="contained" onPress={addNewExpenseBtn}>
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
        padding: 0,
        maxHeight: 60,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        width: 300,
      },
      inputNewShort: {
        flex: 3,
        padding: 0,
        maxHeight: 60,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        width: 130,
      },
      containerStyle:{
        backgroundColor: 'white', 
        padding: 20,
        height: 400,
      },

});

export default Home;