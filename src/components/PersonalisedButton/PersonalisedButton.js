/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Edited by: James Worcester on 04/09/2022 (Sprint 8)
Refactored by: James Worcester on 13/09/2022 (Sprint 9)
*/
//PersonalisedButton component class. Used to create personalised button components that call functions when pressed. Use custom CSS.
//react-native imports
import React from 'react';
import { Text, StyleSheet, Pressable} from 'react-native';

//define a constant lambda function called PersonalisedButton that can have various parameters passed to it for customisable functionality and CSS styling
const PersonalisedButton = ({ onPress, text, type = "MAIN"}) => {
    return (
        <Pressable //when pressed
            onPress={onPress} //carry out the passed 'onPress' parameter command
            style={[ //style the button
                styles.buttonstyle,
                styles[`buttonstyle_${type}`], //style the button by passed 'type' parameter
            ]}>
            <Text style={[ //style the button's text and create the button with the passed 'text' parameter
                styles.text,
                styles[`text_${type}`], //style the button's text by passed 'type' parameter
                ]}>
                {text}
            </Text>
        </Pressable>
    )
};

//define a constant called styles that creates a CSS StyleSheet with CSS styling
const styles = StyleSheet.create({
    buttonstyle: {
        
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },

    buttonstyle_MAIN: {
        backgroundColor: '#3362d0',
    },

    buttonstyle_SECOND: {
        borderColor: '#3362d0',
        borderWidth: 2,
    },

    buttonstyle_THIRD: {
    },

    buttonstyle_TEAMS: {
        borderColor: '#3362d0',
        borderWidth: 2,
        alignItems: 'flex-start',
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_SECOND: {
        color: 'gray',
    },

    text_THIRD: {
        color: 'gray',
    },

    text_TEAMS: {
        color: '#3362d0',
    }

});

//export the PersonalisedButton component
export default PersonalisedButton;