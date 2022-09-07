import { Button,color,Header } from "@rneui/base";
import React from "react";
import { View, Text } from "react-native";
import style from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'; 
import { TextInput } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";
const NewMessage = () =>{
    const navigation = useNavigation();
    return(
        <View>
            <Header 
            backgroundColor='#0096FF' centerComponent={{text:'New message', 
            style: {color: '#E6E6FA',fontSize:16}}}
            leftComponent={<AntDesign name="close" size={24} color="white" 
            onPress={() => {navigation.navigate('Chatchannel')}}/> }
            />
            <View style = {style.mainContainer}>
                <Text style = {style.forText}>TO: </Text>
                <TextInput style = {style.searchChannelInput}
                    placeholder = {'Search for a channel or conversation'}
                />
                <AntDesign name="adduser" size={25} color="black" 
                    style = {style.icon} />
            </View>
            <Divider style = {{margin :15}} />
            <View style = {style.subContainer}>
                <Text style = {{marginVertical :10, fontSize:18}}>#    Freeware</Text>
                <Text style = {{marginVertical :10, fontSize:18}}>#    General</Text>
                <Text style = {{marginVertical :10, fontSize:18}}>#    Random</Text>
            </View>
            <Divider style = {{margin :10}} />
            <View style = {style.writeMessage}>
                <AntDesign name="pluscircleo" size={24} color="black" />
                <TextInput style = {style.writeMessage2}
                    placeholder = {'Write a message'}/>
            </View>
        </View>
    )
}
export default NewMessage