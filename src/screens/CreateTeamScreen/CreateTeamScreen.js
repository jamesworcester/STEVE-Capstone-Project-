/*
Programmer: James Worcester
Created by: James Worcester on 04/09/2022 (Sprint 8)
Refactored by James Worcester on 14/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: CreateTeamScreen
*/

/*
Purpose: 
1. Screen to create a team
*/

//Screen to create a new Team
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, useWindowDimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
//user defined component imports
import PersonalisedInput from '../../components/PersonalisedInput';
import PersonalisedButton from '../../components/PersonalisedButton';
//user defined API imports
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';

const CreateTeamScreen = () => {

    const {control, handleSubmit, watch} = useForm();
    const navigation = useNavigation(); 
    const {height} = useWindowDimensions();

    const onCreateTeamPressed = async (data) => { 
        const {name, description} = data;
                    try {
                        const teamDetails = {
                            name: name,
                            description: description,
                        }
                        const team = await API.graphql(graphqlOperation(mutations.createTeamAdmin, {input: teamDetails})); //create a team in the Team table in the database
                        navigation.goBack(); //go back to the previous screen
                    }
                    catch(e)
                    {
                        Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
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

                <PersonalisedInput
                    name="name"
                    control={control}
                    placeholder="Team Name"
                    rules={{
                        required: 'Team Name is required', 
                    }}
                />

                <PersonalisedInput
                    name="description"
                    control={control}
                    placeholder="Description"
                    rules={{
                        required: 'Description is required',
                    }}
                />

                <PersonalisedButton
                    text="Create Team"
                    onPress={handleSubmit(onCreateTeamPressed)}
                />

                <PersonalisedButton
                    text="Go back"
                    onPress={onBackPressed}
                    type="THIRD"
                />
            </View>
        </ScrollView>
    );
};

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