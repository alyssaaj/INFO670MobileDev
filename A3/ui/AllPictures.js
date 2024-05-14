import React, {useState} from 'react'; 
import { Card, Text, Button } from 'react-native-paper';
import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import Picture from './Picture';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AllPictures = ({navigation}) => {
    return (
        <ScrollView style={styles.galleryContainer}>
            <View style={styles.rowsContainer}>
                <View style={[
                    styles.cardContainer
                ]}>
                    <Pressable onPress={() => navigation.navigate('Full Image', 
                        { 
                            title:"Ocean",
                            content:"Love the water!",
                            picLoc: require('../img/img1.jpg'),
                        }
                        )}>
                        <Picture title={"Ocean"} content={"Love the water!"} picLoc={require('../img/img1.jpg')}/>
                    </Pressable>
                </View>

                <View style={[
                    styles.cardContainer
                ]}>
                    <Pressable onPress={() => navigation.navigate('Full Image', 
                        { 
                            title:"Mountains",
                            content:"Best Views!!",
                            picLoc: require('../img/img2.jpg'),
                        }
                        )}>
                        <Picture title={"Mountains"} content={"Best Views!!"} picLoc={require('../img/img2.jpg')}/>
                    </Pressable>
                </View>
            </View>

            <View style={styles.rowsContainer}>
                <View  style={[
                    styles.cardContainer
                ]}>
                    <Pressable onPress={() => navigation.navigate('Full Image', 
                        { 
                            title:"Perspective",
                            content:"Look Up",
                            picLoc: require('../img/img3.jpg'),
                        }
                        )}>
                        <Picture title={"Perspective"} content={"Look Up"} picLoc={require('../img/img3.jpg')}/>
                    </Pressable>
                </View>

                <View style={[
                    styles.cardContainer
                ]}>
                    <Pressable onPress={() => navigation.navigate('Full Image', 
                        { 
                            title:"City Rat",
                            content:"Out in the streets",
                            picLoc: require('../img/img4.jpg'),
                        }
                        )}>
                        <Picture title={"City Rat"} content={"Out in the streets"} picLoc={require('../img/img4.jpg')}/>
                    </Pressable>
                </View>
            </View>

            <View style={styles.rowsContainer}>
                <View  style={[
                    styles.cardContainer
                ]}>
                    <Pressable onPress={() => navigation.navigate('Full Image', 
                        { 
                            title:"Tube Life",
                            content:"Together but alone",
                            picLoc: require('../img/img5.jpg'),
                        }
                        )}>
                        <Picture title={"Tube Life"} content={"Together but alone"} picLoc={require('../img/img5.jpg')}/>
                    </Pressable>
                </View>

                <View style={[
                    styles.cardContainer
                ]}>
                    <Pressable onPress={() => navigation.navigate('Full Image', 
                        { 
                            title:"City Lights",
                            content:"Part of something",
                            picLoc: require('../img/img6.jpg'),
                        }
                        )}>
                        <Picture title={"City Lights"} content={"Part of something"} picLoc={require('../img/img6.jpg')}/>
                    </Pressable>
                </View>
            </View>

            <View style={styles.rowsContainer}>
                <View  style={[
                    styles.cardContainer
                ]}>
                    <Pressable onPress={() => navigation.navigate('Full Image', 
                        { 
                            title:"Sunset",
                            content:"EOD",
                            picLoc: require('../img/img7.jpg'),
                        }
                        )}>
                        <Picture title={"Sunset"} content={"EOD"} picLoc={require('../img/img7.jpg')}/>
                    </Pressable>
                </View>

                <View style={[
                    styles.cardContainer
                ]}>
                    <Pressable onPress={() => navigation.navigate('Full Image', 
                        { 
                            title:"Spring Baby",
                            content:"White & Yellow",
                            picLoc: require('../img/img8.jpg'),
                        }
                        )}>
                        <Picture title={"Spring Baby"} content={"White & Yellow"} picLoc={require('../img/img8.jpg')}/>
                    </Pressable>
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    galleryContainer: {
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        flex: 1,
        flexDirection: 'column',
    },
    rowsContainer: {
        flex: 1, 
        flexDirection: 'row'
    },
    cardContainer: {
        flex: 1, 
        margin: 5,
    }
});

export default AllPictures;