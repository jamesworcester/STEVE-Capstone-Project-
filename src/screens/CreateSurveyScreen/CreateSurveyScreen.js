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
    { label: 'Scale (1 - 10)', value: '1' },
    { label: 'Short answer', value: '2' },
    { label: 'Multiple choice', value: '3' },
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

                console.log(q1Details);
                
                console.log(await API.graphql(graphqlOperation(mutations.createQuestion, {input: {created_by: username, question_type: q1selectedType, question_text: data.question1}})));

                //Alert.alert(JSON.stringify(data))
                //reset();
                //navigation.navigate('CreatedSurvey', {data});

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
                />

                <Text style={styles.text_bold}>Question 1:</Text>
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
                <PersonalisedInput //Custom TextInput
                name="question1"
                placeholder= {'Question 1'}
                control={control}
                />

                <Text style={styles.text_bold}>Question 2:</Text>
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
                <PersonalisedInput //Custom TextInput
                name="question2"
                placeholder={'Question 2'}
                control={control}
                />

                <Text style={styles.text_bold}>Question 3:</Text>
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
                <PersonalisedInput //Custom TextInput
                name="question3"
                placeholder={'Question 3'}
                control={control}
                />

                <Text style={styles.text_bold}>Question 4:</Text>
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
                <PersonalisedInput //Custom TextInput
                name="question4"
                placeholder={'Question 4'}
                control={control}
                />

                <Text style={styles.text_bold}>Question 5:</Text>
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

export default CreateSurveyScreen