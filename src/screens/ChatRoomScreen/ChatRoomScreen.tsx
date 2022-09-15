import React from "react";
import { Text,View, FlatList, ImageBackground} from "react-native";
import { Header } from "@rneui/themed";
import { useRoute } from "@react-navigation/native";
import { AntDesign, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'; 
import chatRoomData from "../../../assets/data/Chats"; //import chat data from dummy data
import { useNavigation } from "@react-navigation/native";
import ChatMessage from "../../components/ChatMessage";
import InputBox from "../../components/InputBox"; 

const bg = {uri: "https://raw.githubusercontent.com/Savinvadim1312/WhatsappClone/main/assets/images/BG.png"}

const ChatRoomScreen =() => {
  
    const route = useRoute();
    const navigation = useNavigation();
    return (
        <View>
            <ImageBackground  style={{width:'100%',height:'100%'}} source={bg} >
            <Header 
            backgroundColor='#0096FF'
            leftComponent={<AntDesign name="back" color="white" size={24} 
            onPress={() => {navigation.navigate('Chatchannel')}}/>}
            centerComponent={{text: `${route.params.name}`, style: { color: '#fff',fontSize:20 }}}
            //display the name of user u are chatting with on the center of header
            />
        

        
          <FlatList 
            data={chatRoomData.messages}  //get the message data from dummy data
             renderItem={({item}) => <ChatMessage message={item}/> } //to display content from message dummy data
            // inverted
          />

          <InputBox /> 
         
        </ImageBackground>

        
          
        
        </View>
    )
};
export default ChatRoomScreen