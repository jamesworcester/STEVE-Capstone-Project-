//SignInScreen users are navigated to from App.js as well as being able to return to from many different screens. Allows users to sign in or navigate to Sign Up or reset their password
//react-native imports
import React, {useState} from 'react';
import { View, Text , Image , StyleSheet, useWindowDimensions, ScrollView, Alert} from 'react-native';
//@react-navigation/native import
import { useNavigation } from '@react-navigation/native';
//react-hook-form import for easy form validation https://react-hook-form.com/
import {useForm, Controller} from 'react-hook-form';
//AWS Amplify import
import { Auth } from 'aws-amplify';
//user defined component imports
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
//user defined logo import
import Logo from '../../../assets/images/planit_nri_v_navy.png';

//define a constant lambda function called SignInScreen that creates a logo, two CustomInputs and three CustomIButtons and allows the user to sign in or navigate to sign up or reset their password
const SignInScreen = () => {

    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const {height} = useWindowDimensions(); //sets the height of the window
    const [loading, setLoading] = useState(false); //sets loading
    const {control, handleSubmit, formState: {errors}} = useForm(); //use form from react-hook-form

    const onSignInPressed = async (data) => { //asynchronous lambda function that checks if there is a request that is still loading, then attempts to sign in
        if (loading) {
            return;
        }
        setLoading(true);
        try{
            await Auth.signIn(data.email, data.password); //uses AWS Amplify to attempt to sign in using the entered email and password
            navigation.navigate('Home');
        } catch(e) {
            Alert.alert('Oops', e.message);
        }
        setLoading(false);
        
    }

    const onForgotPasswordPressed = () => { //if the 'Forgot password?' button is clicked
        navigation.navigate('ForgotPassword');
    }

    const onSignUpPressed = () => { //if the 'Don't have an account? Sign up' button is clicked
        navigation.navigate('SignUp');
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

                <CustomInput //Custom TextInput
                name="email"
                placeholder="Email"
                control={control}
                rules={{required: 'Email is required'}}
                />
                
                <CustomInput //Custom TextInput
                name="password"
                placeholder="Password"
                control={control}
                secureTextEntry={true}
                rules={{
                    required: 'Password is required',
                    minLength: {value: 12,
                    message: 'Password should be a minimum of 12 characters long', //sets the minimum password length on the client side to be 12 characters long, else there will be a handled error
                },
                    maxLength: {
                    value: 40,
                    message: "Username should be less than 40 characters long" //sets the maximum password length on the client side to be 40 characters long, else there will be a handled error
                }
            }}   
        />

                <CustomButton //Sign In Button
                text={loading ? "Loading..." : "Sign In"}
                onPress={handleSubmit(onSignInPressed)}
                />

                <CustomButton //Forgot Password Button
                text="Forgot password?"
                onPress={onForgotPasswordPressed}
                type="TERTIARY"
                />

                <CustomButton //Sign Up Button
                text="Don't have an account? Sign up"
                onPress={onSignUpPressed}
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
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    }
})
//export the SignInScreen lambda function
export default SignInScreen