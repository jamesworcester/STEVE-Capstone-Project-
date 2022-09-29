/*
Programmer: James Worcester
Created by: James Worcester on 27/09/2022 (Sprint 10)
*/

/*
Name: SurveysWithResultsListItem
*/

/*
Purpose: 
1. Component to display a survey that has been answered at least once in a FlatList from the ViewSurveysWithResultsScreen
2. When the user clicks on the survey, they are navigated to the ViewSurveyResultsScreen for that survey
*/

import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { Survey } from "../../types"; //import global types of Chatroom
import styles from "./style"; 
import { useNavigation } from "@react-navigation/native";
import placeholder_survey from '../../../assets/images/placeholder_survey.png';

export type SurveysWithResultsListItemProps = {
    survey: Survey;
}

const SurveysWithResultsListItem = (props: SurveysWithResultsListItemProps) => {
    const navigation = useNavigation();
    const {survey} = props;
    
    const onClick = () => {
        navigation.navigate('ViewSurveyResults', {survey_id: survey.id})
    }

return(
<TouchableWithoutFeedback onPress={onClick}>
<View style={styles.container}>
    <View style={styles.lefContainer}>
        <Image source={placeholder_survey} style={styles.avatar} />
        <View style={styles.midContainer}>
            <Text>{survey.text}</Text>
        </View>
    </View>
    <Text style = {styles.time}>
    </Text>
</View>
</TouchableWithoutFeedback>
)
};

export default SurveysWithResultsListItem

