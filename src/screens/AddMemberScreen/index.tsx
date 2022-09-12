import React from "react";
import { View,Text,Button } from "react-native";
import style from "./styles";
import { Header } from "@rneui/themed";
import { FontAwesome5,AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import {  Divider } from "react-native-paper";
import { useState } from "react";

const AddMemberScreen = () => {
    const navigation = useNavigation();
    const [NewUserName,setNewUserName] = useState('')
    return (
    <View>
        <Header 
            backgroundColor='#0096FF' centerComponent={{text:'Add members', 
            style: {color: '#E6E6FA',fontSize:18}}}
            leftComponent={<AntDesign name="close" size={24} color="white" 
            onPress={() => {navigation.navigate('NewChannel')}}/> }
            />
        <TextInput style = {style.AddMemberInput}
                    placeholder = {'e.g. name@example.com'}
                    value = {NewUserName}
                    onChangeText = {setNewUserName}
        />  

        <Divider style = {{margin :10}} /> 

        <View style = {style.container}>
            <FontAwesome5 name="user-check" size={20} color="black" />

            <View style = {style.forText}>
                <Text>YOUR USERNAME </Text>
            {/* gonna use sth like this `${route.params.name}` to fetch username from database*/}
                <Text>Already in this channel</Text>
            </View>
        </View> 
        <View style = {style.AddButton}>
                {!NewUserName 
                ? <Button title="ADD" color="#D3D3D3" 
                onPress={() => {alert('U have not typed the name of new member u wanna add')}}/>
                : <Button 
                    onPress={() => {console.log('Added :)')}}
                    title="ADD"
                    color="#0096FF"    
                />
                }
            </View>
    </View>
    )}

export default AddMemberScreen