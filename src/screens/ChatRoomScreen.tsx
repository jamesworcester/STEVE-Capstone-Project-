import React from "react";
import { Text,View } from "react-native";
import { Header } from "@rneui/themed";
import { useRoute } from "@react-navigation/native";
import { AntDesign, Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'; 


import { useNavigation } from "@react-navigation/native";
const ChatRoomScreen =() => {

    const route = useRoute();
    const navigation = useNavigation();
    return (
        <View >
            <Header 
            backgroundColor='purple'
            leftComponent={<AntDesign name="back" color="white" size={24} 
            onPress={() => {navigation.navigate('Chatchannel')}}/>}
            centerComponent={{text: `${route.params.name}`, style: { color: '#fff',fontSize:20 }}}
            rightComponent={<View style={{
                flexDirection: 'row',
                width: 100,
                justifyContent: 'space-between',
                marginRight: -5,
              }}>
                <Ionicons name="videocam" size={24} color="white" />
                <MaterialIcons name="call" size={22} color={'white'} />
                <Entypo name="dots-three-vertical" size={24} color="white" />
              </View>}
            />
            
        </View>
    )
};

export default ChatRoomScreen