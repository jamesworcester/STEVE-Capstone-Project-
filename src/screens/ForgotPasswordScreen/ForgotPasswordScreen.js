/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Refactored by James Worcester on 14/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: ForgotPasswordScreen
*/

/*
Purpose: 
1. Screen users are navigated to from the SignInScreen if they click on the 'Forgot Password' button
2. Allows users to enter their email address to send a code to reset their password
*/

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';
//user defined component imports
import PersonalisedInput from '../../components/PersonalisedInput';
import PersonalisedButton from '../../components/PersonalisedButton';
//user defined logo import
import Logo from '../../../assets/images/planit_nri_v_navy.png';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const {control, handleSubmit} = useForm();
    const {height} = useWindowDimensions();

    const onSendPressed = async (data) => {
        const username = data.username;
        try{
            const user = await Auth.forgotPassword(data.username); //uses AWS Amplify to send a forgotPassword password reset request
            console.log(user);
            navigation.navigate('NewPassword', {username});
        }
        catch(e)
        {
            Alert.alert('Password Reset Failed', e.message);
        }
    }

    const onSignInPressed = () => {
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

export default ForgotPasswordScreen