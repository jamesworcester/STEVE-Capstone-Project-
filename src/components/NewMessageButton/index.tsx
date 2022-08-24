import React from "react";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { View } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const NewMessageButton = () => {

    const navigation = useNavigation()

    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('NewMessage');
            }}>
                <MaterialCommunityIcons name="message-reply-text"
                    size = {28} color= 'white'
                />
            </TouchableOpacity>
        </View>
    )
}

export default NewMessageButton;