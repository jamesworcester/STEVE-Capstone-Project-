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
const AnswerSurveyScreen = () => {
    const navigation = useNavigation();
    //const {height} = useWindowDimensions(); //sets the height of the window
    const route = useRoute(); //route passed parameters from the previous screen (SignUp)
    const {control, register, handleSubmit, formState: {errors}} = useForm(); //use form from react-hook-form
    const [surveyDetails, setSurveyDetails] = useState([]);
    const [questionDetails, setQuestionDetails] = useState([]);
    const [question1_id, setQuestion1_id] = useState();
    const [question1_text, setQuestion1_text] = useState();
    const [question1_type, setQuestion1_type] = useState();
    const [question2_id, setQuestion2_id] = useState();
    const [question2_text, setQuestion2_text] = useState();
    const [question2_type, setQuestion2_type] = useState();
    const [question3_id, setQuestion3_id] = useState();
    const [question3_text, setQuestion3_text] = useState();
    const [question3_type, setQuestion3_type] = useState();
    const [question4_id, setQuestion4_id] = useState();
    const [question4_text, setQuestion4_text] = useState();
    const [question4_type, setQuestion4_type] = useState();
    const [question5_id, setQuestion5_id] = useState();
    const [question5_text, setQuestion5_text] = useState();
    const [question5_type, setQuestion5_type] = useState();

    useEffect(() => {
        const getSurvey = async () => {
            try {
                //console.log(route.params.survey_id)

                const surveyData = await API.graphql(graphqlOperation(queries.getSurvey, {id: route.params.survey_id}));
                //console.log(surveyData)

                const questionData = await API.graphql(graphqlOperation(queries.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN, {survey_id: route.params.survey_id}));
                console.log(questionData)

                setSurveyDetails(surveyData.data.getSurvey);
                setQuestionDetails(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN);

                setQuestion1_id(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[0].id);
                setQuestion1_text(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[0].question_text);
                setQuestion1_type(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[0].question_type);

                setQuestion2_id(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[1].id);
                setQuestion2_text(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[1].question_text);
                setQuestion2_type(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[1].question_type);

                setQuestion3_id(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[2].id);
                setQuestion3_text(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[2].question_text);
                setQuestion3_type(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[2].question_type);

                setQuestion4_id(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[3].id);
                setQuestion4_text(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[3].question_text);
                setQuestion4_type(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[3].question_type);

                setQuestion5_id(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[4].id);
                setQuestion5_text(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[4].question_text);
                setQuestion5_type(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[4].question_type);


            }
            catch(e)
            {
                console.log(e);
            }
        }
        getSurvey();
    }, []);


    const onSubmitPressed = async (data) => { //if the 'Don't have an account? Sign up' button is clicked

        

        console.log(question1_id);
        console.log(question2_id);
        console.log(question3_id);
        console.log(question4_id);
        console.log(question5_id);

        //console.log("SEPARATOR")
        //console.log(question1_type1_answer)
        //console.log(data);
        console.log("BEFORE")
        const user = await Auth.currentAuthenticatedUser();
        const { username } = user; //get the id (username in this case) of the current user
        console.log(username);
        console.log(data);
        console.log("AFTER")
        console.log(typeof question1_text)
        console.log(question1_type)

        //id <= auto generated
        //question id we have per question
        //assigned_survey_id <= route.params.assigned_survey_id
        //user_id = username

        if(question1_type == "1")
        {
            
            console.log(await API.graphql(graphqlOperation(mutations.createQuestion_AnswerNumber, {input: {question_id: question1_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_number: data.question1_answer}})));
            
        }
        else if(question1_type == "2")
        {
            console.log(await API.graphql(graphqlOperation(mutations.createQuestion_AnswerString, {input: {question_id: question1_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_string: data.question1_answer}})));
        }

        if(question2_type == "1")
        {
            console.log(await API.graphql(graphqlOperation(mutations.createQuestion_AnswerNumber, {input: {question_id: question2_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_number: data.question2_answer}})));
        }
        else if(question2_type == "2")
        {
            console.log(await API.graphql(graphqlOperation(mutations.createQuestion_AnswerString, {input: {question_id: question2_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_string: data.question2_answer}})));
        }

        if(question3_type == "1")
        {
            console.log(await API.graphql(graphqlOperation(mutations.createQuestion_AnswerNumber, {input: {question_id: question3_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_number: data.question3_answer}})));
        }
        else if(question3_type == "2")
        {
            console.log(await API.graphql(graphqlOperation(mutations.createQuestion_AnswerString, {input: {question_id: question3_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_string: data.question3_answer}})));
        }

        if(question4_type == "1")
        {
            console.log(await API.graphql(graphqlOperation(mutations.createQuestion_AnswerNumber, {input: {question_id: question4_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_number: data.question4_answer}})));
        }
        else if(question4_type == "2")
        {
            console.log(await API.graphql(graphqlOperation(mutations.createQuestion_AnswerString, {input: {question_id: question4_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_string: data.question4_answer}})));
        }

        if(question5_type == "1")
        {
            console.log(await API.graphql(graphqlOperation(mutations.createQuestion_AnswerNumber, {input: {question_id: question5_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_number: data.question5_answer}})));
        }
        else if(question5_type == "2")
        {
            console.log(await API.graphql(graphqlOperation(mutations.createQuestion_AnswerString, {input: {question_id: question5_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_string: data.question5_answer}})));
        }

        console.log(await API.graphql(graphqlOperation(mutations.updateAssignedSurveyANSWER, {input: {id: route.params.assigned_survey_id}})));

        navigation.navigate('AdminTools');
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Answer Survey
                </Text>

                <Text style={styles.text_bold}>Survey Name:</Text>
                <Text>{surveyDetails.text}</Text>

                <Text style={styles.text_bold}>Question 1:</Text>
                <Text>{question1_text}</Text>

                {question1_type == 1 && <Controller //Controller using passed parameter values
                control={control}
                name="question1_answer"
                defaultValue={3}
                //rules={{required: 'Question required'}}
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( //lambda render function
                <>
                <View style={[styles.inputstyle, {borderColor: error ? 'red' : '#e8e8e8'}]}>
                <Slider
                //disabled={false}
                style={{width: '80%', height: 40}}
                alignSelf="center"
                value={value}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(value) => onChange(value)}
                thumbTintColor="#3362d0"
                />
                </View>
                {error && ( //if there is an error (e.g. if not enough characters were entered for a user's password)
                <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message}</Text>
                )}
                </>
            )}
            />}    
                {/* {route.params.question1_type == 1 && <View><Text style={{flexDirection: "row",
                justifyContent: "flex-end",}}>Strongly Disagree</Text><Text>Strongly Agree</Text></View>} */}

                {question1_type == 2 && <PersonalisedInput //Custom TextInput
                name="question1_answer"
                placeholder="Answer"
                control={control}
                rules={{required: 'Question required'}}
                />}

                <Text style={styles.text_bold}>Question 2:</Text>
                <Text>{question2_text}</Text>

                {question2_type == 1 && <Controller //Controller using passed parameter values
                control={control}
                //register={register}
                name="question2_answer"
                defaultValue={3}
                //rules={{required: 'Question required'}}
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( //lambda render function
                <>
                <View style={[styles.inputstyle, {borderColor: error ? 'red' : '#e8e8e8'}]}>
                <Slider
                //disabled={false}
                style={{width: '80%', height: 40}}
                alignSelf="center"
                value={value}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(value) => onChange(value)}
                thumbTintColor="#3362d0"
                />
                </View>
                {error && ( //if there is an error (e.g. if not enough characters were entered for a user's password)
                <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message}</Text>
                )}
                </>
            )}
            />}

                {/* {route.params.question2_type == 1 && <View><Text style={{flexDirection: "row",
                justifyContent: "flex-end",}}>Strongly Disagree</Text><Text>Strongly Agree</Text></View>} */}

                {question2_type == 2 && <PersonalisedInput //Custom TextInput
                name="question2_answer"
                placeholder="Answer"
                control={control}
                rules={{required: 'Question required'}}
                />}
                
                <Text style={styles.text_bold}>Question 3:</Text>
                <Text>{question3_text}</Text>

                {question3_type == 1 && <Controller //Controller using passed parameter values
                control={control}
                //register={register}
                name="question3_answer"
                defaultValue={3}
                //rules={{required: 'Question required'}}
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( //lambda render function
                <>
                <View style={[styles.inputstyle, {borderColor: error ? 'red' : '#e8e8e8'}]}>
                <Slider
                //disabled={false}
                style={{width: '80%', height: 40}}
                alignSelf="center"
                value={value}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(value) => onChange(value)}
                thumbTintColor="#3362d0"
                />
                </View>
                {error && ( //if there is an error (e.g. if not enough characters were entered for a user's password)
                <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message}</Text>
                )}
                </>
            )}
            />}

                {/* {route.params.question3_type == 1 && <View><Text style={{flexDirection: "row",
                justifyContent: "flex-end",}}>Strongly Disagree</Text><Text>Strongly Agree</Text></View>} */}

                {question3_type == 2 && <PersonalisedInput //Custom TextInput
                name="question3_answer"
                placeholder="Answer"
                control={control}
                rules={{required: 'Question required'}}
                />}

                <Text style={styles.text_bold}>Question 4:</Text>
                <Text>{question4_text}</Text>

                {question4_type == 1 && <Controller //Controller using passed parameter values
                control={control}
                //register={register}
                name="question4_answer"
                defaultValue={3}
                //rules={{required: 'Question required'}}
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( //lambda render function
                <>
                <View style={[styles.inputstyle, {borderColor: error ? 'red' : '#e8e8e8'}]}>
                <Slider
                //disabled={false}
                style={{width: '80%', height: 40}}
                alignSelf="center"
                value={value}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(value) => onChange(value)}
                thumbTintColor="#3362d0"
                />
                </View>
                {error && ( //if there is an error (e.g. if not enough characters were entered for a user's password)
                <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message}</Text>
                )}
                </>
            )}
            />}
                {/* {route.params.question4_type == 1 && <View><Text style={{flexDirection: "row",
                justifyContent: "flex-end",}}>Strongly Disagree</Text><Text>Strongly Agree</Text></View>} */}

                {question4_type == 2 && <PersonalisedInput //Custom TextInput
                name="question4_answer"
                placeholder="Answer"
                control={control}
                rules={{required: 'Question required'}}
                />}
                
                <Text style={styles.text_bold}>Question 5:</Text>
                <Text>{question5_text}</Text>

                {question5_type == 1 && <Controller //Controller using passed parameter values
                control={control}
                //register={register}
                name="question5_answer"
                defaultValue={3}
                //rules={{required: 'Question required'}}
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( //lambda render function
                <>
                <View style={[styles.inputstyle, {borderColor: error ? 'red' : '#e8e8e8'}]}>
                <Slider
                //disabled={false}
                style={{width: '80%', height: 40}}
                alignSelf="center"
                value={value}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(value) => onChange(value)}
                thumbTintColor="#3362d0"
                />
                </View>
                {error && ( //if there is an error (e.g. if not enough characters were entered for a user's password)
                <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message}</Text>
                )}
                </>
            )}
            />}

                {/* {route.params.question5_type == 1 && <View><Text style={{flexDirection: "row",
                justifyContent: "flex-end",}}>Strongly Disagree</Text><Text>Strongly Agree</Text></View>} */}

                {question5_type == 2 && <PersonalisedInput //Custom TextInput
                name="question5_answer"
                placeholder="Answer"
                control={control}
                rules={{required: 'Question required'}}
                />}

                <PersonalisedButton //Sign In Button
                text={"Submit"}
                onPress={handleSubmit(onSubmitPressed)}
                style = {styles.signInButton}
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

export default AnswerSurveyScreen