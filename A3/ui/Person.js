import React, {useState, useEffect} from 'react'; 
import { Avatar, TextInput, Checkbox, Text, Button, Switch, HelperText, RadioButton, SegmentedButtons } from 'react-native-paper';
import { StyleSheet, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Person = props => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [value, setValue] = React.useState('');
    const [valueRB, setValueRB] = React.useState('never');

    const [nameDB, setNameDB] = React.useState("");
    const [emailDB, setEmailDB] = React.useState("");
    const [valueDB, setValueDB] = React.useState('');
    const [valueRBDB, setValueRBDB] = React.useState('');

    submitInfo = async () => {
        if (name == "") {
            Alert.alert("Error: Cannot Save", "Name field was blank", [{text: 'OK', onPress: () => console.log('OK Pressed')}])
            setName(nameDB);
        } else if (email == ""){
            Alert.alert("Error: Cannot Save", "Email field was blank", [{text: 'OK', onPress: () => console.log('OK Pressed')}])
            setEmail(emailDB);
        } else {
            try{
                setNameDB(name);
                await AsyncStorage.setItem('name', name);
                setEmailDB(email);
                await AsyncStorage.setItem('email', email);
                setValueDB(value);
                await AsyncStorage.setItem('value', value);
                setValueRBDB(valueRB);
                await AsyncStorage.setItem('valueRB', valueRB);
            } catch (err) {
                console.log(err)
            }
        }
    }

    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        try {
            const valueName = await AsyncStorage.getItem('name');
            const valueEmail = await AsyncStorage.getItem('email');
            const valueValue = await AsyncStorage.getItem('value');
            const valueValueRB = await AsyncStorage.getItem('valueRB');
          if (valueName !== null) {
            setNameDB(valueName);
            setName(valueName);
          }
          if (valueEmail !== null) {
            setEmailDB(valueEmail);
            setEmail(valueEmail);
          }
          if (valueValue !== null) {
            setValueDB(valueValue);
            setValue(valueValue);
          }
          if (valueValueRB !== null) {
            setValueRBDB(valueValueRB);
            setValueRB(valueValueRB);
          }

        } catch (e) {
          // error reading value
        }
      };

      const hasErrors = () => {
        return !email.includes('@');
      };


    return (
        <View style={styles.personContainer}>

            <Avatar.Icon 
            size={64} 
            icon="account"
            style={{
                alignSelf: 'center',
                marginBottom: 20,
            }} 
            />

            <TextInput
                label="Name"
                value={name}
                onChangeText={name => setName(name)}
                style={{
                    marginBottom: 10,
                }} 
            />


            <View style={{
                    marginBottom: 10,
            }} >
                <TextInput
                label="Email"
                value={email}
                onChangeText={email => setEmail(email)}
                />
                <HelperText type="error" visible={hasErrors()}>
                    Email address is invalid!
                </HelperText>

            </View>
            

            <Text
                style={{
                    marginBottom: 5,
                }} >
                Account Type:
            </Text>
            
            <SegmentedButtons
                value={value}
                onValueChange={setValue}
                buttons={[
                {
                    value: 'personal',
                    label: 'Personal',
                },
                {
                    value: 'professional',
                    label: 'Professional',
                },
                ]}
                style={{
                    width: 300,
                    alignSelf: 'center',
                }}
            />
            

            <Text style={{
                    marginTop: 20,
                }}>
                    Email Newsletter Frequency:
            </Text>
            <RadioButton.Group onValueChange={newValue => setValueRB(newValue)} value={valueRB}>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                    <RadioButton value="weekly" />
                    <Text>Weekly</Text>
                </View>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                    <RadioButton value="monthly" />
                    <Text>Monthly</Text>
                </View>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                    <RadioButton value="never" />
                    <Text>Never</Text>
                </View>
            </RadioButton.Group>

            
            <Button 
                mode="contained" 
                onPress={() => submitInfo()}
                style={{
                    marginTop: 20,
                    width: 100,
                    alignSelf: 'flex-end',
                }}>
                SAVE
            </Button>

            
        </View>
    );
}

const styles = StyleSheet.create({
    personContainer: {
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
});

export default Person;

