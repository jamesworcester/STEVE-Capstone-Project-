/*
Programmer: James Worcester
Edited by: James Worcester on 04/09/2022
*/
//SignUpScreen users are navigated to after clicking on a 'SignUp' button that allows users to create a AWS iAM account in the project's user pool
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
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
//user defined logo import
import Logo from '../../../assets/images/planit_nri_v_navy.png';
//user defined API import

//define a constant lambda function called SignUpScreen that creates three CustomInputs and two CustomButtons and allows the user to sign up for an account or navigate to sign into an account
const CreateSurveyScreen = () => {
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const route = useRoute(); //route passed parameters from the previous screen (SignUp)
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
                Alert.alert('Oops', e.message);
            }
    }



    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Create Survey
                </Text>

                <Text style={styles.text_bold}>Question 1:</Text>
                <CustomInput //Custom TextInput
                name="question1"
                placeholder= {'Question 1'}
                control={control}
                />

                <Text style={styles.text_bold}>Question 2:</Text>
                <CustomInput //Custom TextInput
                name="question2"
                placeholder={'Question 2'}
                control={control}
                />

                <Text style={styles.text_bold}>Question 3:</Text>
                <CustomInput //Custom TextInput
                name="question3"
                placeholder={'Question 3'}
                control={control}
                />

                <Text style={styles.text_bold}>Question 4:</Text>
                <CustomInput //Custom TextInput
                name="question4"
                placeholder={'Question 4'}
                control={control}
                />

                <Text style={styles.text_bold}>Question 5:</Text>
                <CustomInput //Custom TextInput
                name="question5"
                placeholder={'Question 5'}
                control={control}
                />

                <CustomButton //Register Button
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

//export the SignUpScreen lambda function
export default CreateSurveyScreen