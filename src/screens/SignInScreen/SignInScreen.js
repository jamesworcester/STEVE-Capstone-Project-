/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Edited by: James Worcester on 04/09/2022 (Sprint 8)
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

//define a constant lambda function called SignInScreen that creates a logo, two CustomInputs and three CustomIButtons and allows the user to sign in or navigate to sign up or reset their password
const SignInScreen = () => {

    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const {height} = useWindowDimensions(); //sets the height of the window
    const [loading, setLoading] = useState(false); //sets loading
    const {control, handleSubmit, formState: {errors}} = useForm(); //use form from react-hook-form

    const onSignInPressed = async (data) => { //asynchronous lambda function that checks if there is a request that is still loading, then attempts to sign in
        if (loading) {
            return;
        }
        try{
            await Auth.signIn(data.email, data.password); //uses AWS Amplify to attempt to sign in using the entered email and password
            async function authenticate() { //async function to authenticate the current user
                let user = await Auth.currentAuthenticatedUser(); //authenticate using Amazon Auth and store the details about the user in the user variable
                const { username } = user; //retrieve and store the user's id (username in this case) in the username variable
                try
                {
                    const navigationDecision = await API.graphql(graphqlOperation(queries.getUser, {id: username})) //use the API to retrieve the user's details from the database
                    const first_login = navigationDecision.data.getUser.first_login; //store the user's first_login value in the first_login variable
                    if(first_login != 0) //if the user has not logged in before
                    {
                        navigation.navigate('UpdateUserSplash'); //navigate to the UpdateUserSplash screen
                    }
                    else //if the user has logged in before
                    {
                        navigation.navigate('AdminDash'); //navigate to the AdminDash screen
                    }
                }
                catch(e)
                {
                    Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
                }
            }
            authenticate()  //call the authenticate function
        }
        catch(e)
        {
            setLoading(false)
            Alert.alert('Login Failed', e.message); //if an error occurs, catch it and throw up an alert with the contents of the error
        }
    }

    const onForgotPasswordPressed = () => { //if the 'Forgot password?' button is clicked
        navigation.navigate('ForgotPassword');
    }

    const onSignUpPressed = () => { //if the 'Don't have an account? Sign up' button is clicked
        navigation.navigate('SignUp');
    }

    //return the user defined components from CustomInput and CustomButton
    return (
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: height, padding: 20}}>
                <Image //Logo image
                source={Logo}
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode="contain"
                />

                <Text style={styles.title}>
                    Sign In
                </Text>

                <CustomInput //Custom TextInput
                name="email"
                placeholder="Email"
                control={control}
                rules={{required: 'Email is required'}}
                />
                
                <CustomInput //Custom TextInput
                name="password"
                placeholder="Password"
                control={control}
                secureTextEntry={true}
                rules={{
                    required: 'Password is required',
                    minLength: {value: 8,
                    message: 'Password must be at least 8 characters long', //sets the minimum password length on the client side to be 12 characters long, else there will be a handled error
                },
                    maxLength: {
                    value: 30,
                    message: "Password must be 30 characters long or less" //sets the maximum password length on the client side to be 40 characters long, else there will be a handled error
                }
            }}   
        />

                <CustomButton //Sign In Button
                text={loading ? "Loading..." : "Sign In"}
                onPress={handleSubmit(onSignInPressed)}
                />

                <CustomButton //Forgot Password Button
                text="Forgot password?"
                onPress={onForgotPasswordPressed}
                type="TERTIARY"
                />

                <CustomButton //Sign Up Button
                text="Don't have an account? Sign up"
                onPress={onSignUpPressed}
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