/*
Programmer: James Worcester
Created by James Worcester on 27/09/2022 (Sprint 10)
*/

/*
Name: ViewSurveysWithResultsScreen
*/

/*
Purpose: 
1. Screen to view a Flatlist of all surveys that have been answered at least once
*/

import React from 'react'
import { Header } from "@rneui/themed";
import { FlatList } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { Alert, View } from 'react-native';
import {useEffect, useState} from "react";
//user defined API imports
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
//import ListItem
import SurveysWithResultsListItem from '../../components/SurveysWithResultsListItem/Index';

export default function ViewSurveysWithResultsScreen() {
    const [survey, setSurvey] = useState([]);
    useEffect(() => {
        const getSurveys = async () => {
            try {
                const uniqueSurveys = await API.graphql(graphqlOperation(queries.listAssigned_SurveysWithDistinctsurvey_idAnswered)) //get all surveys from AssignedSurveys with a distinct survey_id and store in the uniqueSurveys array
                const surveyData = [];
                const surveyDataStripped = [];

                for(let i = 0; i < uniqueSurveys.data.listAssigned_SurveysWithDistinctsurvey_idAnswered.length; i++) //for each survey in the uniqueSurveys array
                {
                    surveyData[i] = await API.graphql(graphqlOperation(queries.getSurvey, {id: uniqueSurveys.data.listAssigned_SurveysWithDistinctsurvey_idAnswered[i].survey_id})); //get the survey data for that survey and store it in the surveyData array
                    surveyDataStripped[i] = surveyData[i].data.getSurvey; //strip down the data to make it easier to use
                    console.log(surveyDataStripped[i].id);
                }
                setSurvey(surveyDataStripped);
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
                centerComponent={{text:'All Surveys', style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>

            <FlatList 
                data={survey}
                renderItem = {({item}) => <SurveysWithResultsListItem survey={item} />}
                keyExtractor = {(item) => item.id}
            />
        </View>
    )
}

export default ViewSurveysWithResultsScreen