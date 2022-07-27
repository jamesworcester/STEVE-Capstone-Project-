import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {

    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('password');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail');
    }

    const onTermsOfUsePressed = () => {
        console.warn('onTermsofUsePressed');
    }

    const onPrivacyPolicyPressed = () => {
        console.warn('onTermsofUsePressed');
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Create an account
                </Text>

                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Username"
                    rules={{
                        required: 'Username is required',
                        minLength: {
                            value: 12,
                            message: "Username should be at least 12 characters long"
                        },
                        maxLength: {
                            value: 24,
                            message: "Username should be less than 24 characters long"
                        }
                    }}
                />

                <CustomInput
                    name="email"
                    control={control}
                    placeholder="Email"
                    rules={{
                        required: 'Email is required',
                        pattern: 
                        {
                            value: EMAIL_REGEX,
                            message: 'Email is invalid'
                        }
                    }}
                />

                <CustomInput
                    name="password"
                    control={control}
                    secureTextEntry={true}
                    placeholder="Password"
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

                <CustomInput
                    name="password-repeat"
                    control={control}
                    secureTextEntry={true}      
                    placeholder="Repeat Password"
                    rules={{
                        required: 'Repeat Password is required',
                        validate: value => value === pwd || 'Password do not match',
                      }}

                />

                <CustomButton 
                    text="Register"
                    onPress={handleSubmit(onRegisterPressed)}
                />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
                    <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
                </Text>

                <SocialSignInButtons />

                <CustomButton 
                    text="Have an account? Sign in"
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

export default SignUpScreen