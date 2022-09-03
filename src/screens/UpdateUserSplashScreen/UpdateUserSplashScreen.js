/*
Programmer: James Worcester
Edited by: James Worcester on 31/07/2022
*/
//SignUpScreen users are navigated to after clicking on a 'SignUp' button that allows users to create a AWS iAM account in the project's user pool
//react-native imports
import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions} from 'react-native';
//@react-native/native import
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
//react-hook-form import for easy form validation https://react-hook-form.com/
import {useForm} from 'react-hook-form';
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

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //regex (regular expression) constant to check if the email is in the correct format. WILL NEED TO BE CHANGED/UPDATED

//define a constant lambda function called SignUpScreen that creates three CustomInputs and two CustomButtons and allows the user to sign up for an account or navigate to sign into an account
const UpdateUserSplashScreen = () => {
    const route = useRoute(); //route passed parameters from the previous screen (SignUp)
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    //const {control, handleSubmit, watch} = useForm(); //use form from react-hook-form
    //const {height} = useWindowDimensions(); //sets the height of the window

    async function authenticatedWrapper() {
        try
        {
            let user = await Auth.currentAuthenticatedUser();
            const { username } = user;
            const current_info = await API.graphql(graphqlOperation(queries.getUser, {id: username}));
            navigation.navigate('UpdateUser', {current_info: current_info})
            //navigation.navigate('SignUp')
        }
        catch(e)
        {
            //Alert.alert('Oops', e.message);
            //Alert.alert('Oops', 'Test');
        }
    }
    authenticatedWrapper()

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Update User
                </Text>
            </View>
        </ScrollView>
    );
}

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
export default UpdateUserSplashScreen