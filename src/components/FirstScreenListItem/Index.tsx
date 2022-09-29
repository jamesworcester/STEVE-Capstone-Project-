/*
Programmer: James Worcester
Edited by: James Worcester on 15/09/2022 (Sprint 9)
*/
import React, {useEffect, useState} from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Alert } from "react-native";
import { Survey } from "../../types"; //import global types of Chatroom
import styles from "./style"; 
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
//import graphQL API mutations and queries
import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
//user defined logo import
import placeholder_survey from '../../../assets/images/placeholder_survey.png';


export type AssignedSurveyListItemProps = {
    survey: Survey;
}

const FirstScreenListItem = (props: AssignedSurveyListItemProps) => {
    //console.log("hello");
    const navigation = useNavigation();
    const {survey} = props; //define props chatRoom as an object
    
    //const user = chatRoom.users[1]; // initialise user by getting info from dummy data
    const onClick = () => {
        //console.log(id);

        navigation.navigate('Survey', {screen:'AnswerSurvey',params: {assigned_survey_id: survey.id, survey_id: survey.survey_id}})
    }

    //<Image source={{/*uri: user.imageUri*/}} style={styles.avatar}/>
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
        {/*moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY'*)*/}
    </Text>
</View>
</TouchableWithoutFeedback>
)
};

export default FirstScreenListItem

