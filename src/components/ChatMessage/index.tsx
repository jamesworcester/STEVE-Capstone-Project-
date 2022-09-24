/*
Programmer: Hung
Edited by: James Worcester on 15/09/2022 (Sprint 9)
*/
import { Message, Post } from "../../types";
import React, {useEffect, useState} from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ChatRoom } from "../../types"; //import global types of Chatroom
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { Channel } from "../../types";
//import graphQL API mutations and queries
import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
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
            {/* {isMyMessage() && <Text style={styles.name}>You</Text>} */}
            <Text style={styles.message}>{post.content}</Text>
            <Text style={styles.time}>{moment.utc(post.created_date_time).fromNow()}</Text>
            </View>
        </View>      
    )
}

export default ChatMessage