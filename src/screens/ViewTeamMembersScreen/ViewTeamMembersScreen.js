/*
Programmer: James Worcester
Created by: James Worcester on 07/09/2022 (Sprint 9)
*/
//SignUpScreen users are navigated to after clicking on a 'SignUp' button that allows users to create a AWS iAM account in the project's user pool
//react-native imports
import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions, FlatList, ImageBackground} from 'react-native';
//@react-native/native import
import { useNavigation } from '@react-navigation/native';
//react-hook-form import for easy form validation https://react-hook-form.com/
import {useForm} from 'react-hook-form';
import { useRoute } from '@react-navigation/native';
//AWS Amplify import
import { Auth } from 'aws-amplify';
//user defined component imports
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
//user defined logo import
import Logo from '../../../assets/images/planit_nri_v_navy.png';
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { Header } from "@rneui/themed";
import { AntDesign, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'; 
import InputBox from "../../components/InputBox";
import TeamMembersListItem from '../../components/TeamListItem/Index';
//define a constant lambda function called SignUpScreen that creates three CustomInputs and two CustomButtons and allows the user to sign up for an account or navigate to sign into an account
const ViewTeamsScreen = () => {

    const route = useRoute(); //route passed parameters from the previous screen (SignUp)
    const {control, handleSubmit, watch} = useForm(); //use form from react-hook-form
    const pwd = watch('password'); //watch the password being entered in the 'password' CustomInput
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const {height} = useWindowDimensions(); //sets the height of the window

    //const teams = route.params.teams; 
    //const teamMembers = route.params.teams.data.listTeams; //retrieve the teams from the route
    // for (const obj of teams) {
    //     console.log(obj.id);
    //     console.log(obj.name)
    //     console.log(obj.description)
    //     console.log(obj.is_archived)
    // }

    const team_name = route.params.name;
    const team_id = route.params.id;
    const teamMembers = route.params.teamMembers;
    //console.log(teamMembers);
    
    //console.log(testarray);
    //console.log();
    //const teamMembers = route.params.teamMembers;

    console.log("LOL")

    const onBackPressed = () => { //if the 'Have an account? Sign in' button is clicked
        navigation.goBack(); //navigate back to the previous screen
    }

    console.log(teamMembers);

    return (
        
        <View >
            <Header 
            backgroundColor='#051C60'
            leftComponent={{ color: '#fff' }}
            centerComponent={{text: team_name+ " Members", style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>

        <FlatList 
            //data={ChatRooms}
            //data={teamMembers}
            renderItem = {({item}) => <TeamMembersListItem teamMember={item}/>}
            keyExtractor = {(item) => item.id}
        />

        {/* <CustomButton //
                text="Assign User to Team"
                onPress={onViewUsersPressed}
                type="SECONDARY"
                /> */}
        
        <CustomButton //Back Button
            text="Go Back"
            onPress={onBackPressed}
            type="TERTIARY"
                />
        </View>
        
    )

    // return (
    //     <View style={{ height: height, padding: 20, }}>
    //         <Text style={styles.title}>
    //             Teams
    //             </Text>
    //       <FlatList
    //         data={teams}
    //         //renderItem={({item}) => <Text style={styles.item}>{item.id}</Text>}
    //         renderItem={({item}) => <CustomButton text={item.name+"\n   "+item.description} type="TEAMS" onPress={onViewTeamMembersPressed} />}
    //       />


    //   );




      
};

//create a constant called styles that creates a CSS StyleSheet with CSS styling
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        alignSelf: 'center',
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },

})

//export the SignUpScreen lambda function
export default ViewTeamsScreen