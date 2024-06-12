import React, { useState, useEffect, number } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import { TextInput, Text, Button, Appbar, DataTable } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Expenses = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);



  const getExpensesByUser = async () => {
    //console.log(global.currentUser);
    try {
      const response = await fetch('https://www.cs.drexel.edu/~amj426/FP/getExpensesByUser.php?user=1');
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
    getExpensesByUser();
  });


  return (
    <SafeAreaProvider>
      <View style={styles.outerContainer}>
      <View style={styles.heading}>
        <Appbar.Header style={{
            width: 400,
          }}>
            <Appbar.Content title="Expenses"/>
          </Appbar.Header>
      </View>
        <View style={styles.container}>
          <ScrollView>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Item</DataTable.Title>
              <DataTable.Title>Category</DataTable.Title>
              <DataTable.Title numeric>Price</DataTable.Title>
            </DataTable.Header>
            
              {isLoading ? (<View></View>) : (
              data.map((expense, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell>{expense.item}</DataTable.Cell>
                  <DataTable.Cell>{expense.category}</DataTable.Cell>
                  <DataTable.Cell numeric>{expense.price}</DataTable.Cell>
                </DataTable.Row>
              )))}
            
          </DataTable>
          </ScrollView>
        </View>
    </View>

    </SafeAreaProvider>
    
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
        flex: 6,
      },

});

export default Expenses;