import React, {useState} from 'react';
import { View, Text , Image , StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/CustomButton/SocialSignInButtons';

const SignInScreen = () => {
    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn("onSignInPressed");
    }

    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
    }

    const {height} = useWindowDimensions();
    return (
        <ScrollView>
            <View style={styles.root}>
                <Image
                source={Logo}
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode="contain"
                />

                <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}
                />
                <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
                />

                <CustomButton 
                text="Sign In"
                onPress={onSignInPressed}
                />

                <CustomButton 
                text="Forgot password?"
                onPress={onForgotPasswordPressed}
                type="TERTIARY"
                />

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
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    }
})

export default SignInScreen