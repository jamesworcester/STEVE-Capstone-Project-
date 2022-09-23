/*
Programmer: James Worcester
Created by: James Worcester on 16/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: UserScreen
*/

/*
Purpose: 
1. Screen to display the User Directory
2. Each user is clickable and navigates to the PublicProfile Screen for that user
*/

import React from 'react'
import { Header } from "@rneui/themed";
import { FlatList } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import { View } from 'react-native';
import {useEffect, useState} from "react";
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
//import ListItem
import UserListItem from '../../components/UserListItem/Index';

export default function UserScreen() {
    const [user, setUser] = useState([]);
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
            <Header
            backgroundColor='#051C60'
            leftComponent={{ color: '#fff' }}
            centerComponent={{text:'Users', style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>

            <FlatList 
                data={user}
                renderItem = {({item}) => <UserListItem user={item}/>}
                keyExtractor = {(item) => item.id}
            />
        </View>
        
    )
}

export default UserScreen