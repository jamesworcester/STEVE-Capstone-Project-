/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Edited by: James Worcester on 04/09/2022 (Sprint 8)
Refactored by James Worcester on 14/09/2022 (Sprint 9)
*/
//Screen to create a new Team
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
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';


const CreateTeamScreen = () => {

    const {control, handleSubmit, watch} = useForm(); //use form from react-hook-form
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const {height} = useWindowDimensions(); //sets the height of the window

    const onCreateTeamPressed = async (data) => { 
        const {name, description} = data;
                    try {
                        const teamDetails = { //stores teamDetails
                            name: name,
                            description: description,
                        }
                        const team = await API.graphql(graphqlOperation(mutations.createTeamAdmin, {input: teamDetails})); //create a team in the database
                        navigation.goBack(); //go back to the previous screen
                    }
                    catch(e)
                    {
                        console.log(e)
                        Alert.alert('Error', e.message); //if an error occurs, catch it and throw up an alert with the contents of the error
                    }
                }

    const onBackPressed = () => {
        navigation.goBack();
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

export default CreateTeamScreen