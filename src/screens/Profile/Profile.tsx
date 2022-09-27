/*
Programmer: Hung
Programmer: James Worcester
Edited by: James Worcester on 16/09/2022 (Sprint 9)
Edited by: James Worcester on 24/09/2022 (Sprint 10)
*/

/*
Name: Profile
*/

/*
1. Screen to display the currently logged in user's profile
*/

import React from 'react'
import { Header, Avatar } from "@rneui/themed";
import { Octicons } from '@expo/vector-icons'; 
import style from './styles';
import { Divider } from '@rneui/themed';
import { TextInput } from 'react-native-gesture-handler';
const ava = {uri: "https://pbs.twimg.com/profile_images/1482915501328465926/ubBPGeOT_400x400.jpg"}
import placeholder_user from '../../../assets/images/placeholder_user.png';
import 'react-native-gesture-handler';
import { View, Text, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import {useEffect, useState} from "react";
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';

export default function Profile() {

    const navigation = useNavigation();
        const [userDetails, setUserDetails] = useState([]);
        const [userFirstName, setUserFirstName] = useState("");
        const [userLastName, setUserLastName] = useState("");
        const [userEmail, setUserEmail] = useState("");
    
        useEffect(() => {
            const getUser = async () => {
                try {
                    let user = await Auth.currentAuthenticatedUser();
                    const { username } = user; //get the id (Cognito username) of the current user

                    const userData = await API.graphql(graphqlOperation(queries.getUser, {id: username}));
                    setUserDetails(userData.data.getUser);
                    setUserFirstName(userData.data.getUser.first_name);
                    setUserLastName(userData.data.getUser.last_name);
                    setUserEmail(userData.data.getUser.email);
                }
                catch(e)
                {
                    console.log(e);
                }
            }
            getUser();
        }, []);

    return (
        <View>
            <Header 
                backgroundColor='#051C60'centerComponent={{text:'PROFILE', 
                style: {color: '#E6E6FA',fontSize:16}}}
                rightComponent={<Octicons name="sign-out" size={24} color="white" 
                onPress={() => {navigation.navigate('SignIn')}}/> }
            />
            <View style = {style.mainAva}>
                <Avatar source={placeholder_user} size ={'xlarge'}
                rounded
                />
                <Text style = {style.userName}>{userFirstName+" "+userLastName}</Text>
            </View>
            <Divider style = {{marginTop : 30, marginBottom:20}} 
            subHeader = {'ABOUT ME'} subHeaderStyle = {{marginLeft:10}}/>
            <TextInput 
                style = {style.textDescription}
                multiline
                value={userEmail}
            />
        </View>
    )
}

export default Profile