import React, {useState} from 'react';
import { View, Text , Image , StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import {useForm, Controller} from 'react-hook-form';

const SignInScreen = () => {

    const navigation = useNavigation();
    const {height} = useWindowDimensions();

    const {control, handleSubmit, formState: {errors}} = useForm();

    console.log(errors);

    const onSignInPressed = (data) => {
        console.log(data);
        // validate user
        navigation.navigate('Home');
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    }

    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    }



    return (
        <ScrollView>
            <View style={styles.root}>
                <Image
                source={Logo}
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode="contain"
                />

                <CustomInput
                name="username"
                placeholder="Username"
                control={control}
                rules={{required: 'Username is required'}}
                />

                <CustomInput
                name="password"
                placeholder="Password"
                control={control}
                secureTextEntry={true}
                rules={{
                    required: 'Password is required',
                    minLength: {value: 12,
                    message: 'Password should be a minimum of 12 characters long',
                },
            }}   
        />

                <CustomButton 
                text="Sign In"
                onPress={handleSubmit(onSignInPressed)}
                />

                <CustomButton 
                text="Forgot password?"
                onPress={onForgotPasswordPressed}
                type="TERTIARY"
                />

                <SocialSignInButtons />

                <CustomButton 
                text="Don't have an account? Sign up"
                onPress={onSignUpPressed}
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
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    }
})

export default SignInScreen