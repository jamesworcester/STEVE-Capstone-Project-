/*
Programmer: James Worcester
Edited by: James Worcester on 15/09/2022 (Sprint 9)
*/
import React, {useEffect, useState} from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Alert } from "react-native";
import { Team } from "../../types"; //import global types of Chatroom
import styles from "./style"; 
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
//import graphQL API mutations and queries
import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
//user defined logo import
import placeholder_team from '../../../assets/images/placeholder_team.png';

export type AssignSurveyToTeamTeamListItemProps = {
    team: Team;
    survey_id: String,
}

const AssignSurveyToTeamListItem = (props: AssignSurveyToTeamTeamListItemProps) => {
    console.log("hello");
    const navigation = useNavigation();
    const {team, survey_id} = props; //define props chatRoom as an object
    
    //const user = chatRoom.users[1]; // initialise user by getting info from dummy data
    const onClick = () => {
        //console.log(team.name);
        //Alert to confirm if user wants to assign survey to team
        Alert.alert(
            "Are you sure?",
            "Do you want to assign the survey to "+team.name+"?",
            [
            {
                text: "No",
                //onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "Yes", onPress: async () => {
                const user = await Auth.currentAuthenticatedUser();
                const { username } = user; //get the id (username in this case) of the current user
                //console.log(username);

                //console.log(team.id);
                //console.log(team.name);
                console.log("test123");
                const teamData = await API.graphql(graphqlOperation(queries.listTeams));
                const assigned_team_members = await API.graphql(graphqlOperation(queries.listTeam_MembershipsWhereTeamID, {team_id: team.id}));
                console.log(assigned_team_members);
                for(let i = 0; i < assigned_team_members.data.listTeam_MembershipsWhereTeamID.length; i++)
                {
                    console.log(API.graphql(graphqlOperation(mutations.createAssigned_Survey, {input: {survey_id: survey_id, assigned_to: assigned_team_members.data.listTeam_MembershipsWhereTeamID[i].user_id, assigned_by: username, assigned_team: team.name}})));
                }
                console.log("HOORAY");
                navigation.navigate('AdminTools');
                


                //console.log(teamId)
                //console.log(user.id)
                    // const teamMembershipDetals = {
                    //     team_id: teamId,
                    //     user_id: user.id,
                    // }


                    //await API.graphql(graphqlOperation(mutations.createTeam_Membership, {input: teamMembershipDetals})); //add user to team
                    //navigation.navigate('Team', {id: teamId});
                    //navigation.goBack();
            }
            }
            ]
        );
    }

    //<Image source={{/*uri: user.imageUri*/}} style={styles.avatar}/>
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
        {/*moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY'*)*/}
    </Text>
</View>
</TouchableWithoutFeedback>
)
};

export default AssignSurveyToTeamListItem

