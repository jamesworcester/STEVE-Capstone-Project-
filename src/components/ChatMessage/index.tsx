/*
Programmer: Hung
Edited by: James Worcester on 15/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: ChatMessage
*/

/*
Purpose: 
1. Component to display a chat message in a FlatList from the Chatroom Screen
*/

import { Post } from "../../types";
import React from 'react';
import { View, Text } from "react-native";
import moment from "moment";
import styles from "./styles"; 


export type ChatMessageProps = {
    post: Post,
    myId: String,
}

const ChatMessage = (props: ChatMessageProps) => {
    const {post, myId} = props;

    const isMyMessage = () => {
        return post.user_id === myId;
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    backgroundColor: isMyMessage() ? '#DCF8C5' : 'white' , //if it is mymessage, display in light green ,otherwise display white
                    marginLeft: isMyMessage() ? 50 : 0 , //if it is mymessage display margin left50
                    marginRight: isMyMessage() ? 0 : 50 ,//else display margin right 50
                }
            ]}>
            {!isMyMessage() && <Text style={styles.name}>{post.first_name+" "+post.last_name}</Text>}
            <Text style={styles.message}>{post.content}</Text>
            <Text style={styles.time}>{moment.utc(post.created_date_time).fromNow()}</Text>
            </View>
        </View>      
    )
}

export default ChatMessage