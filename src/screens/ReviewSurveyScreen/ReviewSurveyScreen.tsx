/*
Programmer: James Worcester
Edited by: James Worcester on 04/09/2022
Refactored by James Worcester on 21/09/2022 (Sprint 10)
*/
//Screen to create a Survey
//react-native imports
import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions, TextInput} from 'react-native';
//@react-native/native import
import { TabRouter, useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
//react-hook-form import for easy form validation https://react-hook-form.com/
import {useForm, Controller} from 'react-hook-form';
//AWS Amplify import
//user defined component imports
import PersonalisedInput from '../../components/PersonalisedInput';
import PersonalisedButton from '../../components/PersonalisedButton';
import { Picker } from '@react-native-picker/picker';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PersonalisedDropdown from '../../components/PersonalisedDropdown';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import Slider from '@react-native-community/slider';

// const defaultValues = {
//     title: "",
//     content: "",
//     language: "java",
//   };

//   const data = [
//     { label: 'Scale (1 - 10)', value: '1' },
//     { label: 'Short answer', value: '2' },
//     //{ label: 'Multiple choice', value: '3' },
//   ];
const ReviewSurveyScreen = () => {
    const navigation = useNavigation();
    //const {height} = useWindowDimensions(); //sets the height of the window
    const route = useRoute(); //route passed parameters from the previous screen (SignUp)
    const {control, handleSubmit, formState: {errors}} = useForm(); //use form from react-hook-form



    const types = [
        route.params.question1_type,
         route.params.question2_type,
          route.params.question3_type,
           route.params.question4_type,
            route.params.question5_type
        ];

    for(let i = 0; i < types.length; i++)
    {
        if(types[i] == "1")
        {
            types[i] = "scale";
        }
        else if(types[i] == "2")
        {
            types[i] = "Short answer";
        }
        else if(types[i] == "3")
        {
            types[i] = "Multiple choice";
        }
    }

    if (route.params.question1_type == 1)
    {
        console.log("hello");
    }







    const onAssignPressed = () => { 
        navigation.navigate('AssignSurveyToTeam', {survey_id: route.params.survey_id});
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Review Survey
                </Text>

                <Text style={styles.text_bold}>Survey Name:</Text>
                <Text>{route.params.survey_text}</Text>

                <Text style={styles.text_bold}>Question 1:</Text>
                <Text>{route.params.question1_text}</Text>

                {route.params.question1_type == 1 && <Slider
                disabled={true}
                style={{width: '80%', height: 40}}
                alignSelf="center"
                value={3}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(value) => console.log(value)}
                thumbTintColor="#3362d0"
                />}

                {/* {route.params.question1_type == 1 && <View><Text style={{flexDirection: "row",
                justifyContent: "flex-end",}}>Strongly Disagree</Text><Text>Strongly Agree</Text></View>} */}

                {route.params.question1_type == 2 && <TextInput //TextInput using passed render function parameters 
                    placeholder="Answer"
                    style={styles.inputstyle}
                    editable={false}
                    selectTextOnFocus={false}
                />}

                <Text style={styles.text_bold}>Question 2:</Text>
                <Text>{route.params.question2_text}</Text>

                {route.params.question2_type == 1 && <Slider
                disabled={true}
                style={{width: '80%', height: 40}}
                value={3}
                alignSelf="center"
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(value) => console.log(value)}
                thumbTintColor="#3362d0"
                />}

                {/* {route.params.question2_type == 1 && <View><Text style={{flexDirection: "row",
                justifyContent: "flex-end",}}>Strongly Disagree</Text><Text>Strongly Agree</Text></View>} */}

                {route.params.question2_type == 2 && <TextInput //TextInput using passed render function parameters 
                    placeholder="Answer"
                    style={styles.inputstyle}
                    editable={false}
                    selectTextOnFocus={false}
                />}
                
                <Text style={styles.text_bold}>Question 3:</Text>
                <Text>{route.params.question3_text}</Text>

                {route.params.question3_type == 1 && <Slider
                disabled={true}
                style={{width: '80%', height: 40}}
                value={3}
                alignSelf="center"
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(value) => console.log(value)}
                thumbTintColor="#3362d0"
                />}

                {/* {route.params.question3_type == 1 && <View><Text style={{flexDirection: "row",
                justifyContent: "flex-end",}}>Strongly Disagree</Text><Text>Strongly Agree</Text></View>} */}

                {route.params.question3_type == 2 && <TextInput //TextInput using passed render function parameters 
                    placeholder="Answer"
                    style={styles.inputstyle}
                    editable={false}
                    selectTextOnFocus={false}
                />}

                <Text style={styles.text_bold}>Question 4:</Text>
                <Text>{route.params.question4_text}</Text>

                {route.params.question4_type == 1 && <Slider
                disabled={true}
                style={{width: '80%', height: 40}}
                value={3}
                alignSelf="center"
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(value) => console.log(value)}
                thumbTintColor="#3362d0"
                />}

                {/* {route.params.question4_type == 1 && <View><Text style={{flexDirection: "row",
                justifyContent: "flex-end",}}>Strongly Disagree</Text><Text>Strongly Agree</Text></View>} */}

                {route.params.question4_type == 2 && <TextInput //TextInput using passed render function parameters 
                    placeholder="Answer"
                    style={styles.inputstyle}
                    editable={false}
                    selectTextOnFocus={false}
                />}
                
                <Text style={styles.text_bold}>Question 5:</Text>
                <Text>{route.params.question5_text}</Text>

                {route.params.question5_type == 1 && <Slider
                disabled={true}
                style={{width: '80%', height: 40}}
                value={3}
                alignSelf="center"
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(value) => console.log(value)}
                thumbTintColor="#3362d0"
                />}

                {/* {route.params.question5_type == 1 && <View><Text style={{flexDirection: "row",
                justifyContent: "flex-end",}}>Strongly Disagree</Text><Text>Strongly Agree</Text></View>} */}

                {route.params.question5_type == 2 && <TextInput //TextInput using passed render function parameters 
                    placeholder="Answer"
                    style={styles.inputstyle}
                    editable={false}
                    selectTextOnFocus={false}
                />}
                
                <PersonalisedButton //Register Button
                    text="Assign Survey"
                    onPress={onAssignPressed}
                />

            </View>
        </ScrollView>
    );
};

//create a constant called styles that creates a CSS StyleSheet with CSS styling
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
    container1: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#ecf0f1',
        padding: 8,
        flexDirection:'row',
        alignItems:'center'
        
        
      },
      paragraph1: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },

    root: {
        padding: 20,
        
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        
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
      dropdown: {
        margin: 0,
        height: 50,
        width: '50%',
        borderBottomColor: 'gray',
        //borderBottomWidth: 0.5,
      },
      icon: {
        marginRight: 5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },

})

export default ReviewSurveyScreen