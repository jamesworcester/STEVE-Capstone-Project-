/*
Programmer: James Worcester
Created by: James Worcester on 16/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: TeamMembers
*/

/*
Purpose: 
1. Screen to display the members of a team
2. Members are clickable and will navigate to the Profile Screen of that member
*/

import React from 'react'
import { Header } from "@rneui/themed";
import { FlatList } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { Alert, View } from 'react-native';
import {useForm} from 'react-hook-form';
import PersonalisedButton from '../../components/PersonalisedButton';
import {useEffect, useState} from "react";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import UserListItem from '../../components/UserListItem/Index';
//import API & queries
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';

export default function TeamMembersScreen() {
    const {control, handleSubmit} = useForm(); 
    const navigation = useNavigation();
    const route = useRoute();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const userData = await API.graphql(graphqlOperation(queries.listUsersInTeam, {team_id: route.params.team_id})); //get all users in the database and store in the userData array
                setUser(userData.data.listUsersInTeam); //set the user state userData.data.listUsersInTeam
            }
            catch(e)
            {
                Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
            }
        }
        getUsers();
    }, []);

    const onAddTeamMemberPressed = () => { //if the 'Have an account? Sign in' button is clicked
        navigation.navigate('AddTeamMember', {team_id: route.params.team_id});
    }

    return (
        <View >
            <Header
            backgroundColor='#051C60'
            leftComponent={{ color: '#fff' }}
            centerComponent={{text: route.params.name, style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>

            <FlatList 
                data={user}
                renderItem = {({item}) => <UserListItem user={item}/>}
                keyExtractor = {(item) => item.id}
            />

            <PersonalisedButton
                text="Add Team Member"
                onPress={handleSubmit(onAddTeamMemberPressed)}
            />

        </View>
    )
}

export default TeamMembersScreen