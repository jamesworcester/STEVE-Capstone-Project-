import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { Team } from "../../types";
import styles from "../TeamListItem/style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
 import { API, graphqlOperation } from 'aws-amplify';
 import * as mutations from '../../graphql/mutations';
 import * as queries from '../../graphql/queries';

export type TeamListItemProps = {
    team: Team;
}

const TeamListItem = (props: TeamListItemProps) => {
    const {team} = props;
    const navigation = useNavigation();
    //const user = chatRoom.users[1];
    const onClick = async () => {
        async function fetchTeamMembers() {
            const teamMembers1 = await API.graphql(graphqlOperation(queries.listTeam_Memberships, {filter: {team_id: {eq: team.id}}}));
            //const teamMembersTest = await API.graphql(graphqlOperation(queries.listUsers));
            //console.log(teamMembers1);
            //for each team member, get the user
            const teamMembers2 = teamMembers1.data.listTeam_Memberships;
            const teamMembers3 = [];
            try {
                console.log("hello")
                for (let i = 0; i < teamMembers2.length; i++) {
                    const user = await API.graphql(graphqlOperation(queries.getUser, {id: teamMembers2[i].user_id}));
                    teamMembers3[i].user = user.data.getUser;
                }
                //console.log(teamMembers3)
            }
            catch(e){
                console.log(e);
            }


            navigation.navigate('ViewTeamMembers',
            {id: team.id,
            name: team.name,
            description: team.description,
            is_archived: team.is_archived,
            teamMembers: teamMembers2
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
                <Text >{team.name}</Text>
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

