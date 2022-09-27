/*
Programmer: James Worcester
Edited by: James Worcester on 15/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: UserListItem
*/

/*
Purpose: 
1. Component to display a user in a FlatList from the User Screen
2. When a user is clicked on the loggedin user is navigated to the PublicProfile Screen for that user
*/

import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { User } from "../../types"; //import global types of Chatroom
import styles from "./style"; 
import { useNavigation } from "@react-navigation/native";
import placeholder_user from '../../../assets/images/placeholder_user.png';

export type UserListItemProps = {
    user: User;
}

const UserListItem = (props: UserListItemProps) => {

    const {user} = props;
    const navigation = useNavigation();
    const onClick = () => {
        navigation.navigate('PublicProfile', 
        {   
            id: user.id,
        })
    }

return(
<TouchableWithoutFeedback onPress={onClick}>
<View style={styles.container}>
    <View style={styles.lefContainer}>
        <Image source={placeholder_user} style={styles.avatar} />
        <View style={styles.midContainer}>
            <Text style={{fontWeight: 'bold'}}>{user.first_name+" "+user.last_name}</Text>
            <Text>{user.email}</Text>
        </View>
    </View>
    <Text style = {styles.time}>
    </Text>
</View>
</TouchableWithoutFeedback>
)
};

export default UserListItem

