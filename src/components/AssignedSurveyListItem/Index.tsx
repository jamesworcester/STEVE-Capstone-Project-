/*
Programmer: James Worcester
Created by: James Worcester on 20/09/2022 (Sprint 10)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: AssignedSurveyListItem
*/

/*
Purpose: 
1. Component to display an assigned survey in a FlatList from the ViewAssignedSurveysScreen
2. When the user clicks on the assigned survey, they are navigated to the ViewAssignedSurveyDetailsScreen for that survey
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

const AssignedSurveyListItem = (props: AssignedSurveyListItemProps) => {
    const navigation = useNavigation();
    const {survey} = props;
    
    const onClick = () => {
        navigation.navigate('ViewAssignedSurveyDetails', {survey_id: survey.id})
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

export default AssignedSurveyListItem

