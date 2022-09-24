/*
Programmer: Hung
Edited by: James Worcester on 15/09/2022 (Sprint 9)
*/
import React from "react";
import { Text,View, FlatList, ImageBackground, Alert} from "react-native";
import { Header } from "@rneui/themed";
import { useRoute } from "@react-navigation/native";
import { AntDesign, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'; 
import chatRoomData from "../../../assets/data/Chats"; //import chat data from dummy data
import ChatMessage from "../../components/ChatMessage";
import InputBox from "../../components/InputBox"; 
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
import {useEffect, useState} from "react";


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
            Alert.alert('Error', e.message); //if an error occurs, catch it and throw up an alert with the contents of the error
        }
      }
      listPostsByChannel();
  }, []);

    const createNewPost = async (content) => {
      try 
      {
          const postObject = await API.graphql(graphqlOperation(mutations.createPostContent, {input: {channel_id: channel_id, user_id: myId, content: content}}));
          setPost([...post, {channel_id: channel_id, user_id: myId, content: content}]); //add a new post to the post array's state through the setPost function, causing an async render
      }
      catch(e)
      {
          Alert.alert('Error', e.message); //if an error occurs, catch it and throw up an alert with the contents of the error
      }
  }

  useEffect(() => {
    const getId = async () => {
      const user = await Auth.currentAuthenticatedUser();
      const { username } = user; //get the id (username in this case) of the current user
      setId(username);
    }
    getId();
  }, [])

    return (
        <View>
            <ImageBackground style={{width:'100%',height:'100%'}} source={bg} >
            <Header 
            backgroundColor='#0096FF'
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