/*
Programmer: James Worcester
Created by: James Worcester on 06/09/2022 (Sprint 9)
*/
//SignInScreen users are navigated to from App.js as well as being able to return to from many different screens. Allows users to sign in or navigate to Sign Up or reset their password
//react-native imports
import React, {useState} from 'react';
import { View, Text , Image , StyleSheet, useWindowDimensions, ScrollView, Alert} from 'react-native';
//@react-navigation/native import
import { useNavigation } from '@react-navigation/native';
//react-hook-form import for easy form validation https://react-hook-form.com/
import {useForm, Controller} from 'react-hook-form';
//AWS Amplify import
import { API, Auth, AWSPinpointProvider, graphqlOperation } from 'aws-amplify';
//user defined component imports
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
//user defined logo import
import Logo from '../../../assets/images/planit_nri_v_navy.png';
//user defined API import
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { useRoute } from '@react-navigation/native';

//define a constant lambda function called SignInScreen that creates a logo, two CustomInputs and three CustomIButtons and allows the user to sign in or navigate to sign up or reset their password
const AdminToolsScreen = () => {

    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const {height} = useWindowDimensions(); //sets the height of the window
    const [loading, setLoading] = useState(false); //sets loading
    const {control, handleSubmit, formState: {errors}} = useForm(); //use form from react-hook-form

    const onCreateTeamPressed =  () => { //asynchronous lambda function that checks if there is a request that is still loading, then attempts to sign in
        navigation.navigate('CreateTeam');
    }

    const onViewTeamsPressed =  () => { //asynchronous lambda function that checks if there is a request that is still loading, then attempts to sign in
        async function fetchTeams() {
            try
            {
                const teams = await API.graphql(graphqlOperation(queries.listTeams)); //duplicates the userSub and email to the database
                //console.log(teams)
                navigation.navigate('ViewTeams', {teams: teams});
            }
            catch(e)
            {
                Alert.alert('Error', e.message); //if an error occurs, catch it and throw up an alert with the contents of the error
                //Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
            }
        }
        fetchTeams();
    }

    

    //return the user defined components from CustomInput and CustomButton
    return (
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: height, padding: 20}}>

                <Text style={styles.title}>
                    Administration
                </Text>

                <CustomButton //Sign In Button
                text={"Create Team"}
                onPress={handleSubmit(onCreateTeamPressed)}
                />

                <CustomButton //Resend Code Button
                text="View Teams"
                onPress={onViewTeamsPressed}
                type="SECONDARY"
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
//export the SignInScreen lambda function
export default AdminToolsScreen