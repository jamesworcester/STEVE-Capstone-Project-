/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Edited by: James Worcester on 04/09/2022 (Sprint 8)
Refactored by James Worcester on 14/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: ConfirmEmailScreen
*/

/*
Purpose: 
1. Screen for a user to be navigated to after signing up to confirm their email address
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

const ConfirmEmailScreen = () => {
    const route = useRoute();
    const {control, handleSubmit} = useForm();
    const {height} = useWindowDimensions(); //sets the height of the window
    const navigation = useNavigation();

    const username = route.params.email;
    
    const onConfirmPressed = async (data) => {
        try{
                await Auth.confirmSignUp( //uses AWS Amplify Auth to confirm signing up
                    username, 
                    data.code,
                )
                navigation.navigate('SignIn')
        }
        catch(e)
        {
            Alert.alert('Error', e.message);
        }
    }

    const onResendPressed = async () => {
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
                    Confirm your email
                </Text>

                <PersonalisedInput //Custom TextInput
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

export default ConfirmEmailScreen