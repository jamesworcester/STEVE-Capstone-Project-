import React from 'react'
import { View, Text } from 'react-native'
import { Header } from "@rneui/themed";

import { FlatList } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import ChatRooms from '../../../assets/data/ChatRooms';
import NewMessageButton from '../../components/NewMessageButton';
import ChatListItem from '../../components/ChatListItem/Index';

function Chatchannel() {
    return (
        
        <View >
            <Header 
            backgroundColor='#051C60'
            leftComponent={{ color: '#fff' }}
            centerComponent={{text:'CHAT CHANNELS', style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>

        <FlatList 
            data={ChatRooms}
            renderItem = {({item}) => <ChatListItem chatRoom={item}/>}
            keyExtractor = {(item) => item.id}
        />

        <NewMessageButton/> 

        </View>
        
    )
}

export default Chatchannel