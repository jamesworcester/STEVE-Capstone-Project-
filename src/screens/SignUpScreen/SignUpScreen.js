import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/CustomButton/SocialSignInButtons';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onRegisterPressed = () => {
        console.warn("onRegisterPressed");
    }

    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
    }

    const onSignUpPressed = () => {
        console.warn('onSignUpPress');
    }

    const onTermsOfUsePressed = () => {
        console.warn('onTermsofUsePressed');
    }

    const onPrivacyPolicyPressed = () => {
        console.warn('onTermsofUsePressed');
    }



    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Create an account
                </Text>

                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />

                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                />

                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />

                <CustomInput
                    placeholder="Repeat Password"
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry={true}
                />


                <CustomButton 
                    text="Register"
                    onPress={onRegisterPressed}
                />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
                    <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
                </Text>

                <SocialSignInButtons />

                <CustomButton 
                    text="Don't have an account? Create one"
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