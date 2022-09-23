/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Edited by: James Worcester on 04/09/2022 (Sprint 8)
Refactored by: James Worcester on 13/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: PersonalisedButton
*/

/*
Purpose: 
1. Component to create personalised button with customisable styling and functionality
*/

import React from 'react';
import { Text, StyleSheet, Pressable} from 'react-native';

const PersonalisedButton = ({ onPress, text, type = "MAIN"}) => {
    return (
        <Pressable //when pressed
            onPress={onPress}
            style={[
                styles.buttonstyle,
                styles[`buttonstyle_${type}`], //style the button by passed 'type' parameter
            ]}>
            <Text style={[
                styles.text,
                styles[`text_${type}`], //style the button's text by passed 'type' parameter
                ]}>
                {text}
            </Text>
        </Pressable>
    )
};

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

export default PersonalisedButton;