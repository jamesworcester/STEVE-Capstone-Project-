/*
Programmer: James Worcester
Edited by: James Worcester on 15/09/2022 (Sprint 9)
*/
import React, {useEffect, useState} from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet, Button, Alert } from "react-native";
import { User } from "../../types"; //import global types of Chatroom
import styles from "./style"; 
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
//import graphQL API mutations and queries
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
//user defined logo import
import placeholder_user from '../../../assets/images/placeholder_user.png';

export type AddTeamMemberListItemProps = {
    user: User;
    teamId: String,
    teamName: String,
}

const AddTeamMemberListItem = (props: AddTeamMemberListItemProps) => {

    const {user, teamId, teamName} = props; //define props chatRoom as an object
    console.log(teamName)
    const navigation = useNavigation();
    //const user = chatRoom.users[1]; // initialise user by getting info from dummy data
    //const onClick = () => {
    const onClick = async () => {
            const testingMembership = await API.graphql(graphqlOperation(queries.listTeam_MembershipsWhere, {team_id: teamId, user_id: user.id}))
            console.log(testingMembership)
            if(testingMembership.data.listTeam_MembershipsWhere.length == 0)
            {
                Alert.alert(
                    "Are you sure?",
                    "Do you want to add "+user.first_name+" "+user.last_name+" to "+teamName+"?",
                    [
                    {
                        text: "No",
                        //onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "Yes", onPress: async () => {
                        //console.log(teamId)
                        //console.log(user.id)
                            const teamMembershipDetals = {
                                team_id: teamId,
                                user_id: user.id,
                            }
    
                            await API.graphql(graphqlOperation(mutations.createTeam_Membership, {input: teamMembershipDetals})); //add user to team
                            //navigation.navigate('Team', {id: teamId});
                            navigation.goBack();
                    }
                    }
                    ]
                );
            }
            else
            {
                Alert.alert(
                    "Error",
                    "User is already in the team",
                    [
                    {
                        text: "OK",
                        //onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    }
                    ]
                );
            }
    }

    //<Image source={{/*uri: user.imageUri*/}} style={styles.avatar}/>
return(
<TouchableWithoutFeedback onPress={onClick}>
<View style={styles.container}>
    <View style={styles.lefContainer}>
        <Image source={placeholder_user} style={styles.avatar} />
        <View style={styles.midContainer}>
            <Text>{user.first_name+" "+user.last_name}</Text>
            <Text>{user.email}</Text>
        </View>
    </View>
    <Text style = {styles.time}>
        {/*moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY'*)*/}
    </Text>
</View>
</TouchableWithoutFeedback>
)
};

export default AddTeamMemberListItem

