/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Refactored by: James Worcester on 13/09/2022 (Sprint 9)
*/
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
//import Team type from types.ts
import { Team } from "../../types";
import styles from "./style";
//import navigation
import { useNavigation } from "@react-navigation/native";
//import graphQL API mutations and queries
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

//export TeamListItemProps as type Team
export type TeamListItemProps = {
    team: Team;
}

const TeamListItem = (props: TeamListItemProps) => {
    const {team} = props;
    const navigation = useNavigation();
    const onClick = async () => {
        async function fetchTeamMembers() {
            //fetch Team Memberships from database filtered by team_id
            const teamMembers1 = await API.graphql(graphqlOperation(queries.listTeam_MembershipsWhere, {team_id: team.id}));
            //store array data from above query in variable
            const teamMembers2 = teamMembers1.data.listTeam_MembershipsWhere;
            //define empty array to store team member data
            const teamMembers3 = [];
            try {
                //if teamMembers2 is not undefined
                if(teamMembers2 !== undefined) 
                {
                    //loop through team member data
                    for (let i = 0; i < teamMembers2.length; i++) 
                    {
                        //fetch user data from database filtered by user_id
                        const user = await API.graphql(graphqlOperation(queries.getUser, {id: teamMembers2[i].user_id}));
                        //append user data to end of teamMembers3 array
                        teamMembers3.push(user.data.getUser);
                    }
                }   
            }
            catch(e){
                console.log(e);
            }

            navigation.navigate('ViewTeamMembers',
            {id: team.id,
            name: team.name,
            description: team.description,
            is_archived: team.is_archived,
            teamMembers: teamMembers3 //pass teamMembers3 array to ViewTeamMembers screen
            })
        }
        fetchTeamMembers();
}

return(
    <TouchableWithoutFeedback onPress={onClick}>
    <View style={styles.container}>
        <View style={styles.leftContainer}>
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

