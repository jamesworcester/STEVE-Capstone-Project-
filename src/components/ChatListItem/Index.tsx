/*
Programmer: Hung
Edited by: James Worcester on 15/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: ChatListItem
*/

/*
Purpose: 
1. Component to display a chat channel in a FlatList from the Chatchannel Screen
2. When the user clicks on the chat channel, they are navigated to the Chatroom Screen for that channel
*/

import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./style"; 
import { useNavigation } from "@react-navigation/native";
import { Channel } from "../../types";
import placeholder_chatchannel from '../../../assets/images/placeholder_chatchannel.png';

export type ChatListItemProps = {
    channel: Channel;
}

const ChatListItem = (props: ChatListItemProps) => {
    const {channel} = props;
    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate('Chatroom', 
        {id: channel.id,
        name: channel.channel_text,
        })
    }

return(
<TouchableWithoutFeedback onPress={onClick}>
<View style={styles.container}>
    <View style={styles.lefContainer}>
        <Image source={placeholder_chatchannel} style={styles.avatar} />
        <View style={styles.midContainer}>
            <Text style={{fontWeight: 'bold'}}>{channel.channel_text}</Text>
            <Text>{channel.description}</Text>
        </View>
    </View>
    <Text style = {styles.time}>
    </Text>
</View>
</TouchableWithoutFeedback>
)
};

export default ChatListItem

