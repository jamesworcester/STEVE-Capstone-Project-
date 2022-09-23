/*
Programmer: Hung
Programmer: James Worcester
Edited by: James Worcester on 16/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: PublicProfileScreen
*/

/*
Purpose: 
1. Screen to display the public profile of a user after clicking on their Flatlist item from the UserScreen
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
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useEffect, useState} from "react";
import { useRoute } from '@react-navigation/native';
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';

export default function PublicProfileScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const id = route.params.id;
        const [userDetails, setUserDetails] = useState([]);
    
        useEffect(() => {
            const getUser = async () => {
                try {
                    const userData = await API.graphql(graphqlOperation(queries.getUser, {id: id})); //get the user details of the user
                    setUserDetails(userData.data.getUser);
                }
                catch(e)
                {
                    Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
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
                <Avatar source={placeholder_user} size ={'xlarge'} rounded />
                <Text style = {style.userName}>{userDetails.first_name+" "+userDetails.last_name}</Text>
            </View>
            <Divider style = {{marginTop : 30, marginBottom:20}} 
            subHeader = {'ABOUT ME'} subHeaderStyle = {{marginLeft:10}}/>
            <TextInput style = {style.textDescription}
                multiline
                value={userDetails.email}
            />
        </View>
    )
}

export default PublicProfileScreen