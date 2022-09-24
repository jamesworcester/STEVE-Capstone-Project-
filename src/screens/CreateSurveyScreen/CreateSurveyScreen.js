/*
Programmer: James Worcester
Edited by: James Worcester on 04/09/2022
Refactored by James Worcester on 21/09/2022 (Sprint 10)
*/
//Screen to create a Survey
//react-native imports
import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions} from 'react-native';
//@react-native/native import
import { useNavigation } from '@react-navigation/native';
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

// const defaultValues = {
//     title: "",
//     content: "",
//     language: "java",
//   };

  const data = [
    { label: 'Scale (Agree/Disagree)', value: '1' },
    { label: 'Short answer', value: '2' },
    //{ label: 'Multiple choice', value: '3' },
  ];


const CreateSurveyScreen = () => {
    //const [value, setValue] = useState(null)


    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const route = useRoute(); //route passed parameters from the previous screen
    const {control, handleSubmit, errors, getValues, setValue, watch, reset} = useForm(); //use form from react-hook-form
    const {height} = useWindowDimensions(); //sets the height of the window

    //const watchShowLanguage = watch("language", false);

    const [q1selectedType, q1setSelectedType] = useState(null);
    const [q2selectedType, q2setSelectedType] = useState(null);
    const [q3selectedType, q3setSelectedType] = useState(null);
    const [q4selectedType, q4setSelectedType] = useState(null);
    const [q5selectedType, q5setSelectedType] = useState(null);

    //const onSubmit = data => alert(JSON.stringify(data));

    const onCreatePressed = async (data) => {
        //console.log(data);
            // try 
            // {
                if(q1selectedType == null || q2selectedType == null || q3selectedType == null || q4selectedType == null || q5selectedType == null)
                {
                    Alert.alert("Please select a question type for each question");
                }
                else if(data.question1 == null || data.question2 == null || data.question3 == null || data.question4 == null || data.question5 == null)
                {
                    Alert.alert("Please enter a question for each question");
                }
                // else if(((q1selectedType == 1 || q1selectedType == 3) && !Number.isInteger(parseInt(data.question1))))
                // {

                // }
                else if(data.question1 < 1 || data.question1 > 10 || data.question2 < 1 || data.question2 > 10 || data.question3 < 1 || data.question3 > 10 || data.question4 < 1 || data.question4 > 10 || data.question5 < 1 || data.question5 > 10)
                {
                    Alert.alert("Please enter a number between 1 and 10 for scale question");
                }
                else
                {
                const user = await Auth.currentAuthenticatedUser();
                const { username } = user; //get the id (username in this case) of the current user
                console.log(username);

                let q1 = {question_type: q1selectedType, question_text: data.question1}
                console.log(q1);


                const q1Details = {
                    id: username,
                    question_type: q1selectedType,
                    question_text: data.question1
                }

                const q2Details = {
                    id: username,
                    question_type: q1selectedType,
                    question_text: data.question2
                }

                const q3Details = {
                    id: username,
                    question_type: q1selectedType,
                    question_text: data.question3
                }

                const q4Details = {
                    id: username,
                    question_type: q1selectedType,
                    question_text: data.question4
                }

                const q5Details = {
                    id: username,
                    question_type: q1selectedType,
                    question_text: data.question5
                }

                console.log(q1Details);
                console.log(q2Details);
                console.log(q3Details);
                console.log(q4Details);
                console.log(q5Details);

                const createdQuestion1 = await API.graphql(graphqlOperation(mutations.createQuestion, {input: {created_by: username, question_type: q1selectedType, question_number: 1, question_text: data.question1}}));
                console.log(createdQuestion1);
                const question1_id = createdQuestion1.data.createQuestion.id;
                const question1_type = createdQuestion1.data.createQuestion.question_type;
                const question1_text = createdQuestion1.data.createQuestion.question_text;

                const createdQuestion2 = await API.graphql(graphqlOperation(mutations.createQuestion, {input: {created_by: username, question_type: q2selectedType, question_number: 2, question_text: data.question2}}));
                console.log(createdQuestion2);
                const question2_id = createdQuestion2.data.createQuestion.id;
                const question2_type = createdQuestion2.data.createQuestion.question_type;
                const question2_text = createdQuestion2.data.createQuestion.question_text;

                const createdQuestion3 = await API.graphql(graphqlOperation(mutations.createQuestion, {input: {created_by: username, question_type: q3selectedType, question_number: 3, question_text: data.question3}}));
                console.log(createdQuestion3);
                const question3_id = createdQuestion3.data.createQuestion.id;
                const question3_type = createdQuestion3.data.createQuestion.question_type;
                const question3_text = createdQuestion3.data.createQuestion.question_text;

                const createdQuestion4 = await API.graphql(graphqlOperation(mutations.createQuestion, {input: {created_by: username, question_type: q4selectedType, question_number: 4, question_text: data.question4}}));
                console.log(createdQuestion4);
                const question4_id = createdQuestion4.data.createQuestion.id;
                const question4_type = createdQuestion4.data.createQuestion.question_type;
                const question4_text = createdQuestion4.data.createQuestion.question_text;

                const createdQuestion5 = await API.graphql(graphqlOperation(mutations.createQuestion, {input: {created_by: username, question_type: q5selectedType, question_number: 5, question_text: data.question5}}));
                console.log(createdQuestion5);
                const question5_id = createdQuestion5.data.createQuestion.id;
                const question5_type = createdQuestion5.data.createQuestion.question_type;
                const question5_text = createdQuestion5.data.createQuestion.question_text;

                const createdSurvey = await API.graphql(graphqlOperation(mutations.createSurvey, {input: {created_by: username, text: data.name}}));
                console.log(createdSurvey);
                const survey_id = createdSurvey.data.createSurvey.id;
                const survey_text = createdSurvey.data.createSurvey.text;
                
                console.log(await API.graphql(graphqlOperation(mutations.createSurvey_Question, {input: {survey_id: survey_id, question_id: question1_id}})));
                console.log(await API.graphql(graphqlOperation(mutations.createSurvey_Question, {input: {survey_id: survey_id, question_id: question2_id}})));
                console.log(await API.graphql(graphqlOperation(mutations.createSurvey_Question, {input: {survey_id: survey_id, question_id: question3_id}})));
                console.log(await API.graphql(graphqlOperation(mutations.createSurvey_Question, {input: {survey_id: survey_id, question_id: question4_id}})));
                console.log(await API.graphql(graphqlOperation(mutations.createSurvey_Question, {input: {survey_id: survey_id, question_id: question5_id}})));
                
                //navigation.navigate('ReviewSurvey', {createdSurvey: createdSurvey, createdQuestion1: createdQuestion1, createdQuestion2: createdQuestion2, createdQuestion3: createdQuestion3, createdQuestion4: createdQuestion4, createdQuestion5: createdQuestion5});
                navigation.navigate('ReviewSurvey', {survey_id: survey_id, survey_text: survey_text, question1_type: question1_type, question1_text: question1_text, question2_type: question2_type, question2_text: question2_text, question3_type: question3_type, question3_text: question3_text, question4_type: question4_type, question4_text: question4_text, question5_type: question5_type, question5_text: question5_text});
                } 
            // }
            // catch(e)
            // {
            //     Alert.alert('Error', e.message);
            // }
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Create Survey
                </Text>

                <Text style={styles.text_bold}>Survey Name:</Text>
                <PersonalisedInput //Custom TextInput
                name="name"
                placeholder= {'Survey Name'}
                control={control}
                rules={{required: 'Survey Name is required'}}
                />

                <Text style={styles.text_bold}>Question 1:</Text>
                <PersonalisedInput //Custom TextInput
                name="question1"
                placeholder= {'Question 1'}
                control={control}
                rules={{required: 'Question 1 is required'}}
                />
                <Controller
                    name="q1type"
                    control={control}
                    //defaultValue={defaultValues.language}
                    render={({ q1selectedType }) => (
                        <View>
                            <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            //search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={"Question type"}
                            //searchPlaceholder="Search..."
                            value={q1selectedType}
                            onChange={item => {
                            q1setSelectedType(item.value);
                            }}
                            renderLeftIcon={() => (
                            <AntDesign style={styles.icon} color="black" name="setting" size={20} />
                            )}
                            />   
                        </View>
                    )}
                />


                <Text style={styles.text_bold}>Question 2:</Text>
                <PersonalisedInput //Custom TextInput
                name="question2"
                placeholder={'Question 2'}
                control={control}
                rules={{required: 'Question 2 is required'}}
                />
                <Controller
                    name="q2type"
                    control={control}
                    //defaultValue={defaultValues.language}
                    render={({ q2selectedType }) => (
                        <View>
                            <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            //search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={"Question type"}
                            //searchPlaceholder="Search..."
                            value={q2selectedType}
                            onChange={item => {
                            q2setSelectedType(item.value);
                            }}
                            renderLeftIcon={() => (
                            <AntDesign style={styles.icon} color="black" name="setting" size={20} />
                            )}
                            />   
                        </View>
                    )}
                />


                <Text style={styles.text_bold}>Question 3:</Text>
                <PersonalisedInput //Custom TextInput
                name="question3"
                placeholder={'Question 3'}
                control={control}
                rules={{required: 'Question 3 is required'}}
                />
                <Controller
                    name="q3type"
                    control={control}
                    //defaultValue={defaultValues.language}
                    render={({ q3selectedType }) => (
                        <View>
                            <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            //search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={"Question type"}
                            //searchPlaceholder="Search..."
                            value={q3selectedType}
                            onChange={item => {
                            q3setSelectedType(item.value);
                            }}
                            renderLeftIcon={() => (
                            <AntDesign style={styles.icon} color="black" name="setting" size={20} />
                            )}
                            />   
                        </View>
                    )}
                />


                <Text style={styles.text_bold}>Question 4:</Text>
                <PersonalisedInput //Custom TextInput
                name="question4"
                placeholder={'Question 4'}
                control={control}
                rules={{required: 'Question 4 is required'}}
                />
                <Controller
                    name="q4type"
                    control={control}
                    //defaultValue={defaultValues.language}
                    render={({ q4selectedType }) => (
                        <View>
                            <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            //search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={"Question type"}
                            //searchPlaceholder="Search..."
                            value={q4selectedType}
                            onChange={item => {
                            q4setSelectedType(item.value);
                            }}
                            renderLeftIcon={() => (
                            <AntDesign style={styles.icon} color="black" name="setting" size={20} />
                            )}
                            />   
                        </View>
                    )}
                />


                <Text style={styles.text_bold}>Question 5:</Text>
                <PersonalisedInput //Custom TextInput
                name="question5"
                placeholder={'Question 5'}
                control={control}
                rules={{required: 'Question 5 is required'}}
                />
                <Controller
                    name="q5type"
                    control={control}
                    //defaultValue={defaultValues.language}
                    render={({ q5selectedType }) => (
                        <View>
                            <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            //search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={"Question type"}
                            //searchPlaceholder="Search..."
                            value={q5selectedType}
                            onChange={item => {
                            q5setSelectedType(item.value);
                            }}
                            renderLeftIcon={() => (
                            <AntDesign style={styles.icon} color="black" name="setting" size={20} />
                            )}
                            />   
                        </View>
                    )}
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
        width: '70%',
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

export default CreateSurveyScreen