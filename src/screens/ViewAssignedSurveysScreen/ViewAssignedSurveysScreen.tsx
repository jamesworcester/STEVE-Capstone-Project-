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
import {useForm} from 'react-hook-form';
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


export default function ViewAssignedSurveysScreen() {
    const [survey, setSurvey] = useState([]);

    

    useEffect(() => {
        const getSurveys = async () => {
            try {
                {
                
                const uniqueSurveys = await API.graphql(graphqlOperation(queries.listAssigned_SurveysWithDistinctsurvey_id))
                const surveyData = [];
                const surveyDataStripped = [];

                
                console.log(uniqueSurveys.data.listAssigned_SurveysWithDistinctsurvey_id.length);
                for(let i = 0; i < uniqueSurveys.data.listAssigned_SurveysWithDistinctsurvey_id.length; i++)
                {
                    console.log(uniqueSurveys.data.listAssigned_SurveysWithDistinctsurvey_id[i].survey_id);
                    surveyData[i] = await API.graphql(graphqlOperation(queries.getSurvey, {id: uniqueSurveys.data.listAssigned_SurveysWithDistinctsurvey_id[i].survey_id}));
                    //console.log("TEST");
                    //console.log(surveyData[i]);
                    surveyDataStripped[i] = surveyData[i].data.getSurvey;
                    //console.log("TEST");
                    //console.log(surveyDataStripped[i]);
                }
                console.log(surveyDataStripped)
                setSurvey(surveyDataStripped);
                
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
            centerComponent={{text:'Assigned Surveys', style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>

        <FlatList 
            data={survey}
            renderItem = {({item}) => <AssignedSurveyListItem survey={item}/>} //display all the Chatlistitem components (its also understanded as a channel)here
            keyExtractor = {(item) => item.id} // this is id for every single channel 
        />

        </View>
        
    )
}

export default ViewAssignedSurveysScreen