/*
Programmer: James Worcester
Refactored by: James Worcester on 13/09/2022 (Sprint 9)
*/
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
//import TeamMember type from types.ts
import { TeamMember } from "../../types";
import styles from "../UserListItem/style";
//import navigation
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
//import graphQL API mutations and queries
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

//export TeamMembersListItemProps as type TeamMember
export type TeamMembersListItemProps = {
    teamMember: TeamMember;
}

const TeamMembersListItem = (props: TeamMembersListItemProps) => {
    const {teamMember} = props;
    const navigation = useNavigation();
    const onClick = async () => {
        async function fetchTeamMembers() {
            //fetch user data from database filtered
            const users = await API.graphql(graphqlOperation(queries.listUsers));
            //store array data from above query in more specific variable
            const users2 = users.data.listUsers.items;
            try {
            }
            catch(e){
                console.log(e);
            }

            navigation.navigate('ViewTeamMembers',
            {id: users2.id,
            first_name: users2.first_name,
            last_name: users2.last_name,
            email: users2.email,
            phone: users2.phone,
            })
        }
        fetchTeamMembers();
}

return(
    <TouchableWithoutFeedback onPress={onClick}>
    <View style={styles.container}>
        <View style={styles.lefContainer}>
            <Image source={{/*uri: user.imageUri*/}} style={styles.avatar}/>
            <View style={styles.midContainer}>
                <Text >{teamMember.first_name+" "+teamMember.last_name}</Text>
            </View>
        </View>
        <Text style = {styles.time}>
            {/*moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY'*)*/}
        </Text>
    </View>
    </TouchableWithoutFeedback>
)
};

export default TeamMembersListItem

