/*
Programmer: James Worcester
Created by: James Worcester on 15/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: TeamScreen
*/

/*
Purpose: 
1. Screen to display a list of teams 
*/

import React from 'react'
import { Header } from "@rneui/themed";
import { FlatList } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { View, Alert} from 'react-native';
import {useEffect, useState} from "react";
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
//import ListItem
import TeamListItem from '../../components/TeamListItem/Index';

export default function TeamScreen() {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const getTeams = async () => {
            try {
                const teamData = await API.graphql(graphqlOperation(queries.listTeams)); //get all teams and store in the teamData array
                setTeam(teamData.data.listTeams); //set team state to teamData.data.listItems
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
            renderItem = {({item}) => <TeamListItem team={item}/>}
            keyExtractor = {(item) => item.id}
        />
        </View>    
    )
}

export default TeamScreen