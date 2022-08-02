/*
Programmer: James Worcester
Edited by: James Worcester on 31/07/2022
*/
//CustomInput component class. Used to create custom TextInput components with a variety of CSS styling
//react-native imports
import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';
//react-hook-form import for easy form validation https://react-hook-form.com/
import {Controller} from 'react-hook-form';

//define a constant lambda function called CustomInput that can have a various parameters passed to it for customisable functionality and styling
const CustomInput = ({control, name, rules = {}, placeholder, secureTextEntry}) => {
    return (
            <Controller //Controller using passed parameter values
                control={control}
                name={name}
                rules={rules}
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( //lambda render function
                <>
                <View style={[styles.container, {borderColor: error ? 'red' : '#e8e8e8'}]}>
                <TextInput //TextInput using passed render function parameters
                    onChangeText={onChange} 
                    onBlur={onBlur} 
                    placeholder={placeholder} 
                    style={styles.input} 
                    secureTextEntry={secureTextEntry}
                />
                </View>
                {error && ( //if there is an error (e.g. if not enough characters were entered for a user's password)
                <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
                )}
                </>
            )}
        />
    )
};

//define a constant called styles that creates a CSS StyleSheet with CSS styling
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {},
});

//export the CustomInput component
export default CustomInput;