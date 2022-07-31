import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const {control, handleSubmit} = useForm();

    const onSendPressed = async (data) => {
        const username = data.username;
        try{
            await Auth.forgotPassword(data.username);
            navigation.navigate('NewPassword', {username});
        }
        catch(e)
        {
            Alert.alert('Oops', e.message);
        }
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn', {username});
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Reset your password
                </Text>

                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Email"
                    rules={{
                        required: 'Email is required'
                    }}
                />

                <CustomButton 
                    text="Send"
                    onPress={handleSubmit(onSendPressed)}
                />

                <CustomButton 
                    text="Back to Sign in"
                    onPress={onSignInPressed}
                    type="TERTIARY"
                />
                
            </View>
        </ScrollView>
    );
};

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

export default ForgotPasswordScreen