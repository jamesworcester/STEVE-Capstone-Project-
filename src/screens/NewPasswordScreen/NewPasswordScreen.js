import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () => {
    const navigation = useNavigation();

    const {control, handleSubmit} = useForm();

    const onSubmitPressed = (data) => {
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