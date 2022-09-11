import React from 'react'
import { View, Text } from 'react-native'
import { Header } from "@rneui/themed";

import { FlatList } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import ChatRooms from '../../../assets/data/ChatRooms';
import CreateNewChannel from '../../components/CreateNewChannel';
import ChatListItem from '../../components/ChatListItem/Index';

function Chatchannel() {
    return (
        
        <View >
            <Header 
            backgroundColor='#0096FF'
            leftComponent={{ color: '#fff' }}
            centerComponent={{text:'CHAT CHANNELS', style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>

        <FlatList 
            data={ChatRooms}
            renderItem = {({item}) => <ChatListItem chatRoom={item}/>}
            keyExtractor = {(item) => item.id}
        />

        <CreateNewChannel/> 

        </View>
        
    )
}

export default Chatchannel