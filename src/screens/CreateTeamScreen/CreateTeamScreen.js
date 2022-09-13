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
//AWS Amplify import
import { Auth } from 'aws-amplify';
//user defined component imports
import PersonalisedInput from '../../components/PersonalisedInput';
import PersonalisedButton from '../../components/PersonalisedButton';
//user defined logo import
import Logo from '../../../assets/images/planit_nri_v_navy.png';
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

//define a constant lambda function called SignUpScreen that creates three CustomInputs and two CustomButtons and allows the user to sign up for an account or navigate to sign into an account
const CreateTeamScreen = () => {

    const {control, handleSubmit, watch} = useForm(); //use form from react-hook-form
    const pwd = watch('password'); //watch the password being entered in the 'password' CustomInput
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const {height} = useWindowDimensions(); //sets the height of the window

    const onCreateTeamPressed = async (data) => { //asynchronous lambda function that attempts to create an account using the entered email, password and repeat password
        const {name, description} = data;
            // below: very poor quality workaround function to test if the Amazon Aurora database compute ability has spun up and is available before adding a user to cognito and duplicating their userSub and email to the SQL database. Current workflow requires
            // Cognito signup then duplication with Cognito's auto-genereated userSub id, which could also easily lead to the user pool and database being out of sync if the duplicateUser() function below fails, causing a user's account to be created in
            // Cognito but not in the database, which is a critical error
                    try {
                        const teamDetails = { //stores userDetails for duplicateUser() function
                            name: name,
                            description: description,
                        }
                        const team = await API.graphql(graphqlOperation(mutations.createTeamAdmin, {input: teamDetails})); //create a team in the database
                        navigation.goBack() //navigate to the ConfirmEmailScreen and pass the entered email address as a parameter
                    }
                    catch(e)
                    {
                        console.log(e)
                        Alert.alert('Error', e.message); //if an error occurs, catch it and throw up an alert with the contents of the error
                    }
                }

    const onBackPressed = () => { //if the 'Have an account? Sign in' button is clicked
        navigation.goBack(); //navigate back to the previous screen
    }

    return (
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: height, padding: 20}}>
                <Text style={styles.title}>
                    Create a Team
                </Text>

                <PersonalisedInput //Custom TextInput
                    name="name"
                    control={control}
                    placeholder="Team Name"
                    rules={{
                        required: 'Team Name is required', //sets the TextInput as required
                    }}
                />

                <PersonalisedInput //Custom TextInput
                    name="description"
                    control={control}
                    placeholder="Description"
                    rules={{
                        required: 'Description is required', //sets the TextInput as required
                    }}
                />

                <PersonalisedButton //Register Button
                    text="Create Team"
                    onPress={handleSubmit(onCreateTeamPressed)}
                />

                <PersonalisedButton //Sign in Button
                    text="Go back"
                    onPress={onBackPressed}
                    type="THIRD"
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
export default CreateTeamScreen