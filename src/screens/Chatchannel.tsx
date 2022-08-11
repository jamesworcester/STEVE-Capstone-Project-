import React from 'react'
import { View, Text } from 'react-native'
import { Header } from "@rneui/themed";
import { SearchBar } from "@rneui/themed";

import 'react-native-gesture-handler';

//import ChatListItem from '../components/ChatListItem/Index';
import chatRooms from '../../assets/data/ChatRooms';

import NestedList from '../components/ChatListItem/Nestedlist';


function Chatchannel() {
    return (
        
        <View >
            <Header 
            backgroundColor='purple'
            leftComponent={{ icon: 'local-parking', color: '#fff' }}
            centerComponent={{text:'ProjectB', style: {color: 'white'}, 
            }}/>

            <NestedList 
            />
    
        </View>
        
    )
}

export default Chatchannel