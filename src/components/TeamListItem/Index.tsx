import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { Team } from "../../types";
import styles from "../TeamListItem/style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
// import { API, graphqlOperation } from 'aws-amplify';
// import * as mutations from '../../graphql/mutations';
// import * as queries from '../../graphql/queries';

export type TeamListItemProps = {
    team: Team;
}

const TeamListItem = (props: TeamListItemProps) => {
    const {team} = props;
    const navigation = useNavigation();
    //const user = chatRoom.users[1];
    const onClick = async () => {
        //const teamMembersList = await API.graphql(graphqlOperation(queries.getUser, {id: username}))
        navigation.navigate('ViewTeamMembers',
        {id: team.id,
        name: team.name,
        description: team.description,
        is_archived: team.is_archived
        })
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

