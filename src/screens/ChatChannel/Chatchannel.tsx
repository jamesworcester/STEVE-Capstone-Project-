/*
Programmer: Hung
Edited by: James Worcester on 15/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
Edited by: Ali Alriyami
*/

/*
Name: ChatChannel
*/

/*
Purpose:
1. Screen to display a Flatlist of chat channels that can be clicked on to be navigated to the ChatistItem component and then the Chatroom Screen for that channel
*/

import { Header } from "@rneui/themed";
import { FlatList } from 'react-native-gesture-handler';
import CreateNewChannel from '../../components/CreateNewChannel'; //import the blue plus button
import ChatListItem from '../../components/ChatListItem/Index'; //import chatlistitem component so we can display it on a flatlist
import { Alert, View, TextInput, StyleSheet, Text } from 'react-native';
import {React, useEffect, useState} from "react";
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';

export default function Chatchannel() {
    const [channel, setChannel] = useState([]);
    const [typeData, setTypeData]= useState("");
     const [filteredChannels, setFilteredChannels]= useState([]);
      const channels= filteredChannels;


    useEffect(() => {
        const getChannels = async () => {
            try {
                const channelData = await API.graphql(graphqlOperation(queries.listChannels)); //get all channels in the database and store in the channelData array
                setChannel(channelData.data.listChannels); //set the channel state to channelData.data.listChannels
               setFilteredChannels(channelData.data.listChannels);
            }
            catch(e)
            {
                Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
            }
        }
        getChannels();
    }, []);

      function searchChannels(val) {
          setTypeData(val);

        if(val === ""){
        setChannel(channels)
        }

           setChannel(channels);

            setChannel(oldChannels=> {
             return oldChannels.filter(User=> {return User.channel_text.toLowerCase().includes(typeData.toLowerCase())});
            });
        }

    const reset=()=> {
         setChannel(channels);
    }

    return (
        <View>
            <Header
                backgroundColor='#051C60'
                leftComponent={{ color: '#fff' }}
                centerComponent={{text:'CHAT CHANNELS', style: {color: '#E6E6FA', fontSize : 16},
            }}/>

            <TextInput style={stylesIn.textInputStyle} placeholder="Search for channel(s) by title..."  value={typeData} onChangeText={(val)=> searchChannels(val)}/>
            <Text style={stylesIn.resetStyle} onPress={reset}>RESET CHANNELS</Text>
            <FlatList
                data={channel}
                renderItem = {({item}) => <ChatListItem channel={item}/>}
                keyExtractor = {(item) => item.id}
            />
        <CreateNewChannel/>
        </View>
    )
}

const stylesIn = StyleSheet.create({
    textInputStyle: {
        height: 50,
        borderWidth: 2,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#051C60',
        backgroundColor: 'white'
    },
    resetStyle: {
            height: 25,
            borderWidth: 2,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            margin: 5,
            borderColor: '#051C60',
            backgroundColor: '#999999'
    }
});

export default Chatchannel