/*
Programmer: James Worcester
Created by: James Worcester on 16/09/2022 (Sprint 9)
Edited by: Ali Alriyami on 27/09/2022
*/

import { Header } from "@rneui/themed";
import { FlatList } from 'react-native-gesture-handler';
import { View, Text, TextInput, StyleSheet} from 'react-native';
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import {React, useEffect, useState} from "react";
import UserListItem from '../../components/UserListItem/Index';

function UserScreen() {
    const [user, setUser] = useState([]);
    const [email, setEmail]= useState("");
    const [filteredUsers, setFilteredUsers]= useState([]);
    const users= filteredUsers;

    useEffect(() => {
        const getUsers = async () => {
            try {
                const userData = await API.graphql(graphqlOperation(queries.listUsers));
                setUser(userData.data.listUsers);
                setFilteredUsers(userData.data.listUsers);
            }
            catch(e)
            {
                console.log(e);
            }
        }
        getUsers();
    }, []);

    function searchUsers(val) {
      setEmail(val);
      setUser(users);
        setUser(oldUsers=> {
         return oldUsers.filter(User=> {return User.email.toLowerCase().includes(email.toLowerCase())});
        });
    }

const reset=()=> {
     setUser(users);
}

    return (
        <View >
            <Header // Header of the screen
            backgroundColor='#051C60'
            leftComponent={{ color: '#fff' }}
            centerComponent={{text:'Users', style: {color: '#E6E6FA', fontSize : 16},
            }}/>

       <TextInput style={stylesIn.textInputStyle} placeholder="Search for user(s) by email address..." value={email} onChangeText={(val)=> { searchUsers(val)}}/>
       <Text style={stylesIn.resetStyle} onPress={reset}>RESET USERS</Text>
        <FlatList
            data={ user }
            renderItem = {({item}) => <UserListItem user={item}/>} //display all the Chatlistitem components (its also understanded as a channel)here
            keyExtractor = {(item) => item.id} // this is id for every single channel
        />

        </View>

    )
}

const stylesIn = StyleSheet.create({
    textInputStyle: {
        height: 50,
        borderWidth: 2,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#051C60',
        backgroundColor: 'white'
    },
    resetStyle: {
            height: 25,
            borderWidth: 2,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            margin: 5,
            borderColor: '#051C60',
            backgroundColor: '#999999'
    }
});

export default UserScreen;