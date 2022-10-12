/*
Programmer: James Worcester
Created by James Worcester on 21/09/2022 (Sprint 10)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: ReviewSurveyScreen
*/

/*
Purpose: 
1. Screen to review a survey that has just been created
2. Allows the user to assign the survey to a team
*/

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import PersonalisedButton from '../../components/PersonalisedButton';
//import slider
import Slider from '@react-native-community/slider';

const ReviewSurveyScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

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
                onValueChange={(value) => value}
                thumbTintColor="#3362d0"
                />}
                {/* {route.params.question1_type == 1 && <View><Text style={{flexDirection: "row",
                justifyContent: "flex-end",}}>Strongly Disagree</Text><Text>Strongly Agree</Text></View>} */}
                {route.params.question1_type == 2 && <TextInput
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
                {route.params.question2_type == 2 && <TextInput
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
                {route.params.question3_type == 2 && <TextInput
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
                {route.params.question4_type == 2 && <TextInput
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
                {route.params.question5_type == 2 && <TextInput
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