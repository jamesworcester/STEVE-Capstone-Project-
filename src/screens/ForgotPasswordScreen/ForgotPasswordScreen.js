/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
*/
//ForgotPasswordScreen users are navigated to from the SignInScreen if they click on 'Forgot password?'
//react-native imports
import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions} from 'react-native';
//@react-navigation/native import
import { useNavigation } from '@react-navigation/native';
//react-hook-form import for easy form validation https://react-hook-form.com/
import {useForm} from 'react-hook-form';
//AWS Amplify import
import {Auth} from 'aws-amplify';
//user defined component imports
import PersonalisedInput from '../../components/PersonalisedInput';
import PersonalisedButton from '../../components/PersonalisedButton';
//user defined logo import
import Logo from '../../../assets/images/planit_nri_v_navy.png';

//define a constant lambda function called ForgotPasswordScreen that creates a CustomInput and two CustomButtons and allows the user to enter their email address to send a code to reset their password
const ForgotPasswordScreen = () => {
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const {control, handleSubmit} = useForm(); //use form from react-hook-form
    const {height} = useWindowDimensions(); //sets the height of the window

    const onSendPressed = async (data) => { //asynchronous lambda function that collects data (the email address) from the email CustomInptu
        const username = data.username;
        try{
            const user = await Auth.forgotPassword(data.username); //uses AWS Amplify to send a forgotPassword password reset request
            console.log(user);
            navigation.navigate('NewPassword', {username}); //if the reset request is successful, navigate the user to the NewPasswordScreen and pass their email (username) as a parameter
        }
        catch(e)
        {
            Alert.alert('Password Reset Failed', e.message); //if an error occurs, catch it and throw up an alert with the contents of the error
        }
    }

    const onSignInPressed = () => { //navigate back to the SignIn page if 'Back to Sign in' is pressed
        navigation.navigate('SignIn');
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
                    Reset your password
                </Text>

                <Text style={styles.info}>
                    Enter your Planit email address below
                </Text>

                <PersonalisedInput //Email TextInput
                    name="username"
                    control={control}
                    placeholder="Email"
                    rules={{
                        required: 'Email is required'
                    }}
                />

                <PersonalisedButton //Send Button
                    text="Send"
                    onPress={handleSubmit(onSendPressed)}
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
        marginBottom: 10
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
    info: {
        //align text left
        //alignItems: 'flex-start',
        color: 'gray',
        color: '#051C60',
        marginBottom: 10,
    }

})

//export the ForgotPasswordScreen lambda function
export default ForgotPasswordScreen