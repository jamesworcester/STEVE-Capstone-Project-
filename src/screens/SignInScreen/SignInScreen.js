/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Edited by: James Worcester on 04/09/2022 (Sprint 8)
Refactored by James Worcester on 14/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)

/*
Name: SignInScreen
*/

/*
Purpose: 
1. Screen to allow the user to sign in, navigate to sign up or reset their password
*/

import React from 'react';
import { View, Text , Image , StyleSheet, useWindowDimensions, ScrollView, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
//user defined component imports
import PersonalisedInput from '../../components/PersonalisedInput';
import PersonalisedButton from '../../components/PersonalisedButton';
//user defined logo import
import Logo from '../../../assets/images/planit_nri_v_navy.png';
//user defined API import
import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';

const SignInScreen = () => {
    const navigation = useNavigation();
    const {height} = useWindowDimensions(); 
    const {control, handleSubmit, formState: {errors}} = useForm(); 

    const onSignInPressed = async (data) => {
        try{
            await Auth.signIn(data.email, data.password); //uses AWS Amplify to attempt to sign in using the entered email and password
            async function authenticate() { 
                let user = await Auth.currentAuthenticatedUser(); 
                const { username } = user; //retrieve and store the user's id (Cognito username) in the username variable
                try
                {
                    const current_user = await API.graphql(graphqlOperation(queries.getUser, {id: username})) //use the API to retrieve the user's details from the User table in the database
                    if(current_user.data.getUser.first_login != 0) //if the user has not logged in before
                    {
                        navigation.navigate('UpdateUser', {current_user: current_user}) //navigate to the UpdateUser screen
                    }
                    else //if the user has logged in before
                    {
                        navigation.navigate('Dashboard');
                    }
                }
                catch(e)
                {
                    Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
                }
            }
            authenticate()
        }
        catch(e)
        {
            Alert.alert('Login Failed', e.message);
        }
        
    }
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    }

    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
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
                    Sign In
                </Text>
                <PersonalisedInput
                    name="email"
                    placeholder="Email"
                    control={control}
                    rules={{required: 'Email is required'}}
                />
                <PersonalisedInput
                    name="password"
                    placeholder="Password"
                    control={control}
                    secureTextEntry={true}
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
            
                <PersonalisedButton //Sign In Button
                    text={"Sign In"}
                    onPress={handleSubmit(onSignInPressed)}
                    style = {styles.signInButton}
                />

                <PersonalisedButton //Forgot Password Button
                    text="Forgot password?"
                    onPress={onForgotPasswordPressed}
                    type="THIRD"
                />

                <PersonalisedButton //Sign Up Button
                    text="Don't have an account? Sign up"
                    onPress={onSignUpPressed}
                    type="THIRD"
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        marginBottom: 10
    },
})
//export the SignInScreen lambda function
export default SignInScreen