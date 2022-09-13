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
            //console.log(team.id)
            const teamMembers1 = await API.graphql(graphqlOperation(queries.listTeam_MembershipsWhere, {team_id: team.id}));
            //console.log(teamMembers1)
            //const teamMembersTest = await API.graphql(graphqlOperation(queries.listUsers));
            //console.log(teamMembers1);
            //for each team member, get the user
            //console.log(teamMembers1)
            const teamMembers2 = teamMembers1.data.listTeam_MembershipsWhere;
            //console.log(teamMembers2)
            const teamMembers3 = [];
            try {
                //console.log("hello")
                if(teamMembers2 !== undefined) {
                for (let i = 0; i < teamMembers2.length; i++) {
                    //console.log(teamMembers2[i].user_id);
                    const user = await API.graphql(graphqlOperation(queries.getUser, {id: teamMembers2[i].user_id}));
                    //console.log(user);
                    //teamMembers3[i].user = user.data.getUser;
                    //console.log(user.data.getUser);
                    teamMembers3.push(user.data.getUser);
                    //console.log(teamMembers3[i].user);
                }
            }
                
            }
            catch(e){
                console.log(e);
            }

            //console.log("BEGIN");
            //console.log(teamMembers3);


            navigation.navigate('ViewTeamMembers',
            {id: team.id,
            name: team.name,
            description: team.description,
            is_archived: team.is_archived,
            //teamMembers: teamMembers3
            //teamMembers: [1, 2],
            teamMembers: teamMembers3
            //testarray: [1, 2]
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

