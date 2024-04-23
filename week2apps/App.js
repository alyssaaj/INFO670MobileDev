import React, {useState} from 'react';
import {Text, View, Image, Button, FlatList} from 'react-native';

const Dog = props => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View> 
      <Image source={require("./img/dog.jpg")} style={{width:50, height: 50}}/>
      <Text>Hello, I am {props.name}, and I am {isHungry? "hungry" : "full"}.</Text>
      <Button 
        onPress={() =>{
          setIsHungry(false);
        }}
        title={isHungry? "Feed me!" : "Thank you"}
      />
    </View>
  );
}

const Dogs = () => {
  return (
    <View>
      <Text>Welcome all!</Text>
      <Dog name="Zara" />
      <Dog name="Abby" />
      <Dog name="Lucki" />
    </View>

  );
}

const DogList = () => {
  return (
    <View>
      <FlatList
      data = {[
        {name: "Zara"},
        {name: "Abby"},
        {name: "Lucky"},
      ]} 
      renderItem={({item}) => <Dog name={item.name} />}
      />
    </View>

  );
}

export default Dogs;
