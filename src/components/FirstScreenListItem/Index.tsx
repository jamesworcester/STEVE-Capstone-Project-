/*
Programmer: James Worcester
Created by: James Worcester on 22/09/2022 (Sprint 10)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: FirstScreenListItem
*/

/*
Purpose: 
1. Component to display a survey currently assigned to the logged in user in a FlatList from FirstScreen
2. When the user clicks on the survey, the are navigated to the AnswerSurveyScreen for that survey
*/

import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { Survey } from "../../types"; //import global types of Chatroom
import styles from "./style"; 
import { useNavigation } from "@react-navigation/native";
import placeholder_survey from '../../../assets/images/placeholder_survey.png';


export type AssignedSurveyListItemProps = {
    survey: Survey;
}

const FirstScreenListItem = (props: AssignedSurveyListItemProps) => {
    const navigation = useNavigation();
    const {survey} = props;
    
    const onClick = () => {
        //console.log(id);

        navigation.navigate('Home', {screen:'AnswerSurvey',params: {assigned_survey_id: survey.id, survey_id: survey.survey_id}})
    }

return(
<TouchableWithoutFeedback onPress={onClick}>
<View style={styles.container}>
    <View style={styles.lefContainer}>
        <Image source={placeholder_survey} style={styles.avatar} />
        <View style={styles.midContainer}>
            <Text>{survey.text}</Text>
            <Text>Assigned to: {survey.assigned_team}</Text>
            <Text>Assigned on: {survey.assigned_date_time}</Text>
        </View>
    </View>
    <Text style = {styles.time}>
    </Text>
</View>
</TouchableWithoutFeedback>
)
};

export default FirstScreenListItem

