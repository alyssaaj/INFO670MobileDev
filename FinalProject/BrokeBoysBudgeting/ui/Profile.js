import React, { useState, useEffect } from 'react';
import { View, StyleSheet} from 'react-native';
import { Avatar, TextInput, Appbar, Text, Button } from 'react-native-paper';


const Profile = () => {
  const [category, setCategory] = useState('');

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

              <View style={styles.row}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.input}>Alyssa</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Budget:</Text>
                <Text style={styles.input}>$1000</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Categories:</Text>
                  <Text style={styles.input}>Food, Fun, Household, Transportation, Utilities</Text>
              </View>
          </View>

          <View style = {styles.addNew}>
                <TextInput
                  label="New Category"
                  style={styles.inputNew}
                  value={category}
                  onChangeText={category => setCategory(category)}
                />
                <Button mode="contained" onPress={() => console.log('Pressed')}>
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
        width: 360,
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
        paddingTop: 5,
        maxHeight: 70,
        paddingBottom: 5,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        width: 300,
      },

});

export default Profile;