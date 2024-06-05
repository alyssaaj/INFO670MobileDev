import React, { useState, useEffect, number } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Text, Button, Appbar, DataTable } from 'react-native-paper';


const Expenses = () => {
  // const [page, setPage] = React.useState<number>(0);
  // const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  // const [itemsPerPage, onItemsPerPageChange] = React.useState(
  //   numberOfItemsPerPageList[0]
  // );

  const [items] = React.useState([
   {
     key: 1,
     item: 'Gas',
     category: 'Transportation',
     price: 43.05,
   },
   {
     key: 2,
     item: 'Pizza',
     category: 'Food',
     price: 17.51,
   },
  ]);

  // const from = page * itemsPerPage;
  // const to = Math.min((page + 1) * itemsPerPage, items.length);

  // React.useEffect(() => {
  //   setPage(0);
  // }, [itemsPerPage]);  






  return (
    <View style={styles.outerContainer}>
      <View style={styles.heading}>
        <Appbar.Header style={{
            width: 400,
          }}>
            <Appbar.Content title="Expenses"/>
          </Appbar.Header>
      </View>
        <View style={styles.container}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Item</DataTable.Title>
              <DataTable.Title>Category</DataTable.Title>
              <DataTable.Title numeric>Price</DataTable.Title>
            </DataTable.Header>

            {items.map((item) => (
              <DataTable.Row key={item.key}>
                <DataTable.Cell>{item.item}</DataTable.Cell>
                <DataTable.Cell>{item.category}</DataTable.Cell>
                <DataTable.Cell numeric>{item.price}</DataTable.Cell>
              </DataTable.Row>
            ))}

            {/* <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(items.length / itemsPerPage)}
              onPageChange={(page) => setPage(page)}
              label={`${from + 1}-${to} of ${items.length}`}
              numberOfItemsPerPageList={numberOfItemsPerPageList}
              numberOfItemsPerPage={itemsPerPage}
              onItemsPerPageChange={onItemsPerPageChange}
              showFastPaginationControls
              selectPageDropdownLabel={'Rows per page'}
            /> */}
          </DataTable>
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
        flex: 6,
      },

});

export default Expenses;