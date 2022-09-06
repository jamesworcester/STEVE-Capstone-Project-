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
const SignUpScreen = () => {

    const {control, handleSubmit, watch} = useForm(); //use form from react-hook-form
    const pwd = watch('password'); //watch the password being entered in the 'password' CustomInput
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const {height} = useWindowDimensions(); //sets the height of the window

    const onRegisterPressed = async (data) => { //asynchronous lambda function that attempts to create an account using the entered email, password and repeat password
        const {email, password} = data;
            // below: very poor quality workaround function to test if the Amazon Aurora database compute ability has spun up and is available before adding a user to cognito and duplicating their userSub and email to the SQL database. Current workflow requires
            // Cognito signup then duplication with Cognito's auto-genereated userSub id, which could also easily lead to the user pool and database being out of sync if the duplicateUser() function below fails, causing a user's account to be created in
            // Cognito but not in the database, which is a critical error
            async function testDBConnection() { 
                try
                {
                    const testDB = await API.graphql(graphqlOperation(queries.listSubscriptions)) //test the database connection by attempting to query the database
                    try {
                        const { userSub } = await Auth.signUp({ //uses AWS Amplify to attempt to sign in using the entered email address and passwords
                            username: email,
                            password,
                        });

                        const userDetails = { //stores userDetails for duplicateUser() function
                            id: userSub,
                            email: email,
                            first_login: 1
                        }
                        const duplicateUserIdEmail = await API.graphql(graphqlOperation(mutations.createUserDuplicateIdEmail, {input: userDetails})); //duplicates the userSub and email to the database
                        navigation.navigate('ConfirmEmail', {email}) //navigate to the ConfirmEmailScreen and pass the entered email address as a parameter
                    }
                    catch(e)
                    {
                        Alert.alert('Error', e.message); //if an error occurs, catch it and throw up an alert with the contents of the error
                    }
                }
                catch(e)
                {
                    Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
                }
            }
        testDBConnection() //call function
    }

    const onSignInPressed = () => { //if the 'Have an account? Sign in' button is clicked
        navigation.navigate('SignIn');
    }

    return (
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: height, padding: 20}}>
                <Image //Logo image
                    source={Logo}
                    style={[styles.logo, {height: height * 0.3}]}
                    resizeMode="contain"
                />
                <Text style={styles.title}>
                    Create an account
                </Text>

                <CustomInput //Custom TextInput
                    name="email"
                    control={control}
                    placeholder="Email"
                    rules={{
                        required: 'Email is required', //sets the TextInput as required
                        pattern: //The entered text must match the EMAIL_REGEX regex (regular expression) defined above or else it is invalid
                        {
                            value: EMAIL_REGEX,
                            message: 'Email is invalid'
                        }
                    }}
                />

                <CustomInput //Custom TextInput
                    name="password"
                    control={control}
                    secureTextEntry={true}
                    placeholder="Password"
                    rules={{
                        required: 'Password is required',
                        minLength: {value: 8,
                        message: 'Password must be at least 8 characters long', //sets the minimum password length on the client side to be 12 characters long, else there will be a handled error
                    },
                        maxLength: {
                        value: 30,
                        message: "Password must be less than 30 characters long" //sets the maximum password length on the client side to be 40 characters long, else there will be a handled error
                    }
                    }}
                />

                <CustomInput //Custom TextInput
                    name="password-repeat"
                    control={control}
                    secureTextEntry={true}      
                    placeholder="Repeat Password"
                    rules={{
                        required: 'Repeat Password is required', //sets the Repeat Password as required
                        validate: value => value === pwd || 'Passwords do not match', //validates if password-repeat matches password
                      }}

                />

                <CustomButton //Register Button
                    text="Register"
                    onPress={handleSubmit(onRegisterPressed)}
                />

                <CustomButton //Sign in Button
                    text="Have an account? Sign in"
                    onPress={onSignInPressed}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
};

//create a constant called styles that creates a CSS StyleSheet with CSS styling
const styles = StyleSheet.create({
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        marginBottom: 10,
    },
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
export default SignUpScreen