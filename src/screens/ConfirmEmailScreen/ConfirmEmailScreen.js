import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../CustomInput';
import CustomButton from '../../components/CustomButton';

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');

    const onConfirmPressed = () => {
        console.warn("onConfirmPressed");
    }

    const onResendPressed = () => {
        console.warn("onResendPressed");
    }

    const onSignInPressed = () => {
        console.warn('onSignInPress');
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
                    placeholder="Enter your confirmation code"
                    value={code}
                    setValue={setCode}
                />

                <CustomButton 
                    text="Confirm"
                    onPress={onConfirmPressed}
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