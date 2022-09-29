/*
Programmer: James Worcester
Created by: James Worcester on 16/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: AddTeamMember
*/

/*
Purpose: 
1. Screen to display a Flatist of all users in the database
2. When the user clicks on a user, they are navigated to the AddTeamMembersListItem component for that user, then asked if they want to add that user to the team
*/

import React from 'react'
import { Header } from "@rneui/themed";
import { FlatList } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useEffect, useState} from "react";
import { useRoute } from '@react-navigation/native';
//import ListItem
import AddTeamMemberListItem from '../../components/AddTeamMemberListItem/Index';
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';

export default function AddTeamMember() {
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const route = useRoute(); //route passed parameters from the previous screen (SignUp)
    const [user, setUser] = useState([]);

    const team_id = route.params.team_id;
    const team_name = route.params.name;

    useEffect(() => {
        const getUsers = async () => {
            try {
                const userData = await API.graphql(graphqlOperation(queries.listUsers)); //get all users in the database and store in the userData array
                setUser(userData.data.listUsers); //set the user state userData.data.listUsers
            }
            catch(e)
            {
                Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
            }
        }
        getUsers();
    }, []);

    return (
        <View >
            <Header // Header of the screen 
            backgroundColor='#051C60'
            leftComponent={{ color: '#fff' }}
            centerComponent={{text:'Add User to Team', style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>

        <FlatList 
            data={user}
            renderItem = {({item}) => <AddTeamMemberListItem user={item} teamId={team_id} teamName={team_name} />}
            keyExtractor = {(item) => item.id}
        />

        </View>
        
    )
}

export default AddTeamMember