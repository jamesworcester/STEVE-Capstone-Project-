/*
Programmer: James Worcester
Created by James Worcester on 21/09/2022 (Sprint 10)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: ViewAssignedSurveyDetailsScreen
*/

/*
Purpose: 
1. Screen to review the details of a survey after it has been created
*/

import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
//API imports
import { API, graphqlOperation, Auth } from 'aws-amplify';
import * as queries from '../../graphql/queries';
//slider import
import Slider from '@react-native-community/slider';
import VisualizationComponent from '../../components/VisualizationComponent';

const ViewSurveyResultsScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [surveyDetails, setSurveyDetails] = useState([]); //state to store the survey details
    const [questionDetails, setQuestionDetails] = useState([]); //state to store the question details
    //states to store question1 text and type
    const [question1_text, setQuestion1_text] = useState();
    const [question1_type, setQuestion1_type] = useState();
    const [question1_answers_int, setQuestion1_answers_int] = useState([]);
    const [question1_answers_string, setQuestion1_answers_string] = useState([]);
    const [question1_names, setQuestion1_names] = useState([]);
    //states to store question2 text and type
    const [question2_text, setQuestion2_text] = useState();
    const [question2_type, setQuestion2_type] = useState();
    const [question2_answers_int, setQuestion2_answers_int] = useState([]);
    const [question2_answers_string, setQuestion2_answers_string] = useState([]);
    const [question2_names, setQuestion2_names] = useState([]);
    //states to store question3 text and type
    const [question3_text, setQuestion3_text] = useState();
    const [question3_type, setQuestion3_type] = useState();
    const [question3_answers_int, setQuestion3_answers_int] = useState([]);
    const [question3_answers_string, setQuestion3_answers_string] = useState([]);
    const [question3_names, setQuestion3_names] = useState([]);
    //states to store question4 text and type
    const [question4_text, setQuestion4_text] = useState();
    const [question4_type, setQuestion4_type] = useState();
    const [question4_answers_int, setQuestion4_answers_int] = useState([]);
    const [question4_answers_string, setQuestion4_answers_string] = useState([]);
    const [question4_names, setQuestion4_names] = useState([]);
    //states to store question5 text and type
    const [question5_text, setQuestion5_text] = useState();
    const [question5_type, setQuestion5_type] = useState();
    const [question5_answers_int, setQuestion5_answers_int] = useState([]);
    const [question5_answers_string, setQuestion5_answers_string] = useState([]);
    const [question5_names, setQuestion5_names] = useState([]);

    useEffect(() => {
        const getSurvey = async () => {
            try
            {
                const surveyData = await API.graphql(graphqlOperation(queries.getSurvey, {id: route.params.survey_id})); //get the survey details and store in SurveyData
                setSurveyDetails(surveyData.data.getSurvey); //set the surveydDetails state to surveyData.data.getSurvey
            }
            catch(e)
            {
                Alert.alert('Error', e.message);
            }

        }
        getSurvey();
    }, []);

    useEffect(() => {
        const getQuestion = async () => {
            try
            {
                const questionData = await API.graphql(graphqlOperation(queries.listJoinQuestionANDSurvey_Questions, {survey_id: route.params.survey_id})); //get the questions and store in questionData
                setQuestionDetails(questionData.data.listJoinQuestionANDSurvey_Questions); //set the questionDetails state to questionData.data.listJoinQuestionANDSurvey_Questions
                //set the question1 text and type states
                setQuestion1_text(questionData.data.listJoinQuestionANDSurvey_Questions[0].question_text);
                setQuestion1_type(questionData.data.listJoinQuestionANDSurvey_Questions[0].question_type);
                //set the question2 text and type states
                setQuestion2_text(questionData.data.listJoinQuestionANDSurvey_Questions[1].question_text);
                setQuestion2_type(questionData.data.listJoinQuestionANDSurvey_Questions[1].question_type);
                //set the question3 text and type states
                setQuestion3_text(questionData.data.listJoinQuestionANDSurvey_Questions[2].question_text);
                setQuestion3_type(questionData.data.listJoinQuestionANDSurvey_Questions[2].question_type);
                //set the question4 text and type states
                setQuestion4_text(questionData.data.listJoinQuestionANDSurvey_Questions[3].question_text);
                setQuestion4_type(questionData.data.listJoinQuestionANDSurvey_Questions[3].question_type);
                //set the question5 text and type states
                setQuestion5_text(questionData.data.listJoinQuestionANDSurvey_Questions[4].question_text);
                setQuestion5_type(questionData.data.listJoinQuestionANDSurvey_Questions[4].question_type);

            }
            catch(e)
            {
                Alert.alert('Error', e.message);
            }

        }
        getQuestion();
    }, []);

    useEffect(() => {
        const getQuestion1 = async () => {
                const question1_answerarray = await API.graphql(graphqlOperation(queries.listQuestion_AnswersJOINQuestionANDUser, {survey_id: route.params.survey_id, question_number: 1}));
                const question1_answerarray_simplified = question1_answerarray.data.listQuestion_AnswersJOINQuestionANDUser
                setQuestion1_answers_int(question1_answerarray_simplified.map((item) => item.answer_number));
                setQuestion1_answers_string(question1_answerarray_simplified.map((item) => item.answer_string));
                setQuestion1_names(question1_answerarray_simplified.map((item) => "["+item.first_name+" "+item.last_name+"]: "+item.answer_string));
        }
        getQuestion1();
    }, []);



    useEffect(() => {
        const getQuestion2 = async () => {
                const question2_answerarray = await API.graphql(graphqlOperation(queries.listQuestion_AnswersJOINQuestionANDUser, {survey_id: route.params.survey_id, question_number: 2}));
                const question2_answerarray_simplified = question2_answerarray.data.listQuestion_AnswersJOINQuestionANDUser
                setQuestion2_answers_int(question2_answerarray_simplified.map((item) => item.answer_number));
                setQuestion2_answers_string(question2_answerarray_simplified.map((item) => item.answer_string));
                setQuestion2_names(question2_answerarray_simplified.map((item) => "["+item.first_name+" "+item.last_name+"]: "+item.answer_string));
        }
        getQuestion2();
    }, []);

    useEffect(() => {
        const getQuestion3 = async () => {
                const question3_answerarray = await API.graphql(graphqlOperation(queries.listQuestion_AnswersJOINQuestionANDUser, {survey_id: route.params.survey_id, question_number: 3}));
                const question3_answerarray_simplified = question3_answerarray.data.listQuestion_AnswersJOINQuestionANDUser
                setQuestion3_answers_int(question3_answerarray_simplified.map((item) => item.answer_number));
                setQuestion3_answers_string(question3_answerarray_simplified.map((item) => item.answer_string));
                setQuestion3_names(question3_answerarray_simplified.map((item) => "["+item.first_name+" "+item.last_name+"]: "+item.answer_string));
        }
        getQuestion3();
    }, []);

    useEffect(() => {
        const getQuestion4 = async () => {
                const question4_answerarray = await API.graphql(graphqlOperation(queries.listQuestion_AnswersJOINQuestionANDUser, {survey_id: route.params.survey_id, question_number: 4}));
                const question4_answerarray_simplified = question4_answerarray.data.listQuestion_AnswersJOINQuestionANDUser
                setQuestion4_answers_int(question4_answerarray_simplified.map((item) => item.answer_number));
                setQuestion4_answers_string(question4_answerarray_simplified.map((item) => item.answer_string));
                setQuestion4_names(question4_answerarray_simplified.map((item) => "["+item.first_name+" "+item.last_name+"]: "+item.answer_string));
        }
        getQuestion4();
    }, []);

    useEffect(() => {
        const getQuestion5 = async () => {
                const question5_answerarray = await API.graphql(graphqlOperation(queries.listQuestion_AnswersJOINQuestionANDUser, {survey_id: route.params.survey_id, question_number: 5}));
                const question5_answerarray_simplified = question5_answerarray.data.listQuestion_AnswersJOINQuestionANDUser
                setQuestion5_answers_int(question5_answerarray_simplified.map((item) => item.answer_number));
                setQuestion5_answers_string(question5_answerarray_simplified.map((item) => item.answer_string));
                setQuestion5_names(question5_answerarray_simplified.map((item) => "["+item.first_name+" "+item.last_name+"]: "+item.answer_string));
        }
        getQuestion5();
    }, []);

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Survey Results
                </Text>

                <Text style={styles.text_bold}>Survey Name:</Text>
                <Text>{surveyDetails.text}</Text>

                <Text style={styles.text_bold}>Question 1:</Text>
                <Text>{question1_text}</Text>
                {/* {question1_type == 1 && <Slider
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
                />} */}
                {/* {route.params.question1_type == 1 && <View><Text style={{flexDirection: "row",
                justifyContent: "flex-end",}}>Strongly Disagree</Text><Text>Strongly Agree</Text></View>} */}

                {/* {question1_type == 2 && <TextInput //TextInput using passed render function parameters 
                    placeholder="Answer"
                    style={styles.inputstyle}
                    editable={false}
                    selectTextOnFocus={false}
                />} */}
                {question1_type == 1 && <VisualizationComponent inputData={question1_answers_int}/>}
                {question1_type == 2 && <Text>{question1_names.join('\n\n')}</Text>}

                <Text style={styles.text_bold}>Question 2:</Text>
                <Text>{question2_text}</Text>
                {/* {question2_type == 1 && <Slider
                disabled={true}
                style={{width: '80%', height: 40}}
                value={3}
                alignSelf="center"
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(value) => value}
                thumbTintColor="#3362d0"
                />} */}
                {/* {route.params.question2_type == 1 && <View><Text style={{flexDirection: "row",
                justifyContent: "flex-end",}}>Strongly Disagree</Text><Text>Strongly Agree</Text></View>} */}
                {/* {question2_type == 2 && <TextInput //TextInput using passed render function parameters 
                    placeholder="Answer"
                    style={styles.inputstyle}
                    editable={false}
                    selectTextOnFocus={false}
                />} */}

                {question2_type == 1 && <VisualizationComponent inputData={question2_answers_int}/>}
                {question2_type == 2 && <Text>{question2_names.join('\n\n')}</Text>}
                
                <Text style={styles.text_bold}>Question 3:</Text>
                <Text>{question3_text}</Text>
                {/* {question3_type == 1 && <Slider
                disabled={true}
                style={{width: '80%', height: 40}}
                value={3}
                alignSelf="center"
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(value) => value}
                thumbTintColor="#3362d0"
                />} */}
                {/* {route.params.question3_type == 1 && <View><Text style={{flexDirection: "row",
                justifyContent: "flex-end",}}>Strongly Disagree</Text><Text>Strongly Agree</Text></View>} */}
                {/* {question3_type == 2 && <TextInput //TextInput using passed render function parameters 
                    placeholder="Answer"
                    style={styles.inputstyle}
                    editable={false}
                    selectTextOnFocus={false}
                />} */}

                {question3_type == 1 && <VisualizationComponent inputData={question3_answers_int}/>}
                {question3_type == 2 && <Text>{question3_names.join('\n\n')}</Text>}

                <Text style={styles.text_bold}>Question 4:</Text>
                <Text>{question4_text}</Text>
                {/* {question4_type == 1 && <Slider
                disabled={true}
                style={{width: '80%', height: 40}}
                value={3}
                alignSelf="center"
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(value) => value}
                thumbTintColor="#3362d0"
                />} */}
                {/* {route.params.question4_type == 1 && <View><Text style={{flexDirection: "row",
                justifyContent: "flex-end",}}>Strongly Disagree</Text><Text>Strongly Agree</Text></View>} */}
                {/* {question4_type == 2 && <TextInput //TextInput using passed render function parameters 
                    placeholder="Answer"
                    style={styles.inputstyle}
                    editable={false}
                    selectTextOnFocus={false}
                />} */}

                {question4_type == 1 && <VisualizationComponent inputData={question4_answers_int}/>}
                {question4_type == 2 && <Text>{question4_names.join('\n\n')}</Text>}
                
                <Text style={styles.text_bold}>Question 5:</Text>
                <Text>{question5_text}</Text>
                {/* {question5_type == 1 && <Slider
                disabled={true}
                style={{width: '80%', height: 40}}
                value={3}
                alignSelf="center"
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={(value) => value}
                thumbTintColor="#3362d0"
                />} */}
                {/* {route.params.question5_type == 1 && <View><Text style={{flexDirection: "row",
                justifyContent: "flex-end",}}>Strongly Disagree</Text><Text>Strongly Agree</Text></View>} */}
                {/* {question5_type == 2 && <TextInput //TextInput using passed render function parameters 
                    placeholder="Answer"
                    style={styles.inputstyle}
                    editable={false}
                    selectTextOnFocus={false}
                />} */}

                {question5_type == 1 && <VisualizationComponent inputData={question5_answers_int}/>}
                {question5_type == 2 && <Text>{question5_names.join('\n\n')}</Text>}
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

export default ViewSurveyResultsScreen