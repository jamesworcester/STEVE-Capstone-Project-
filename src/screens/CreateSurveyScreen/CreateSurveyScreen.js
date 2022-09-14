/*
Programmer: James Worcester
Edited by: James Worcester on 04/09/2022
Refactored by James Worcester on 14/09/2022 (Sprint 9)
*/
//Screen to create a Survey
//react-native imports
import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions} from 'react-native';
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

const CreateSurveyScreen = () => {
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const route = useRoute(); //route passed parameters from the previous screen
    const {control, handleSubmit, watch, reset} = useForm(); //use form from react-hook-form
    const {height} = useWindowDimensions(); //sets the height of the window

    const onCreatePressed = async (data) => {
            try 
            {
                reset();
                navigation.navigate('CreatedSurvey', {data});
            }
            catch(e)
            {
                Alert.alert('Error', e.message);
            }
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Create Survey
                </Text>

                <Text style={styles.text_bold}>Question 1:</Text>
                <PersonalisedInput //Custom TextInput
                name="question1"
                placeholder= {'Question 1'}
                control={control}
                />

                <Text style={styles.text_bold}>Question 2:</Text>
                <PersonalisedInput //Custom TextInput
                name="question2"
                placeholder={'Question 2'}
                control={control}
                />

                <Text style={styles.text_bold}>Question 3:</Text>
                <PersonalisedInput //Custom TextInput
                name="question3"
                placeholder={'Question 3'}
                control={control}
                />

                <Text style={styles.text_bold}>Question 4:</Text>
                <PersonalisedInput //Custom TextInput
                name="question4"
                placeholder={'Question 4'}
                control={control}
                />

                <Text style={styles.text_bold}>Question 5:</Text>
                <PersonalisedInput //Custom TextInput
                name="question5"
                placeholder={'Question 5'}
                control={control}
                />

                <PersonalisedButton //Register Button
                    text="Create Survey"
                    onPress={handleSubmit(onCreatePressed)}
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

export default CreateSurveyScreen