import React, {useState} from 'react'; 
import { Avatar, TextInput, Checkbox, Text, Button, Switch, SegmentedButtons } from 'react-native-paper';
import { StyleSheet, View, Alert } from 'react-native';

const Person = props => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [value, setValue] = React.useState('');
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    function submitInfo () {
        if (name == "") {
            Alert.alert("Error: Cannot Save", "Name field is blank", [{text: 'OK', onPress: () => console.log('OK Pressed')}])
        } else if (email == ""){
            Alert.alert("Error: Cannot Save", "Email field is blank", [{text: 'OK', onPress: () => console.log('OK Pressed')}])
        } else {
            console.log("save")
        }
    
    }


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

            <TextInput
            label="Email"
            value={email}
            onChangeText={email => setEmail(email)}
            style={{
                marginBottom: 20,
            }} 
            />

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
            
            <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text>Private</Text>
                <Switch 
                value={isSwitchOn} 
                onValueChange={onToggleSwitch}
                />
            </View>

            
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

