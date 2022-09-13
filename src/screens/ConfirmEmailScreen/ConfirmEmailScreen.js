/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Edited by: James Worcester on 04/09/2022 (Sprint 8)
*/
//ConfirmEmailScreen a user is navigated to from the SignUpScreen after they successfully create an account in the app so that they can confirm their email using a code that is emailed to them
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
import CustomInput from '../../components/CustomInput/CustomInput'; //CustomInput component import
import PersonalisedButton from '../../components/PersonalisedButton';
//user defined logo import
import Logo from '../../../assets/images/planit_nri_v_navy.png';

//define a constant lambda function called ConfirmEmailScreen that creates a CustomInput and three CustomButtons and checks if the user has entered the correct code, while allowing them to resend
//the code and navigate back to the SignIn screen
const ConfirmEmailScreen = () => {
    const route = useRoute(); //route passed parameters from the previous screen (SignUp)
    const {control, handleSubmit, watch} = useForm(); //use form from react-hook-form
    const {height} = useWindowDimensions(); //sets the height of the window
    
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const [code, setCode] = useState(''); //use state

    const username = route.params.email; //set the username to be the same as the email that was passed from the SignUp screen
    
    const onConfirmPressed = async (data) => { //asynchronous lambda function that collects data from the code CustomInput
        try{
                await Auth.confirmSignUp( //uses AWS Amplify Auth to confirm signing up
                    username, 
                    data.code,
                )
                navigation.navigate('SignIn') //navigates to the SignIn screen
        }
        catch(e)
        {
            Alert.alert('Error', e.message); //if there is an error, print the error
        }
    }

    const onResendPressed = async () => { //asynchronous lambda function to resend a new code to the user's email address
        try{
            await Auth.resendSignUp( //uses AWS Amplify Auth to resend the code to the user's email address
                username, 
            );
            Alert.alert('Success', 'Code was resent to your email');
        }
        catch(e)
        {
            Alert.alert('Error', e.message);
        }
    }

    const onSignInPressed = () => { //if 'Back to Sign in' is clicked
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
                    Confirm your email
                </Text>

                <PersonalisedButton //Custom TextInput
                    name='code'
                    control={control}
                    placeholder="Enter your confirmation code"
                    rules={{
                        required: 'Confirmation code is required'
                    }}
                />

                <PersonalisedButton //Confirm Button
                    text="Confirm"
                    onPress={handleSubmit(onConfirmPressed)}
                />

                <PersonalisedButton //Resend Code Button
                    text="Resend Code"
                    onPress={onResendPressed}
                    type="SECOND"
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
        marginBottom: 40,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },

})

//export the ConfirmEmailScreen lambda function
export default ConfirmEmailScreen