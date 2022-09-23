/*
Programmer: Hung
Edited by: James Worcester on 15/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: InputBox
*/

/*
Purpose: 
1. Component to display the input box at the bottom of the Chatroom Screen
2. Allows the user to type a message and send/create it to the chat channel
3. Uses that props.createNewPostFunction(post) parameter (passed from the Chatroom Screen) to create a new post, then updates the frontend FlatList of posts to render the new post
*/

import React, {useEffect, useState} from 'react';
import {View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,} from "react-native";
import styles from "./styles";
import { MaterialIcons, FontAwesome5, Entypo } from "@expo/vector-icons"
import 'react-native-gesture-handler';
import { Auth } from 'aws-amplify';

const InputBox = (props) => {
    const channel_id = props.channel_id;

    const [post, setPost] = useState('');
    const [myId, setId] = useState(null);

    useEffect(() => {
        const getId = async () => {
          const user = await Auth.currentAuthenticatedUser();
          const { username } = user; //get the id (Cognito username) of the current user
          setId(username);
        }
        getId();
      }, [])

    const onPress = () => {
        if (!post) {
            //don't do anything
        } else {
            //call the createNewPostFunction in ChatRoomScreen.tsx that has been passed through by props.createNewPostFunction() with post as the parameter to capture the value from the post's
            //TextInput value defined below. Function with post parameter looks like this: props.createNewPostFunction(post)
            props.createNewPostFunction(post); 
            setPost('') //set the post TextInput value to empty string after sending the message by updating the state of post
    }
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
                    value={post} 
                    onChangeText = {setPost} //when user already typed a message in, will change the state to setMessage 
                />
                <Entypo name="attachment" size={24} color="grey"
                    style = {styles.icon}
                />
                {!post && <FontAwesome5 name="camera" size={24} color="grey"
                     style = {styles.icon}/>} 

            </View>
            <TouchableOpacity onPress={onPress}>
            <View style = {styles.buttonContainer}>
                 <MaterialIcons name="send" size={20} color="white"/>
            </View>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>    
    )
}

export default InputBox;