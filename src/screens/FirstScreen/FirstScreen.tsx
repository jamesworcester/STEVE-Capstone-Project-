/*
Programmer: James Worcester
Created by: James Worcester on 15/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: FirstScreen
*/

/*
Purpose: 
1. Home Screen to display a list of surveys that have been assigned to the logged in user, and allow them to answer them
*/

import React from 'react'
import { Header } from "@rneui/themed";
import { FlatList } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Auth } from 'aws-amplify';
import {useEffect, useState} from "react";
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
//import ListItem
import FirstScreenListItem from '../../components/FirstScreenListItem/Index';

export default function FirstScreen() {
    const [survey, setSurvey] = useState([]);

    useEffect(() => {
        const getSurveys = async () => {
            try {    
                const user = await Auth.currentAuthenticatedUser();
                const { username } = user; //get the id (Cognito username) of the current user
                const assignedSurveys = await API.graphql(graphqlOperation(queries.listAssigned_SurveysFORUser, {assigned_to: username})) //get all surveys assigned to the current user and store in the assignedSurveys array
                const assignedSurveyData = assignedSurveys.data.listAssigned_SurveysFORUser; //slim down the assigned_Surveys array to just the data
                setSurvey(assignedSurveyData); //set survey state to the assignedSurveyData
            }
            catch(e)
            {
                Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
            }
        }
        getSurveys();   
    }, []);

    return (
        <View >
            <Header
            backgroundColor='#051C60'
            leftComponent={{ color: '#fff' }}
            centerComponent={{text:'Home', style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>
            <Text style={styles.title}>Assigned Surveys</Text>

            <FlatList 
                data={survey}
                renderItem = {({item}) => <FirstScreenListItem survey={item}/>} //display all the Chatlistitem components (its also understanded as a channel)here
                keyExtractor = {(item) => item.id} // this is id for every single channel 
            />
        </View>
    )
}

const styles  = StyleSheet.create({
    ImageBackground : {
        width : '100%',
        height : '100%'
    },

    mainText : {
        fontSize : 25,
        fontStyle : 'italic',
        marginTop : 100,
        marginLeft: 80,
        justifyContent : 'center',
        alignItems : 'center',
        color : '#E6E6FA',
    },

    mainTextBlack : {
        fontSize : 25,
        fontStyle : 'italic',
        marginTop : 100,
        marginLeft: 80,
        justifyContent : 'center',
        alignItems : 'center',
        color : '#000000',
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        marginBottom: 10
    },
    
})

export default FirstScreen