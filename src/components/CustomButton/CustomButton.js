/*
Programmer: James Worcester
Edited by: James Worcester on 31/07/2022
*/
//CustomButton component class. Used to create custom button components that call custom functions on press with a variety of custom CSS styling
//react-native imports
import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

//define a constant lambda function called CustomButton that can have various parameters passed to it for customisable functionality and CSS styling
const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
    return (
        <Pressable //when pressed
            onPress={onPress} //carry out the passed 'onPress' parameter command
            style={[ //style the button
                styles.container,
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {}
            ]}>
            <Text style={[ //style the button's text and create the button with the passed 'text' parameter as its text
                styles.text,
                styles[`text_${type}`],
                fgColor ? {color: fgColor} : {},
                ]}>
                {text}
            </Text>
        </Pressable>
    )
};

//define a constant called styles that creates a CSS StyleSheet with CSS styling
const styles = StyleSheet.create({
    container: {
        
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },

    container_SECONDARY: {
        borderColor: '#3B71F3',
        borderWidth: 2,
    },

    container_TERTIARY: {
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_SECONDARY: {
        color: '#3B71F3',
    },

    text_TERTIARY: {
        color: 'gray',
    },

});

//export the CustomButton component
export default CustomButton;