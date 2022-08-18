import React from "react";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { View } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const NewMessageButton = () => {
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={() => {
                console.warn('added new message')
            }}>
                <MaterialCommunityIcons name="message-reply-text"
                    size = {28} color= 'white'
                />
            </TouchableOpacity>
        </View>
    )
}

export default NewMessageButton;