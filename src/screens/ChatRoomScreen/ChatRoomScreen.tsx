/*
Programmer: Hung
Edited by: James Worcester on 15/09/2022 (Sprint 9)
*/
import React from "react";
import { Text,View, FlatList, ImageBackground} from "react-native";
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
          // console.log("TEST")
          console.log(postData)
          // console.log(postData.data.listPostsByChannelWithName)
          setPost(postData.data.listPostsByChannelWithName);
          //console.log(post)
        }
        catch(e)
        {
          console.log(e);
        }
      }
      listPostsByChannel();
  }, []);

    const updatePost = () => {
      
      setPost([...post, {id: post.length, user_id: myId, content: "test"}]);
      //console.log("test")
    }

    const createNewPost = async (content) => {
      try 
      {
         // console.log(channel_id)
          //props.test();
          //console.log(props.test());
          const postObject = await API.graphql(graphqlOperation(mutations.createPostContent, {input: {channel_id: channel_id, user_id: myId, content: content}}));
          //console.log(postObject);
          //const postObject2 = postObject.data.createPostContent.user_id;
          //const postObject3 = await API.graphql(graphqlOperation(queries.getUser, {id: postObject2}));
          setPost([...post, {channel_id: channel_id, user_id: myId, content: content}]);
          
      }
      catch(e)
      {
          console.log(e);
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

          <InputBox channel_id={channel_id} test={createNewPost} /> 
         
        </ImageBackground>

        
          
        
        </View>
    )
};
export default ChatRoomScreen