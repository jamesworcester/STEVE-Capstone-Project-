/*
Programmer: Hung
Edited by: James Worcester on 15/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: ChatRoomScreen
*/

/*
Purpose: 
1. Screen to display a Flatlist of messages from a chat channel
2. Allows users to create a new post by using the custom InputBox component and passing the createNewPost function to it as a prop
*/

import React from "react";
import { View, FlatList, ImageBackground, Alert, Text} from "react-native";
import { Header } from "@rneui/themed";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'; 
import ChatMessage from "../../components/ChatMessage";
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import {useEffect, useState} from "react";
//user defined API imports
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
//import InputBox
import InputBox from "../../components/InputBox"; 

const bg = {uri: "https://raw.githubusercontent.com/Savinvadim1312/WhatsappClone/main/assets/images/BG.png"}

const ChatRoomScreen =() => {
    const [post, setPost] = useState([]);
    const [myId, setId] = useState(null);

    const route = useRoute();
    const navigation = useNavigation();

    const channel_id = route.params.id;


    useEffect(() => {
      const listPostsByChannel = async () => {
        try
        {
          const postData = await API.graphql(graphqlOperation(queries.listPostsByChannelWithName, {channel_id: channel_id}));
          setPost(postData.data.listPostsByChannelWithName); //update the state of post through the setPost function, causing an async render
        }
        catch(e)
        {
          Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
        }
      }
      listPostsByChannel();
  }, []);

    const createNewPost = async (content) => {
      try 
      {
          var contentSQL = content.replace(/'/g, "''").replace(/\n/g, " "); //replace all single quotes with double single quotes to prevent SQL injection & replace all new lines with a space to handle illegal CTRL-CHAR (Code 10) character
          await API.graphql(graphqlOperation(mutations.createPostContent, {input: {channel_id: channel_id, user_id: myId, content: contentSQL}}));
          setPost([...post, {channel_id: channel_id, user_id: myId, content: content}]); //add a new post to the post array's state through the setPost function, causing an async render
      }
      catch(e)
      {
        //Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
        console.log(e);
      }
  }

  useEffect(() => {
    const getId = async () => {
      const user = await Auth.currentAuthenticatedUser();
      const { username } = user; //get the id (Cognito username) of the current user
      setId(username);
    }
    getId();
  }, [])

    return (
        <View>
            <ImageBackground style={{width:'100%',height:'100%'}} source={bg} >
            <Header 
              backgroundColor='#051C60'
              leftComponent={<AntDesign name="back" color="white" size={24} 
              onPress={() => {navigation.navigate('Chatchannel')}}/>}
              centerComponent={{text: `${route.params.name}`, style: { color: '#fff',fontSize:20 }}}
              //display the name of user u are chatting with on the center of header
            />
            
          <FlatList 
            data={post}  //get the message data from dummy data
            renderItem={({item}) => <ChatMessage post={item} myId={myId}/> } //to display content from message dummy data
            // inverted
          />
          <InputBox channel_id={channel_id} createNewPostFunction={createNewPost} />
        </ImageBackground>
      </View>
    )
};
export default ChatRoomScreen