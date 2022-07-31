import React, {useState} from 'react';
import { View, Text , Image , StyleSheet, useWindowDimensions, ScrollView, Alert} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import {useForm, Controller} from 'react-hook-form';
import { Auth } from 'aws-amplify';

const SignInScreen = () => {

    const navigation = useNavigation();
    const {height} = useWindowDimensions();
    const [loading, setLoading] = useState(false);

    const {control, handleSubmit, formState: {errors}} = useForm();

    console.log(errors);

    const onSignInPressed = async (data) => {
        // console.log(data);
        // // validate user
        // navigation.navigate('Home');

        if (loading) {
            return;
        }

        setLoading(true);

        try{
            await Auth.signIn(data.email, data.password);
            navigation.navigate('Home');
        } catch(e) {
            Alert.alert('Oops', e.message);
        }
        setLoading(false);
        
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

                {/* <CustomInput
                name="username"
                placeholder="Username"
                control={control}
                rules={{required: 'Username is required'}}
                /> */}

                <CustomInput
                name="email"
                placeholder="Email"
                control={control}
                rules={{required: 'Email is required'}}
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
                text={loading ? "Loading..." : "Sign In"}
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