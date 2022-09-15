import React from 'react'
import { Header } from "@rneui/themed";
import { FlatList } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import ChatRooms from '../../../assets/data/ChatRooms';
import CreateNewChannel from '../../components/CreateNewChannel';
import ChatListItem from '../../components/ChatListItem/Index';
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions} from 'react-native';
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

export default function Chatchannel() {
    const [channel, setChannel] = useState([]);

    useEffect(() => {
        const getChannels = async () => {
            try {
                
                const channelData = await API.graphql(graphqlOperation(queries.listChannels));
                setChannel(channelData.data.listChannels);
            }
            catch(e)
            {
                console.log(e);
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