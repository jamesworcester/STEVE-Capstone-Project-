
import moment from "moment";
import React from "react";
import { View, Text } from "react-native";
import { Message } from "../../types";
import styles from "./styles";

export type ChatMessageProps = {
    message: Message
}

const ChatMessage = (props: ChatMessageProps) => {
    const {message} = props

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }
    return (
        <View style={styles.container}>
            <View style={[styles.messageBox,
                {backgroundColor: isMyMessage() ? '#DCF8C5' : 'white' , //if it is mymessage, display in light green ,otherwise display white
                marginLeft: isMyMessage() ? 50 : 0 , //if it is mymessage display margin left50
                marginRight: isMyMessage() ? 0 : 50 ,//else display margin right 50
                }
            ]}>
            {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>} 
            <Text style={styles.message}>{message.content}</Text>
            <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
        
    )
}

export default ChatMessage