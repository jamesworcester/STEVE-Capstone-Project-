/*
Programmer: James Worcester
Edited by: James Worcester on 15/09/2022 (Sprint 9)
*/
import React, {useEffect, useState} from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { User } from "../../types"; //import global types of Chatroom
import styles from "./style"; 
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
//import graphQL API mutations and queries
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
//user defined logo import
import placeholder_user from '../../../assets/images/placeholder_user.png';

export type UserListItemProps = {
    user: User;
}

const UserListItem = (props: UserListItemProps) => {

    const {user} = props; //define props chatRoom as an object
    const navigation = useNavigation();
    //const user = chatRoom.users[1]; // initialise user by getting info from dummy data
    const onClick = () => {
        console.log("USERID: "+user.id)
        navigation.navigate('PublicProfile', 
        {   
            id: user.id, //navigate to channel screen and show name of user u are chatting with
        })
    }

    //<Image source={{/*uri: user.imageUri*/}} style={styles.avatar}/>
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
        {/*moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY'*)*/}
    </Text>
</View>
</TouchableWithoutFeedback>
)
};

export default UserListItem

