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
    
    const onSendPress = () => {
        console.warn(`Sending : ${message}`)
        //send the message to the backend 
        setMessage('');
    }

    return(
        <KeyboardAvoidingView //this is the way to make the keyboard display properly when user typing
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset = {60}
            style = {{width: '100%'}}
        >
        <View style={styles.container}>
        <View style = {styles.mainContainer}>
            <FontAwesome5 name="laugh-beam" size={24} color="grey"/>
            <TextInput style = {styles.textInput} // field to type mssage in
                    placeholder = {'Type a message'}
                    multiline
                    value={message} 
                    onChangeText = {setMessage} //when user already typed a message in, will change the state to setMessage 
                />
                <Entypo name="attachment" size={24} color="grey"
                    style = {styles.icon}
                />
                {!message && <FontAwesome5 name="camera" size={24} color="grey"
                     style = {styles.icon}/>} 

            </View>
            <TouchableOpacity onPress={onSendPress}>
            <View style = {styles.buttonContainer}>
                 <MaterialIcons name="send" size={20} color="white"/>
            </View>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>    
    )
}

export default InputBox