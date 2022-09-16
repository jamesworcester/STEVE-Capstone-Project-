/*
Programmer: James Worcester
Created by: James Worcester on 16/09/2022 (Sprint 9)
*/
import React from 'react'
import { Header } from "@rneui/themed";
import { FlatList } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
//import TeamListItem from '../../components/TeamListItem/Index'; //import chatlistitem component so we can display it on a flatlist
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions} from 'react-native';
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
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import UserListItem from '../../components/UserListItem/Index';


export default function TeamMembersScreen() {
    const {control, handleSubmit, watch} = useForm(); //use form from react-hook-form
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const route = useRoute(); //route passed parameters from the previous screen (SignUp)
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const userData = await API.graphql(graphqlOperation(queries.listUsersInTeam, {team_id: route.params.team_id}));
                //console.log(userData)
                setUser(userData.data.listUsersInTeam);
            }
            catch(e)
            {
                console.log(e);
            }
        }
        getUsers();
    }, []);

    const onAddTeamMemberPressed = () => { //if the 'Have an account? Sign in' button is clicked
        navigation.navigate('AddTeamMember', {team_id: route.params.team_id});
    }

    return (
        <View >
            <Header // Header of the screen 
            backgroundColor='#051C60'
            leftComponent={{ color: '#fff' }}
            centerComponent={{text: route.params.name, style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>

        <FlatList 
            data={user}
            renderItem = {({item}) => <UserListItem user={item}/>} //display all the Chatlistitem components (its also understanded as a channel)here
            keyExtractor = {(item) => item.id} // this is id for every single channel 
        />

        <PersonalisedButton //Register Button
            text="Add Team Member"
            onPress={handleSubmit(onAddTeamMemberPressed)}
        />

        </View>
        
    )
}

export default TeamMembersScreen