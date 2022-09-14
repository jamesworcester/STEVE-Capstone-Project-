/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Refactored by James Worcester on 14/09/2022 (Sprint 9)
*/
//NewPasswordScreen users are navigated to from the ForgotPasswordScreen after they have entered their password reset code and it has been validated by AWS Amplify
//react-native imports
import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions} from 'react-native';
//@react-navigation/native imports
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
//react-hook-form import for easy form validation https://react-hook-form.com/
import {useForm} from 'react-hook-form';
//AWS Amplify import
import { Auth } from 'aws-amplify';
//user defined component imports
import PersonalisedInput from '../../components/PersonalisedInput';
import PersonalisedButton from '../../components/PersonalisedButton';
//user defined logo import
import Logo from '../../../assets/images/planit_nri_v_navy.png';

//define a constant lambda function called NewPasswordScreen that creates two PersonalisedInputs and two PersonalisedButtons and allows the user to enter the forgotPassword password reset code that was
//emailed to them along with their new password
const NewPasswordScreen = () => {

    const {control, handleSubmit, watch} = useForm(); //use form from react-hook-form
    const pwd = watch('password'); //watch the password being entered in the 'password' PersonalisedInput
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const route = useRoute(); //route passed parameters from the previous screen (forgotPasswordScreen)
    const {height} = useWindowDimensions(); //sets the height of the window

    const username = route.params.username; //set the username to be the same as the email that was passed from the forgotPassword screen

    const onSubmitPressed = async (data) => { //asynchronous lambda function that collects data from the code and password PersonalisedInputs
        try{
            await Auth.forgotPasswordSubmit( //uses AWS Amplify forgotPasswordSubmit to submit a change to the iAM user's password
                username, 
                data.code,
                data.password,
            );
            navigation.navigate('SignIn')
            }
        catch(e)
        {
            Alert.alert('Error', e.message); //if there is an error, print an alert with the error
        }
    }

    const onSignInPressed = () => { //if 'Back to Sign in' is clicked
        navigation.navigate('SignIn');
    }

    //return the user defined components from PersonalisedInput and PersonalisedButton
    return (
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: height, padding: 20}}>
                <Image //Logo image
                    source={Logo}
                    style={[styles.logo, {height: height * 0.3}]}
                    resizeMode="contain"
                />

                <Text style={styles.title}>
                    Reset your password
                </Text>

                <Text style={styles.info}>
                    A password reset code has been emailed to you. Please enter it below along with your new password
                </Text>

                <PersonalisedInput //Custom TextInput
                    name="code"
                    control={control}
                    placeholder="Code"
                    rules={{
                        required: 'Code is required'
                    }}
                />

                <PersonalisedInput //Custom TextInput
                    name="password"
                    control={control}
                    placeholder="New Password"
                    secureTextEntry={true}
                    rules={{
                        required: 'Password is required',
                        minLength: {value: 8,
                        message: 'Password must be at least 8 characters long', //sets the minimum password length on the client side to be 8 characters long, else there will be a handled error
                    },
                        maxLength: {
                        value: 30,
                        message: "Password must be less than 30 characters long" //sets the maximum password length on the client side to be 30 characters long, else there will be a handled error
                    }
                    }}
                    
                />

                <PersonalisedInput //Custom TextInput
                    name="password-repeat"
                    control={control}
                    secureTextEntry={true}      
                    placeholder="Repeat Password"
                    rules={{
                        required: 'Repeat Password is required', //sets the Repeat Password as required
                        validate: value => value === pwd || 'Passwords do not match', //validates if password-repeat matches password
                      }}

                />

                <PersonalisedButton //Submit Button
                    text="Submit"
                    onPress={handleSubmit(onSubmitPressed)}
                />

                <PersonalisedButton //Back to Sign in Button
                    text="Back to Sign in"
                    onPress={onSignInPressed}
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
        marginBottom: 20,
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
        marginBottom: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
    info: {
        alignItems: 'center',
        color: 'gray',
        color: '#051C60',
        marginBottom: 10,
    }

})

export default NewPasswordScreen