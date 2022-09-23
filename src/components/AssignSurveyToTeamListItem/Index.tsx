/*
Programmer: James Worcester
Created by: James Worcester on 20/09/2022 (Sprint 10)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: AssignSurveyToTeamListItem
*/

/*
Purpose: 
1. Component to display a team in a FlatList from the AssignSurveyToTeamScreen
2. When the user clicks on the team, they are prompted to confirm that they want to assign the survey to that team
3. If yes, the survey is assigned to all team members
*/

import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Alert } from "react-native";
import { Team } from "../../types"; //import global types of Chatroom
import styles from "./style"; 
import { useNavigation } from "@react-navigation/native";
import placeholder_team from '../../../assets/images/placeholder_team.png';
//import graphQL API mutations and queries
import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

export type AssignSurveyToTeamTeamListItemProps = {
    team: Team;
    survey_id: String,
}

const AssignSurveyToTeamListItem = (props: AssignSurveyToTeamTeamListItemProps) => {
    const navigation = useNavigation();
    const {team, survey_id} = props;
    
    const onClick = () => {
        Alert.alert(
            "Are you sure?",
            "Do you want to assign the survey to "+team.name+"?",
            [
            {
                text: "No",
                style: "cancel"
            },
            { text: "Yes", onPress: async () => {
                const user = await Auth.currentAuthenticatedUser();
                const { username } = user; //get the id (Cognito username) from the current authenticated user
                //const teamData = await API.graphql(graphqlOperation(queries.listTeams));
                const assigned_team_members = await API.graphql(graphqlOperation(queries.listTeam_MembershipsWhereTeamID, {team_id: team.id})); //fetch and store all team members in an array
                for(let i = 0; i < assigned_team_members.data.listTeam_MembershipsWhereTeamID.length; i++) //for each team member in the array
                {
                    //assign the survey to the team member
                    API.graphql(graphqlOperation(mutations.createAssigned_Survey, {input: {survey_id: survey_id, assigned_to: assigned_team_members.data.listTeam_MembershipsWhereTeamID[i].user_id, assigned_by: username, assigned_team: team.name}}));
                }
                navigation.navigate('AdminTools');
            }
            }
            ]
        );
    }

return(
<TouchableWithoutFeedback onPress={onClick}>
<View style={styles.container}>
    <View style={styles.lefContainer}>
        <Image source={placeholder_team} style={styles.avatar} />
        <View style={styles.midContainer}>
            <Text>{team.name}</Text>
            <Text>{team.description}</Text>
        </View>
    </View>
    <Text style = {styles.time}>
    </Text>
</View>
</TouchableWithoutFeedback>
)
};

export default AssignSurveyToTeamListItem

