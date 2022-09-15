import { Header } from "@rneui/base";
import React, { useState } from "react";
import { View, Text, Switch, Button} from "react-native";
import style from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5,AntDesign } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";
import { Feather } from '@expo/vector-icons';

const NewChannel = () =>{
    const navigation = useNavigation();
    const [ChannelName,setChannelName] = useState(''); 
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View>
            <Header //main header
            backgroundColor='#0096FF' centerComponent={{text:'New Channel', 
            style: {color: '#E6E6FA',fontSize:18}}}
            leftComponent={<AntDesign name="close" size={24} color="white" 
            onPress={() => {navigation.navigate('Chatchannel')}}/> } //navigate back to chatchannel
            />

            <Text style = {style.ForNameText}>Name </Text>
            
            <View style = {style.FirstContainer}>   
                {!isEnabled 
                ? <FontAwesome5 name="hashtag" size={18} color="black" 
                    style = {style.icon} /> 
                : <Feather name="lock" size={18} color="black" 
                    style = {style.icon}/>
                }   
                <TextInput style = {style.NewNameInput}
                    placeholder = {'e.g. plan-budget'}
                    value = {ChannelName}
                    onChangeText = {setChannelName}
                />
            </View>
            <Divider style = {{margin :15}} />

            <Text style = {style.ForDescText}>Description (optional) </Text>

            <TextInput style = {style.DescriptionInput}
                    placeholder = {'What is this channel about'}
            />

            <Divider style = {{margin :15}} />
          
            <Text style = {style.ForSettingText}>Channel settings </Text>
            <Text style = {style.ForMakePrivateText}>Make private </Text>
            <View style = {style.SecondContainer}>
                <Text style = {style.ForExplainText}>When a channel is set to private,members of your 
                    workspace can only view or join it by invitation
                 </Text>
                 <Switch
                trackColor={{ false: "#767577", true: "#D3D3D3" }}
                thumbColor={isEnabled ? "#00FF00" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled} />
            </View>
            <View style = {style.CreateButton}>
                {!ChannelName 
                ? <Button title="CREATE" color="#D3D3D3" 
                onPress={() => {alert('U have not typed the name of new channel')}}/>
                : <Button 
                    onPress={() => {navigation.navigate('AddMemberScreen')}} //navigate to Addmember screen after user click on create button
                    title="CREATE"
                    color="#0096FF"    
                />
                }
            </View>

        </View>
    )
}
export default NewChannel