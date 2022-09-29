/*
Programmer: James Worcester
Created by: James Worcester on 15/09/2022 (Sprint 9)
*/
import React from 'react'
import { Header } from "@rneui/themed";
import { FlatList } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
//import TeamListItem from '../../components/TeamListItem/Index'; //import chatlistitem component so we can display it on a flatlist
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions} from 'react-native';
//@react-native/native import
import { useNavigation } from '@react-navigation/native';
//react-hook-form import for easy form validation https://react-hook-form.com/
//AWS Amplify import
import { Auth } from 'aws-amplify';
//user defined component imports
import PersonalisedInput from '../../components/PersonalisedInput';
import PersonalisedButton from '../../components/PersonalisedButton';
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import {useEffect, useState} from "react";
import AssignedSurveyListItem from '../../components/AssignedSurveyListItem/Index';
//react-hook-form import for easy form validation https://react-hook-form.com/
import {useForm, Controller} from 'react-hook-form';
import FirstScreenListItem from '../../components/FirstScreenListItem/Index';

function FirstScreen() {
    const [survey, setSurvey] = useState([]);

    useEffect(() => {
        const getSurveys = async () => {
            try {
                {
                console.log("test");
                const user = await Auth.currentAuthenticatedUser();
                const { username } = user; //get the id (username in this case) of the current user
                console.log(username);
                const assignedSurveys = await API.graphql(graphqlOperation(queries.listAssigned_SurveysFORUser, {assigned_to: username}))
                console.log(assignedSurveys)
                const assignedSurveyData = assignedSurveys.data.listAssigned_SurveysFORUser;
                console.log(assignedSurveyData);
                setSurvey(assignedSurveyData);
                }
            }
            catch(e)
            {
                console.log(e);
                //Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
            }
        }
        getSurveys();   
    }, []);



    return (
        <View >
            <Header // Header of the screen 
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