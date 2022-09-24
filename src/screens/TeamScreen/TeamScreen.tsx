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

import TeamListItem from '../../components/TeamListItem/Index';


export default function TeamScreen() {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const getTeams = async () => {
            try {
                const teamData = await API.graphql(graphqlOperation(queries.listTeams));
                setTeam(teamData.data.listTeams);
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
            <Header // Header of the screen 
            backgroundColor='#051C60'
            leftComponent={{ color: '#fff' }}
            centerComponent={{text:'TEAMS', style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>

        <FlatList 
            data={team}
            renderItem = {({item}) => <TeamListItem team={item}/>} //display all the Chatlistitem components (its also understanded as a channel)here
            keyExtractor = {(item) => item.id} // this is id for every single channel 
        />

        </View>
        
    )
}

export default TeamScreen