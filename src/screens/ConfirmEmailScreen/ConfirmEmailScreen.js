import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () => {
    const {control, handleSubmit} = useForm();

    const navigation = useNavigation();
    const [code, setCode] = useState('');
    
    const onConfirmPressed = (data) => {
        navigation.navigate('Home');
    }

    const onResendPressed = () => {
        console.warn("onResendPressed");
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
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
                    Confirm your email
                </Text>

                <CustomInput
                    name='code'
                    control={control}
                    placeholder="Enter your confirmation code"
                    rules={{
                        required: 'Confirmation code is required'
                    }}
                />

                <CustomButton 
                    text="Confirm"
                    onPress={handleSubmit(onConfirmPressed)}
                />

                <CustomButton 
                    text="Resend Code"
                    onPress={onResendPressed}
                    type="SECONDARY"
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

export default ConfirmEmailScreen