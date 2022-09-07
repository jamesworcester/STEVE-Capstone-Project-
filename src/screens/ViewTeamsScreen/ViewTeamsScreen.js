/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Edited by: James Worcester on 04/09/2022 (Sprint 8)
*/
//SignUpScreen users are navigated to after clicking on a 'SignUp' button that allows users to create a AWS iAM account in the project's user pool
//react-native imports
import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions} from 'react-native';
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

//define a constant lambda function called SignUpScreen that creates three CustomInputs and two CustomButtons and allows the user to sign up for an account or navigate to sign into an account
const ViewTeamsScreen = () => {

    const route = useRoute(); //route passed parameters from the previous screen (SignUp)
    const {control, handleSubmit, watch} = useForm(); //use form from react-hook-form
    const pwd = watch('password'); //watch the password being entered in the 'password' CustomInput
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const {height} = useWindowDimensions(); //sets the height of the window

    //const teams = route.params.teams; 
    const teams = route.params.teams.data.listTeams; //retrieve the teams from the route
    for (const obj of teams) {
        console.log(obj.name);
    }


    //console.log(teams)
    


    const onBackPressed = () => { //if the 'Have an account? Sign in' button is clicked
        navigation.goBack(); //navigate back to the previous screen
    }

    return (
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: height, padding: 20}}>
                <Text style={styles.title}>
                    Teams
                </Text>

                <CustomInput //Custom TextInput
                    name="name"
                    control={control}
                    placeholder="Team Name"
                    rules={{
                        required: 'Team Name is required', //sets the TextInput as required
                    }}
                />

                <CustomInput //Custom TextInput
                    name="description"
                    control={control}
                    placeholder="Description"
                    rules={{
                        required: 'Description is required', //sets the TextInput as required
                    }}
                />

                <CustomButton //Sign in Button
                    text="Go back"
                    onPress={onBackPressed}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
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