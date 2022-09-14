/*
Programmer: James Worcester
Created by: James Worcester on 07/09/2022 (Sprint 9)
Refactored by James Worcester on 14/09/2022 (Sprint 9)
*/
//Screen to view a list of clickable teams
//react-native imports
import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions, FlatList, ImageBackground} from 'react-native';
//@react-native/native import
import { useNavigation } from '@react-navigation/native';
//react-hook-form import for easy form validation https://react-hook-form.com/
import {useForm} from 'react-hook-form';
import { useRoute } from '@react-navigation/native';
//AWS Amplify import
import { Auth } from 'aws-amplify';
//user defined component imports
import PersonalisedInput from '../../components/PersonalisedInput';
import PersonalisedButton from '../../components/PersonalisedButton';
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { Header } from "@rneui/themed";
import { AntDesign, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'; 
import TeamListItem from '../../components/TeamListItem/Index';

const ViewTeamsScreen = () => {

    const route = useRoute(); //route passed parameters from the previous screen
    const {control, handleSubmit, watch} = useForm(); //use form from react-hook-form
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const {height} = useWindowDimensions(); //sets the height of the window

    const teams = route.params.teams.data.listTeams; //retrieve the teams from the route

    const onBackPressed = () => { //if the 'Have an account? Sign in' button is clicked
        navigation.goBack(); //navigate back to the previous screen
    }

    return (
        
        <View >
            <Header 
            backgroundColor='#051C60'
            leftComponent={{ color: '#fff' }}
            centerComponent={{text:'TEAMS', style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>

        <FlatList 
            data={teams}
            renderItem = {({item}) => <TeamListItem team={item}/>}
            keyExtractor = {(item) => item.id}
        />
        
        <PersonalisedButton //Back Button
            text="Go Back"
            onPress={onBackPressed}
            type="THIRD"
                />
        </View> 
    )  
};

//create a constant called styles that creates a CSS StyleSheet with CSS styling
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        alignSelf: 'center',
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },

})

export default ViewTeamsScreen