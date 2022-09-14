/*
Programmer: James Worcester
Created by: James Worcester on 06/09/2022 (Sprint 9)
Refactored by: James Worcester on 13/09/2022 (Sprint 9)
*/
//Screen to display tools for administrators
import React from 'react';
import { View, Text , StyleSheet, useWindowDimensions, ScrollView, Alert} from 'react-native';
//@react-navigation/native import
import { useNavigation } from '@react-navigation/native';
//react-hook-form import for easy form validation https://react-hook-form.com/
import {useForm} from 'react-hook-form';
//AWS Amplify import
import { API, Auth, graphqlOperation } from 'aws-amplify';
//user defined component imports
import PersonalisedButton from '../../components/PersonalisedButton';
//user defined API import
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { useRoute } from '@react-navigation/native';

const AdminToolsScreen = () => {

    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const {height} = useWindowDimensions(); //sets the height of the window
    const {control, handleSubmit, formState: {errors}} = useForm(); //use form from react-hook-form

    const onCreateTeamPressed =  () => {
        navigation.navigate('CreateTeam');
    }

    const onViewTeamsPressed =  () => {
        async function fetchTeams() {
            try
            {
                const teams = await API.graphql(graphqlOperation(queries.listTeams)); //list teams from database
                navigation.navigate('ViewTeams', {teams: teams}); //navigate to ViewTeams screen and pass the teams data
            }
            catch(e)
            {
                Alert.alert('Error', e.message); //if an error occurs, catch it and throw up an alert with the contents of the error
            }
        }
        fetchTeams();
    }

    return (
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: height, padding: 20}}>

                <Text style={styles.title}>
                    Administration
                </Text>

                <PersonalisedButton
                text={"Create Team"}
                onPress={handleSubmit(onCreateTeamPressed)}
                />

                <PersonalisedButton
                text="View Teams"
                onPress={onViewTeamsPressed}
                type="SECOND"
                />

            </View>
        </ScrollView>
    );
};

//create a constant called styles that creates a CSS StyleSheet with CSS styling
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        marginBottom: 10
    },
})

export default AdminToolsScreen