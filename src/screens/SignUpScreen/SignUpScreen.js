/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Edited by: James Worcester on 04/09/2022 (Sprint 8)
Refactored by James Worcester on 14/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: SignUpScreen
*/

/*
Purpose: 
1. Screen to allow the user to create an account or navigate to the SignInScreen
*/

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
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

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //regex (regular expression) constant to check if the email is in the correct format. WILL NEED TO BE CHANGED/UPDATED

const SignUpScreen = () => {
    const {control, handleSubmit, watch} = useForm(); 
    const pwd = watch('password'); //watch the password being entered in the 'password' PersonalisedInput
    const navigation = useNavigation();
    const {height} = useWindowDimensions(); 

    const onRegisterPressed = async (data) => {
        const {email, password} = data;
            // BELOW: very poor quality workaround function to test if the Amazon Aurora database compute ability has spun up and is available before adding a user to the Cognito user pooland duplicating their userSub and email to the SQL database.
            // Current workflow requires Cognito signup then duplication with Cognito's auto-generated userSub id, which could also easily lead to the user pool and database being out of sync if the duplicateUser() function below fails, causing
            // a user's account to be created in Cognito but not in the database, which is a critical error that would stop the user from being able to log in.
            async function testDBConnection() { 
                try
                {
                    const testDB = await API.graphql(graphqlOperation(queries.listSubscriptions)) //test the database connection by attempting to query the database
                    try {
                        const { userSub } = await Auth.signUp({ //uses AWS Amplify to attempt to sign in using the entered email address and passwords
                            username: email,
                            password,
                        });

                        const userDetails = {
                            id: userSub,
                            email: email,
                            first_login: 1
                        }
                        const duplicateUserIdEmail = await API.graphql(graphqlOperation(mutations.createUserDuplicateIdEmail, {input: userDetails})); //duplicates the logged in user's userSub and email to the User table of the database
                        navigation.navigate('ConfirmEmail', {email})
                    }
                    catch(e)
                    {
                        Alert.alert('Error', e.message)
                    }
                }
                catch(e)
                {
                    Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
                }
            }
        testDBConnection()
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    return (
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: height, padding: 20}}>
                <Image
                    source={Logo}
                    style={[styles.logo, {height: height * 0.3}]}
                    resizeMode="contain"
                />
                <Text style={styles.title}>
                    Create an account
                </Text>

                <PersonalisedInput
                    name="email"
                    control={control}
                    placeholder="Email"
                    rules={{
                        required: 'Email is required',
                        pattern: 
                        {
                            value: EMAIL_REGEX,
                            message: 'Email is invalid'
                        }
                    }}
                />

                <PersonalisedInput
                    name="password"
                    control={control}
                    secureTextEntry={true}
                    placeholder="Password"
                    rules={{
                        required: 'Password is required',
                        minLength: {value: 8,
                        message: 'Password must be at least 8 characters long',
                    },
                        maxLength: {
                        value: 30,
                        message: "Password must be less than 30 characters long" 
                    }
                    }}
                />

                <PersonalisedInput
                    name="password-repeat"
                    control={control}
                    secureTextEntry={true}      
                    placeholder="Repeat Password"
                    rules={{
                        required: 'Repeat Password is required',
                        validate: value => value === pwd || 'Passwords do not match',
                      }}

                />

                <PersonalisedButton 
                    text="Register"
                    onPress={handleSubmit(onRegisterPressed)}
                />

                <PersonalisedButton
                    text="Have an account? Sign in"
                    onPress={onSignInPressed}
                    type="THIRD"
                />
            </View>
        </ScrollView>
    );
};

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

export default SignUpScreen