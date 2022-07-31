/*
Programmer: James Worcester
Edited by: James Worcester on 31/07/2022
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
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
//user defined logo import
import Logo from '../../../assets/images/planit_nri_v_navy.png';

//define a constant lambda function called NewPasswordScreen that creates two CustomInputs and two CustomButtons and allows the user to enter the forgotPassword password reset code that was
//emailed to them along with their new password
const NewPasswordScreen = () => {
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const route = useRoute(); //route passed parameters from the previous screen (forgotPasswordScreen)
    const {height} = useWindowDimensions(); //sets the height of the window

    const username = route.params.username; //set the username to be the same as the email that was passed from the forgotPassword screen

    const {control, handleSubmit} = useForm(); //use form from react-hook-form

    const onSubmitPressed = async (data) => { //asynchronous lambda function that collects data from the code and password CustomInputs
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
        Alert.alert('Oops', e.message); //if there is an error, print an alert with the error
    }
    }

    const onSignInPressed = () => { //if 'Back to Sign in' is clicked
        navigation.navigate('SignIn');
    }

    //return the user defined components from CustomInput and CustomButton
    return (
        <ScrollView>
            <View style={styles.root}>
                <Image //Logo image
                    source={Logo}
                    style={[styles.logo, {height: height * 0.3}]}
                    resizeMode="contain"
                />

                <Text style={styles.title}>
                    Reset your password
                </Text>

                <CustomInput //Custom TextInput
                    name="code"
                    control={control}
                    placeholder="Code"
                    rules={{
                        required: 'Code is required'
                    }}
                />

                <CustomInput //Custom TextInput
                    name="password"
                    control={control}
                    placeholder="Enter your new password"
                    secureTextEntry={true}
                    rules={{
                        required: 'Password is required', //makes this field required
                        minLength: {
                            value: 12,
                            message: "Password should be at least 12 characters long" //sets the minimum password length on the client side to be 12 characters long, else there will be a handled error
                        },
                        maxLength: {
                            value: 40,
                            message: "Username should be less than 40 characters long" //sets the maximum password length on the client side to be 40 characters long, else there will be a handled error
                        }
                    }}
                    
                />

                <CustomButton //Submit Button
                    text="Submit"
                    onPress={handleSubmit(onSubmitPressed)}
                />

                <CustomButton //Back to Sign in Button
                    text="Back to Sign in"
                    onPress={onSignInPressed}
                    type="TERTIARY"
                />    
            </View>
        </ScrollView>
    );
};

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
//export the NewPasswordScreen lambda function
export default NewPasswordScreen