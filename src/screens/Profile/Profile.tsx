/*
Programmer: Hung
Programmer: James Worcester
Edited by: James Worcester on 16/09/2022 (Sprint 9)
*/
import React from 'react'
import { Header, Avatar } from "@rneui/themed";
import { Octicons,FontAwesome } from '@expo/vector-icons'; 
import style from './styles';
import { Divider } from '@rneui/themed';
import { TextInput } from 'react-native-gesture-handler';
const ava = {uri: "https://pbs.twimg.com/profile_images/1482915501328465926/ubBPGeOT_400x400.jpg"}
import placeholder_user from '../../../assets/images/placeholder_user.png';
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

export default function Profile() {

    const navigation = useNavigation();
        const [userDetails, setUserDetails] = useState([]);
    
        useEffect(() => {
            const getUser = async () => {
                try {
                    let user = await Auth.currentAuthenticatedUser();
                    const { username } = user; //get the id (username in this case) of the current user

                    const userData = await API.graphql(graphqlOperation(queries.getUser, {id: username}));
                    setUserDetails(userData.data.getUser);
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
                <Text style = {style.userName}>{userDetails.first_name+" "+userDetails.last_name}</Text>
            </View>
            {/* <View style = {style.userLocation}>
                <FontAwesome name="location-arrow" size={20} color="black" />
                <Text>Latrobe Uni,Melbourne</Text>
            </View> */}
            <Divider style = {{marginTop : 30, marginBottom:20}} 
            subHeader = {'ABOUT ME'} subHeaderStyle = {{marginLeft:10}}/>
            <TextInput style = {style.textDescription}
                    //placeholder = {'Describe your bio here'}
                    multiline
                    value={userDetails.email}
                    //onChangeText = {setMessage}
                />
        </View>
    )
}

export default Profile