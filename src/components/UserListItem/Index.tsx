import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { TeamMember, User } from "../../types";
import styles from "../UserListItem/style";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

export type UserListItemProps = {
    user: User;
}

const UserListItem = (props: UserListItemProps) => {
    const {user} = props;
    const navigation = useNavigation();
    //const user = chatRoom.users[1];
    const onClick = () => {
        // navigation.navigate('User',
        // {id: teamMember.id,
        // email: teamMember.email,
        // phone: teamMember.phone,
        // first_name: teamMember.first_name,
        // last_name: teamMember.last_name,
        // gender: teamMember.gender
        // })
    }

return(
    <TouchableWithoutFeedback onPress={onClick}>
    <View style={styles.container}>
        <View style={styles.lefContainer}>
            <Image source={{/*uri: user.imageUri*/}} style={styles.avatar}/>
            <View style={styles.midContainer}>
                <Text >{user.first_name+" "+user.last_name}</Text>
            </View>
        </View>
        <Text style = {styles.time}>
            {/*moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY'*)*/}
        </Text>
    </View>
    </TouchableWithoutFeedback>
)
};

export default UserListItem

