import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const navigation = useNavigation();
    const [code, setCode] = useState('');
    const [NewPassword, setNewPassword] = useState('');

    const onSubmitPressed = () => {
        navigation.navigate('Home');
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
                    placeholder="Code"
                    value={code}
                    setValue={setCode}
                />

                <CustomInput
                    placeholder="Enter your new password"
                    value={NewPassword}
                    setValue={setNewPassword}
                />

                <CustomButton 
                    text="Submit"
                    onPress={onSubmitPressed}
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