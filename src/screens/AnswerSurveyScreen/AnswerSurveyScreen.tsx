/*
Programmer: James Worcester
Created by James Worcester on 21/09/2022 (Sprint 10)
Edited by James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: AnswerSurveyScreen
*/

/*
Purpose: 
1. Screen to display a survey/assigned survey to the user, with appropriate question order, question text, types and input types
2. The user can then answer the survey and submit it
3. When submitted, the answers to each question will be stored individually in the Question_Answer table
4. After that, the Assigned_Survey answered_date_time TIMESTAMP will be marked with the answered time
*/

import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import PersonalisedInput from '../../components/PersonalisedInput';
import PersonalisedButton from '../../components/PersonalisedButton';
//custom API imports
import { API, graphqlOperation, Auth } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
//slider import
import Slider from '@react-native-community/slider';

const AnswerSurveyScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const {control, register, handleSubmit, formState: {errors}} = useForm(); //useForm from react-hook-form

    const [surveyDetails, setSurveyDetails] = useState([]); //define state array to store the survey details
    const [questionDetails, setQuestionDetails] = useState([]); //define state array to store the question details

    //define set states for question1
    const [question1_id, setQuestion1_id] = useState();
    const [question1_text, setQuestion1_text] = useState();
    const [question1_type, setQuestion1_type] = useState();
    //define set states for question2
    const [question2_id, setQuestion2_id] = useState();
    const [question2_text, setQuestion2_text] = useState();
    const [question2_type, setQuestion2_type] = useState();
    //define set states for question3
    const [question3_id, setQuestion3_id] = useState();
    const [question3_text, setQuestion3_text] = useState();
    const [question3_type, setQuestion3_type] = useState();
    //define set states for question4
    const [question4_id, setQuestion4_id] = useState();
    const [question4_text, setQuestion4_text] = useState();
    const [question4_type, setQuestion4_type] = useState();
    //define set states for question5
    const [question5_id, setQuestion5_id] = useState();
    const [question5_text, setQuestion5_text] = useState();
    const [question5_type, setQuestion5_type] = useState();

    useEffect(() => {
        const getSurvey = async () => {
            try
            {
                const surveyData = await API.graphql(graphqlOperation(queries.getSurvey, {id: route.params.survey_id})); //get the survey details
                const questionData = await API.graphql(graphqlOperation(queries.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN, {survey_id: route.params.survey_id})); //get some of the question details from the joined Question and Survey_Question tables
                
                try 
                {
                    setSurveyDetails(surveyData.data.getSurvey); //set the survey details state
                    setQuestionDetails(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN); //set the question details state
                    //set states for question1
                    setQuestion1_id(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[0].id);
                    setQuestion1_text(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[0].question_text);
                    setQuestion1_type(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[0].question_type);
                    //set states for question2
                    setQuestion2_id(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[1].id);
                    setQuestion2_text(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[1].question_text);
                    setQuestion2_type(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[1].question_type);
                    //set states for question3
                    setQuestion3_id(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[2].id);
                    setQuestion3_text(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[2].question_text);
                    setQuestion3_type(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[2].question_type);
                    //set states for question4
                    setQuestion4_id(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[3].id);
                    setQuestion4_text(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[3].question_text);
                    setQuestion4_type(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[3].question_type);
                    //set states for question5
                    setQuestion5_id(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[4].id);
                    setQuestion5_text(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[4].question_text);
                    setQuestion5_type(questionData.data.listJoinQuestionANDSurvey_QuestionsANSWERSURVEYSCREEN[4].question_type);
                }
                catch(e)
                {
                    Alert.alert('Error', e.message);
                }
            }
            catch(e)
            {
                Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
            }
        }
        getSurvey();
    }, []);

    const onSubmitPressed = async (data) => {

        const user = await Auth.currentAuthenticatedUser();
        const { username } = user; //get the id (Cognito username) of the current user

        try
        {
            //Use differing API calls to create new Question_Answer entities for each question depending on question type
            if(question1_type == "1") //if question1 is a Scale (Agree/Disagree) (1-5) numeric question
            {
                //create new Question_Answer for question1
                await API.graphql(graphqlOperation(mutations.createQuestion_AnswerNumber, {input: {question_id: question1_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_number: data.question1_answer}}));
            }
            else if(question1_type == "2") //if question1 is a Short Answer text question
            {
                //create new Question_Answer for question1
                data.question1_answer = data.question1_answer.replace(/'/g, "''"); //replace all single quotes with double single quotes to prevent SQL injection
                await API.graphql(graphqlOperation(mutations.createQuestion_AnswerString, {input: {question_id: question1_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_string: data.question1_answer}}));
            }

            if(question2_type == "1") //if question2 is a Scale (Agree/Disagree) (1-5) numeric question
            {
                //create new Question_Answer for question2
                await API.graphql(graphqlOperation(mutations.createQuestion_AnswerNumber, {input: {question_id: question2_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_number: data.question2_answer}}));
            }
            else if(question2_type == "2") //if question2 is a Short Answer text question
            {
                //create new Question_Answer for question2
                data.question2_answer = data.question2_answer.replace(/'/g, "''"); //replace all single quotes with double single quotes to prevent SQL injection
                await API.graphql(graphqlOperation(mutations.createQuestion_AnswerString, {input: {question_id: question2_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_string: data.question2_answer}}));
            }

            if(question3_type == "1") //if question3 is a Scale (Agree/Disagree) (1-5) numeric question
            {
                //create new Question_Answer for question3
                await API.graphql(graphqlOperation(mutations.createQuestion_AnswerNumber, {input: {question_id: question3_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_number: data.question3_answer}}));
            }
            else if(question3_type == "2") //if question3 is a Short Answer text question
            {
                //create new Question_Answer for question3
                data.question3_answer = data.question3_answer.replace(/'/g, "''"); //replace all single quotes with double single quotes to prevent SQL injection
                await API.graphql(graphqlOperation(mutations.createQuestion_AnswerString, {input: {question_id: question3_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_string: data.question3_answer}}));
            }

            if(question4_type == "1") //if question4 is a Scale (Agree/Disagree) (1-5) numeric question
            {
                //create new Question_Answer for question4
                await API.graphql(graphqlOperation(mutations.createQuestion_AnswerNumber, {input: {question_id: question4_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_number: data.question4_answer}}));
            }
            else if(question4_type == "2") //if question4 is a Short Answer text question
            {
                //create new Question_Answer for question4
                data.question4_answer = data.question4_answer.replace(/'/g, "''"); //replace all single quotes with double single quotes to prevent SQL injection
                await API.graphql(graphqlOperation(mutations.createQuestion_AnswerString, {input: {question_id: question4_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_string: data.question4_answer}}));
            }

            if(question5_type == "1") //if question5 is a Scale (Agree/Disagree) (1-5) numeric question
            {
                //create new Question_Answer for question5
                await API.graphql(graphqlOperation(mutations.createQuestion_AnswerNumber, {input: {question_id: question5_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_number: data.question5_answer}}));
            }
            else if(question5_type == "2") //if question5 is a Short Answer text question
            {
                //create new Question_Answer for question5
                data.question5_answer = data.question5_answer.replace(/'/g, "''"); //replace all single quotes with double single quotes to prevent SQL injection
                await API.graphql(graphqlOperation(mutations.createQuestion_AnswerString, {input: {question_id: question5_id, assigned_survey_id: route.params.assigned_survey_id, user_id: username, answer_string: data.question5_answer}}));
            }

            await API.graphql(graphqlOperation(mutations.updateAssignedSurveyANSWER, {input: {id: route.params.assigned_survey_id}})); //update the Assigned_Survey entity to show that it has been answered by logging the answered_date_time

            navigation.navigate('AdminTools');
        }
        catch(e)
        {
            Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
        }
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
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( //lambda render function. VERY IMPORTANT TO PASS value AND onChange TO THE COMPONENT
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
                {error && ( //if there is an error
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
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( //lambda render function. VERY IMPORTANT TO PASS value AND onChange TO THE COMPONENT
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
                {error && ( //if there is an error
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
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( //lambda render function. VERY IMPORTANT TO PASS value AND onChange TO THE COMPONENT
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
                {error && ( //if there is an error
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
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( //lambda render function. VERY IMPORTANT TO PASS value AND onChange TO THE COMPONENT
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
                {error && ( //if there is an error
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
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( //lambda render function. VERY IMPORTANT TO PASS value AND onChange TO THE COMPONENT
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
                {error && ( //if there is an error
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