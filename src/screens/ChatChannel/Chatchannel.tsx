import React from 'react'
import { View, Text } from 'react-native'
import { Header } from "@rneui/themed";
import { SearchBar } from "@rneui/themed";

import 'react-native-gesture-handler';

import chatRooms from '../../../assets/data/ChatRooms';

import NestedList from '../../components/ChatListItem/Nestedlist';
import NewMessageButton from '../../components/NewMessageButton';


function Chatchannel() {
    return (
        
        <View >
            <Header 
            backgroundColor='purple'
            leftComponent={{ color: '#fff' }}
            centerComponent={{text:'CHAT CHANNELS', style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>

            <NestedList 
            />
            <NewMessageButton/>
        </View>
        
    )
}

export default Chatchannel