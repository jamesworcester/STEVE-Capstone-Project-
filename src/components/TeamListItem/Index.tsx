/*
Programmer: James Worcester
Edited by: James Worcester on 15/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: TeamListItem
*/

/*
Purpose: 
1. Component to display a team in a FlatList from the Team Screen
2. When the user clicks on the team, they are navigated to the TeamMembers Screen for that team
*/

import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { Team } from "../../types"; //import global types of Chatroom
import styles from "./style"; 
import { useNavigation } from "@react-navigation/native";
import placeholder_team from '../../../assets/images/placeholder_team.png';

export type TeamListItemProps = {
    team: Team;
}

const TeamListItem = (props: TeamListItemProps) => {

    const {team} = props;
    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate('TeamMembers', 
        {team_id: team.id,
        name: team.name,
        })
    }

return(
<TouchableWithoutFeedback onPress={onClick}>
<View style={styles.container}>
    <View style={styles.lefContainer}>
        <Image source={placeholder_team} style={styles.avatar} />
        <View style={styles.midContainer}>
            <Text style={{fontWeight: 'bold'}}>{team.name}</Text>
            <Text>{team.description}</Text>
        </View>
    </View>
    <Text style = {styles.time}>
    </Text>
</View>
</TouchableWithoutFeedback>
)
};

export default TeamListItem

