/*
Programmer: James Worcester
Created by: James Worcester on 22/09/2022 (Sprint 10)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: AssignSurveyToTeamScreen
*/

/*
Purpose: 
1. Screen to display a Flatlist of teams that when clicked on, will navigate to the AssignSurveyToTeamScreen so the user can be prompted to confirm if they want to assign the survey to that team
*/


import React from 'react'
import { Header } from "@rneui/themed";
import { FlatList } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { View, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {useEffect, useState} from "react";
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
//import ListItem
import AssignSurveyToTeamListItem from '../../components/AssignSurveyToTeamListItem/Index';

export default function AssignSurveyToTeamScreen() {
    const route = useRoute();
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const getTeams = async () => {
            try {
                const teamData = await API.graphql(graphqlOperation(queries.listTeams)); //get all teams in the database and store in the teamData array
                setTeam(teamData.data.listTeams); //set the team state teamData.data.listTeams
            }
            catch(e)
            {
                Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
            }
        }
        getTeams();
    }, []);

    return (
        <View >
            <Header
            backgroundColor='#051C60'
            leftComponent={{ color: '#fff' }}
            centerComponent={{text:'TEAMS', style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>

        <FlatList 
            data={team}
            renderItem = {({item}) => <AssignSurveyToTeamListItem team={item} survey_id={route.params.survey_id}/>}
            keyExtractor = {(item) => item.id}
        />

        </View>
        
    )
}

export default AssignSurveyToTeamScreen