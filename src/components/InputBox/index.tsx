import React, { useState } from "react";
import { View, KeyboardAvoidingView, Platform} from "react-native";
import styles from "./styles";

import {MaterialCommunityIcons, MaterialIcons,
    FontAwesome5,
    Entypo
} from "@expo/vector-icons"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const InputBox = () => {

    const [message, setMessage] = useState('');
    const onMicrophonePress = () => {
        console.warn('on Microphone')
    }
    const onSendPress = () => {
        console.warn(`Sending : ${message}`)
        //send the message to the backend 
        setMessage('');
    }
    const onPress = () => {
        if(!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }
    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset = {60}
            style = {{width: '100%'}}
        >
        <View style={styles.container}>
        <View style = {styles.mainContainer}>
            <FontAwesome5 name="laugh-beam" size={24} color="grey"/>
            <TextInput style = {styles.textInput}
                    placeholder = {'Type a message'}
                    multiline
                    value={message}
                    onChangeText = {setMessage}
                />
                <Entypo name="attachment" size={24} color="grey"
                    style = {styles.icon}
                />
                {!message && <FontAwesome5 name="camera" size={24} color="grey"
                     style = {styles.icon}/>} 

            </View>
            <TouchableOpacity onPress={onPress}>
            <View style = {styles.buttonContainer}>
                {!message 
                ? <MaterialCommunityIcons name="microphone" size={24} color="white"/>
                : <MaterialIcons name="send" size={20} color="white"/>
                }
            </View>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>    
    )
}

export default InputBox