/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Edited by: James Worcester on 04/09/2022 (Sprint 8)
Refactored by: James Worcester on 13/09/2022 (Sprint 9)
*/
//PersonalisedInput component class. Used to create custom TextInput components with a variety of CSS styling
//react-native imports
import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';
//react-hook-form import for easy form validation https://react-hook-form.com/
import {Controller} from 'react-hook-form';

//define a constant lambda function called PersonalisedInput that can have a various parameters passed to it for customisable functionality and styling
const PersonalisedInput = ({control, name, rules = {}, placeholder, defaultValue, value, secureTextEntry}) => {
    return (
            <Controller //Controller using passed parameter values
                control={control}
                name={name}
                rules={rules}
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( //lambda render function
                <>
                <View style={[styles.inputstyle, {borderColor: error ? 'red' : '#e8e8e8'}]}>
                <TextInput //TextInput using passed render function parameters
                    onChangeText={onChange} 
                    onBlur={onBlur} 
                    placeholder={placeholder} 
                    style={styles.input} 
                    secureTextEntry={secureTextEntry}
                    defaultValue={defaultValue}
                    value={value}
                />
                </View>
                {error && ( //if there is an error (e.g. if not enough characters were entered for a user's password)
                <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message}</Text>
                )}
                </>
            )}
        />
    )
};

//define a constant called styles that creates a CSS StyleSheet with CSS styling
const styles = StyleSheet.create({
    inputstyle: {
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        justifyContent: 'center',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
});

//export the CustomInput component
export default PersonalisedInput;