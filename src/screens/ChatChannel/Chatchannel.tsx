/*
Programmer: Hung
Edited by: James Worcester on 15/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: ChatChannel
*/

/*
Purpose: 
1. Screen to display a Flatlist of chat channels that can be clicked on to be navigated to the ChatistItem component and then the Chatroom Screen for that channel
*/

import React from 'react'
import { Header } from "@rneui/themed";
import { FlatList } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import CreateNewChannel from '../../components/CreateNewChannel'; //import the blue plus button 
import ChatListItem from '../../components/ChatListItem/Index'; //import chatlistitem component so we can display it on a flatlist
import { Alert, View } from 'react-native';
import {useEffect, useState} from "react";
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';

export default function Chatchannel() {
    const [channel, setChannel] = useState([]);

    useEffect(() => {
        const getChannels = async () => {
            try {
                const channelData = await API.graphql(graphqlOperation(queries.listChannels)); //get all channels in the database and store in the channelData array
                setChannel(channelData.data.listChannels); //set the channel state to channelData.data.listChannels
            }
            catch(e)
            {
                Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
            }
        }
        getChannels();
    }, []);

    return (
        <View >
            <Header
                backgroundColor='#051C60'
                leftComponent={{ color: '#fff' }}
                centerComponent={{text:'CHAT CHANNELS', style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>
            <FlatList 
                data={channel}
                renderItem = {({item}) => <ChatListItem channel={item}/>}
                keyExtractor = {(item) => item.id}
            />
        <CreateNewChannel/> 
        </View>
    )
}

export default Chatchannel