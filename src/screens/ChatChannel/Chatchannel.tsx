import React from 'react'
import { View, Text } from 'react-native'
import { Header } from "@rneui/themed";

import { FlatList } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import ChatRooms from '../../../assets/data/ChatRooms'; //import dummy data
import CreateNewChannel from '../../components/CreateNewChannel'; //import the blue plus button 
import ChatListItem from '../../components/ChatListItem/Index'; //import chatlistitem component so we can display it on a flatlist

function Chatchannel() {
    return (
        
        <View >
            <Header // Header of the screen 
            backgroundColor='#051C60'
            leftComponent={{ color: '#fff' }}
            centerComponent={{text:'CHAT CHANNELS', style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>

        <FlatList 
            data={ChatRooms} // get the dummy data to display it on flatlist
            renderItem = {({item}) => <ChatListItem chatRoom={item}/>} //display all the Chatlistitem components (its also understanded as a channel)here
            keyExtractor = {(item) => item.id} // this is id for every single channel 
        />

        <CreateNewChannel/> 

        </View>
        
    )
}

export default Chatchannel