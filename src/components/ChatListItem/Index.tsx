import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types"; //import global types of Chatroom
import styles from "./style"; 
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const {chatRoom} = props; //define props chatRoom as an object
    const navigation = useNavigation();
    const user = chatRoom.users[1];  // initialise user by getting info from dummy data
    const onClick = () => {
        navigation.navigate('Chatroom', 
        {id: chatRoom.id, //navigate to Chatroom screen and show name of user u are chatting with
        name: user.name,
        })
    }

return( //show a comonent which include : avatar, Name(in our new implementation, it gonna be name of the channel), Last Message 
        // and time of the last massage on the Chat Channels screen. We can also understand it as a single CHANNEL
    <TouchableWithoutFeedback onPress={onClick}> 
    <View style={styles.container}>
        <View style={styles.lefContainer}>
            <Image source={{uri: user.imageUri}} style={styles.avatar}/>
            <View style={styles.midContainer}>
                <Text >{user.name}</Text>
                <Text>{chatRoom.lastMessage.content}</Text>
            </View>
        </View>
        
        <Text style = {styles.time}>
            {moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}
        </Text>
    </View>
    </TouchableWithoutFeedback>
)
};

export default ChatListItem

