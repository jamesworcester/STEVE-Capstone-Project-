/*
Programmer: James Worcester
Edited by: James Worcester on 04/09/2022
Refactored by James Worcester on 14/09/2022 (Sprint 9)
*/
//Screen to view a created survey
//react-native imports
import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions} from 'react-native';
//@react-native/native import
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
//react-hook-form import for easy form validation https://react-hook-form.com/
import {useForm} from 'react-hook-form';
//AWS Amplify import
import { Auth } from 'aws-amplify';
//user defined component imports
import PersonalisedInput from '../../components/PersonalisedInput';
import PersonalisedButton from '../../components/PersonalisedButton';

const CreatedSurveyScreen = () => {
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const route = useRoute(); //route passed parameters from the previous screen
    const {control, handleSubmit, watch} = useForm(); //use form from react-hook-form
    const {height} = useWindowDimensions(); //sets the height of the window

    const NavigateSurvey = () => { // Opens Survey Completion Screen
        navigation.navigate('CompletingSurveyScreen');
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Create Survey
                </Text>
                <Text style={styles.text_bold}>Question 1:</Text>
                <Text style={styles.text}>{route.params.data.question1}</Text>

                <Text style={styles.text_bold}>Question 2:</Text>
                <Text style={styles.text}>{route.params.data.question2}</Text>

                <Text style={styles.text_bold}>Question 3:</Text>
                <Text style={styles.text}>{route.params.data.question3}</Text>

                <Text style={styles.text_bold}>Question 4:</Text>
                <Text style={styles.text}>{route.params.data.question4}</Text>

                <Text style={styles.text_bold}>Question 5:</Text>
                <Text style={styles.text}>{route.params.data.question5}</Text>

                <PersonalisedButton
                    text="Navigate to Survey"
                    onPress={NavigateSurvey}
                />

            </View>
        </ScrollView>
    );
};

//create a constant called styles that creates a CSS StyleSheet with CSS styling
const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 20,
        marginTop: 50,
    },
    text: {
        //color: 'gray',
        marginVertical: 10,
        alignSelf: 'flex-start'
    },
    text_bold: {
        fontWeight: 'bold',
        marginVertical: 11,
        alignSelf: 'flex-start'
    },
    link: {
        color: '#FDB075',
    },

})

export default CreatedSurveyScreen