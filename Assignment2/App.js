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
  const [readCount, setReadCount] = useState(0);

  const Book = props => {
    return (
      <View style={styles.bookLayout}>
        <Text style={styles.bookT}>{props.title}</Text>

        <View style={styles.bookBtns}>
          <Button title="Read"  
                color ="#1446a0"
                onPress = {() => deleteBook(props.title, true)}
            />
          <Button title="x"
                color="#DB3069" 
                onPress = {() => deleteBook(props.title, false)}
            />
        </View>
        
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
  
  const deleteBook = (delTitle, wasRead) => {
    if(wasRead){
      setReadCount(readCount + 1);
    }
    let delIndex = titles.indexOf(delTitle);
    let newTitles = [...titles];
    newTitles.splice(delIndex, 1);
    setTitles(newTitles);
  }

  return (
    <View style={styles.bookListLayout}>
          <View style={styles.addNewBook}>
          <Text style={{fontSize: 18}}>Books Read: {readCount}</Text>
            <TextInput 
              style = {{borderWidth: 1, marginBottom: 10, backgroundColor: '#fff'}}
              placeholder="Enter the title of the book here..." 
              value={title} 
              onChangeText = { newTitle => setTitle(newTitle)}
              onSubmitEditing = {addBook}
              />
            <Button title="Add Book" 
              color="#478978"
              onPress = {addBook}
            />
          </View>
    
        <View style={styles.bookTitles}>
          <ScrollView >
            {titles.map( (title, index) => {
              return (<Book key={index} title={title} />) 
              }
            )}
          </ScrollView>
        </View>
        

    </View>
    
  );
  

}



const styles = StyleSheet.create({
   layout: {
    padding: 20,
    flex: 1,
    backgroundColor: '#C0D6DF',
    justifyContent: 'flex-start',
   },
   header: {
    paddingTop: 10,
    height: 50,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1446a0',
   },
   bookListLayout: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1
   },
   addNewBook: {
    paddingTop: 10,
    paddingBottom: 10,  
    height: 120,
   },
   bookTitles: {
    flex: 1
   },
   bookLayout: {
    flexDirection: 'row', 
    backgroundColor: '#DBE9EE', 
    alignItems: 'flex-start', 
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderBlockColor: 'black', 
    flex: 1,
    columnGap: 5,
   },
   bookT: {
    flex: 3,
   },
   bookBtns: {
    flexDirection: 'row',
    columnGap: 8,
    flex: 1,
   },
});