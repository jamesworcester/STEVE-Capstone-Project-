import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { TeamMember } from "../../types";
import styles from "../UserListItem/style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

export type TeamMembersListItemProps = {
    teamMember: TeamMember;
}

const TeamMembersListItem = (props: TeamMembersListItemProps) => {
    const {teamMember} = props;
    const navigation = useNavigation();
    //const user = chatRoom.users[1];
    const onClick = async () => {
        async function fetchTeamMembers() {
            const users = await API.graphql(graphqlOperation(queries.listUsers));
            const users2 = users.data.listUsers.items;

            //const teamMembers1 = await API.graphql(graphqlOperation(queries.listTeam_Memberships, {filter: {team_id: {eq: team.id}}}));
            //const teamMembersTest = await API.graphql(graphqlOperation(queries.listUsers));
            //console.log(teamMembers1);
            //for each team member, get the user
            //const teamMembers2 = teamMembers1.data.listTeam_Memberships;
            //const teamMembers3 = [];
            try {
                //console.log("hello")
                //console.log(teamMembers3)
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
            //description: team.description,
            //is_archived: team.is_archived,
            //teamMembers: teamMembers2
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

