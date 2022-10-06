/*
Programmer: James Worcester
Edited by: James Worcester on 15/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: AddTeamMemberListItem
*/

/*
Purpose: 
1. Component to display a team member in a FlatList from the AddTeamMember screen
2. When the user clicks on the team member, they can be added to the team (provided they are not already a member of the team)
*/

import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Alert } from "react-native";
import { User } from "../../types";
import styles from "./style"; 
import { useNavigation } from "@react-navigation/native";
import placeholder_user from '../../../assets/images/placeholder_user.png';
//import graphQL API mutations and queries
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

export type AddTeamMemberListItemProps = {
    user: User;
    teamId: String,
    teamName: String,
}

const AddTeamMemberListItem = (props: AddTeamMemberListItemProps) => {

    const {user, teamId, teamName} = props;
    const navigation = useNavigation();

    const onClick = async () => {
            try
            {
                const testingMembership = await API.graphql(graphqlOperation(queries.listTeam_MembershipsWhere, {team_id: teamId, user_id: user.id}))
                if(testingMembership.data.listTeam_MembershipsWhere.length == 0) //if the user is not already a member of the team
                {
                    Alert.alert(
                        "Are you sure?",
                        "Do you want to add "+user.first_name+" "+user.last_name+" to "+teamName+"?",
                        [
                        {
                            text: "No",
                            style: "cancel"
                        },
                        { text: "Yes", onPress: async () => {
                                const teamMembershipDetals = {
                                    team_id: teamId,
                                    user_id: user.id,
                                }
                                await API.graphql(graphqlOperation(mutations.createTeam_Membership, {input: teamMembershipDetals})); //add user to team by creating new record in Team_Membership table
                                navigation.navigate('Team');
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
                            style: "cancel"
                        }
                        ]
                    );
                }
            }
            catch(e)
            {  
                Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
            }    
    }

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
    </Text>
</View>
</TouchableWithoutFeedback>
)
};

export default AddTeamMemberListItem

