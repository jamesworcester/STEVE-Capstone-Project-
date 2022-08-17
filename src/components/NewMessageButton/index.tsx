import React from "react";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { View } from "react-native";
import styles from "./styles";

const NewMessageButton = () => {
    return (
        <View style = {styles.container}>
            <MaterialCommunityIcons name="message-reply-text"
                size = {28} color= 'white'
            />
        </View>
    )
}

export default NewMessageButton;