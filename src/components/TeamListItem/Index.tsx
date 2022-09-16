/*
Programmer: James Worcester
Edited by: James Worcester on 15/09/2022 (Sprint 9)
*/
import React, {useEffect, useState} from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { Team } from "../../types"; //import global types of Chatroom
import styles from "./style"; 
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
//import graphQL API mutations and queries
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
//user defined logo import
import placeholder_team from '../../../assets/images/placeholder_team.png';

export type TeamListItemProps = {
    team: Team;
}

const TeamListItem = (props: TeamListItemProps) => {

    const {team} = props; //define props chatRoom as an object
    const navigation = useNavigation();
    //const user = chatRoom.users[1]; // initialise user by getting info from dummy data
    const onClick = () => {
        console.log(team.name);
        navigation.navigate('TeamMembers', 
        {team_id: team.id, //navigate to channel screen and show name of user u are chatting with
        name: team.name,
        })
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

export default TeamListItem

