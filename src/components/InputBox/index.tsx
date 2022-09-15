import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,} from "react-native";
import styles from "./styles";

import {MaterialCommunityIcons, MaterialIcons,
    FontAwesome5,
    Entypo
} from "@expo/vector-icons"
import { Header } from "@rneui/themed";
import { useRoute } from "@react-navigation/native";
import chatRoomData from "../../../assets/data/Chats"; //import chat data from dummy data
import ChatMessage from "../../components/ChatMessage";
import 'react-native-gesture-handler';
//@react-native/native import
import { useNavigation } from '@react-navigation/native';
//react-hook-form import for easy form validation https://react-hook-form.com/
import {useForm} from 'react-hook-form';
//AWS Amplify import
import { Auth } from 'aws-amplify';
//user defined component imports
import PersonalisedInput from '../../components/PersonalisedInput';
import PersonalisedButton from '../../components/PersonalisedButton';
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';


const InputBox = (props) => {

    const { channel_id } = props;

    const [post, setPost] = useState('');
    const [myId, setId] = useState(null);

    useEffect(() => {
        const getId = async () => {
          const user = await Auth.currentAuthenticatedUser();
          const { username } = user; //get the id (username in this case) of the current user
          setId(username);
        }
        getId();
      }, [])


    const createNewPost = async () => {
        try 
        {
           // console.log(channel_id)
            await API.graphql(graphqlOperation(mutations.createPostContent, {input: {channel_id: channel_id, user_id: myId, content: post}}));
        }
        catch(e)
        {
            console.log(e);
        }
    }

    // const onSendPress = async () => {
    //     try {

    //     }
    // }
    
    // const onSendPress = () => {
    //     console.warn(`Sending : ${message}`)
    //     //send the message to the backend 
    //     setMessage('');
    // }

    const onPress = () => {
        if (!post) {
            //don't do anything
        } else {
            //send the message
            createNewPost();
            setPost('')
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