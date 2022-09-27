/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Refactored by James Worcester on 14/09/2022 (Sprint 9)
Edited by James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: NewPasswordScreen
*/

/*
Purpose: 
1. Screen to allow the user to reset their password by entering the code that was emailed to them and their new password
*/

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';
//user defined component imports
import PersonalisedInput from '../../components/PersonalisedInput';
import PersonalisedButton from '../../components/PersonalisedButton';
//user defined logo import
import Logo from '../../../assets/images/planit_nri_v_navy.png';

const NewPasswordScreen = () => {

    const {control, handleSubmit, watch} = useForm(); 
    const pwd = watch('password'); //watch the password being entered in the 'password' PersonalisedInput
    const navigation = useNavigation();
    const route = useRoute();
    const {height} = useWindowDimensions(); 

    const username = route.params.username;

    const onSubmitPressed = async (data) => {
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
            Alert.alert('Error', e.message);
        }
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
                    Reset your password
                </Text>
                <Text style={styles.info}>
                    A password reset code has been emailed to you. Please enter it below along with your new password
                </Text>
                <PersonalisedInput
                    name="code"
                    control={control}
                    placeholder="Code"
                    rules={{
                        required: 'Code is required'
                    }}
                />
                <PersonalisedInput
                    name="password"
                    control={control}
                    placeholder="New Password"
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
                    text="Submit"
                    onPress={handleSubmit(onSubmitPressed)}
                />
                <PersonalisedButton
                    text="Back to Sign in"
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