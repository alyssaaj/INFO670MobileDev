import React, {useState} from 'react'; 
import { Card, Text } from 'react-native-paper';

const Picture = props => {
    return (
        <Card>
            <Card.Cover source={props.picLoc} />
            <Card.Content>
            <Text variant="titleLarge">{props.title}</Text>
            <Text variant="bodyMedium">{props.content}</Text>
            </Card.Content>
        </Card>
    );
}

export default Picture;
