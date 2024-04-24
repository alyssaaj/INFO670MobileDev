import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Keyboard } from 'react-native';

export default function App () {
  return (
    <View style={styles.layout}>
      <Text style={styles.header}>My TBR</Text>
      <BookList />
    </View>
  );

}

const BookList = () => {
  const [title, setTitle] = useState();
  const [titles, setTitles] = useState([]);

  const Book = props => {
    return (
      <View style={styles.bookLayout}>
        <Text>{props.title}</Text>

        <Button title="Read" 
              onPress = {() => deleteBook(props.title)}
          />
        <Button title="X" 
              onPress = {() => deleteBook(props.title)}
          />
      </View>
  
    );
  }

  const addBook = () => {
    if (title != null) {
      setTitles([...titles, title]);
      setTitle(null);
    }
    Keyboard.dismiss();
  }
  
  const deleteBook = (delTitle) => {
    let delIndex = titles.indexOf(delTitle);
    let newTitles = [...titles];
    newTitles.splice(delIndex, 1);
    setTitles(newTitles);
  }

  return (
    <View style={styles.bookListLayout}>
          <View>
            <TextInput 
              placeholder="Enter the title of the book here..." 
              value={title} 
              onChangeText = { newTitle => setTitle(newTitle)}
              onSubmitEditing = {addBook}
              />
            <Button title="Add" 
              onPress = {addBook}
            />
          </View>

        <ScrollView>
          {titles.map( (title, index) => {
            return (<Book key={index} title={title} />) 
            }
          )}
        </ScrollView>

    </View>
    
  );
  

}



const styles = StyleSheet.create({
   layout: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
   },
   bookListLayout: {
    flex: 1, 
    flexDirection: 'column',

   },
   bookLayout: {
    flex: 1, 
    flexDirection: 'row', 
    backgroundColor: 'skyblue', 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderBlockColor: 'pink',
   },
   header: {
    fontSize: 30,
    fontWeight: 'bold',
   }
});