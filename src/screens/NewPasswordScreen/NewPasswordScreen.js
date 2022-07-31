import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const username = route.params.username;

    const {control, handleSubmit} = useForm();

    const onSubmitPressed = async (data) => {
        try{
            await Auth.forgotPasswordSubmit(
                username, 
                data.code,
                data.password,
            );
            navigation.navigate('SignIn')
    }
    catch(e)
    {
        Alert.alert('Oops', e.message);
    }
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Reset your password
                </Text>

                <CustomInput
                    name="code"
                    control={control}
                    placeholder="Code"
                    rules={{
                        required: 'Code is required'
                    }}
                />

                <CustomInput
                    name="password"
                    control={control}
                    placeholder="Enter your new password"
                    secureTextEntry={true}
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 12,
                            message: "Password should be at least 12 characters long"
                        },
                        maxLength: {
                            value: 40,
                            message: "Username should be less than 40 characters long"
                        }
                    }}
                    
                />

                <CustomButton 
                    text="Submit"
                    onPress={handleSubmit(onSubmitPressed)}
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

export default NewPasswordScreen