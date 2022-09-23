/*
Programmer: Hung
Edited by: James Worcester on 15/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: NewChannel
*/

/*
Purpose: 
1. Screen to allow users to create a new Chat Channel in the Channel table in the database
*/

import { Header } from "@rneui/base";
import React, { useState } from "react";
import { View, Text, Switch} from "react-native";
import style from "./styles";
import { FontAwesome5,AntDesign } from '@expo/vector-icons';
import { Divider } from "react-native-paper";
import { Feather } from '@expo/vector-icons';
import { Alert, useWindowDimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
//user defined component imports
import PersonalisedInput from '../../components/PersonalisedInput';
import PersonalisedButton from '../../components/PersonalisedButton';
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

const NewChannel = () =>{
    const {control, handleSubmit, watch} = useForm(); 
    const pwd = watch('password'); //watch the password being entered in the 'password' PersonalisedInput
    const navigation = useNavigation();
    const {height} = useWindowDimensions(); 

    const onSubmit = async (data) => {
        const {name, description} = data
        try 
        {
            const newChannel = await API.graphql(graphqlOperation(mutations.createChannel_NameDescription, {input: {channel_text: name, description: description}})); //create a new channel in the Channel table in the database
            navigation.navigate('Chatchannel')
        }
        catch(e)
        {
            Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
        }
    }

    //const [ChannelName,setChannelName] = useState(''); 
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View>
            <Header
            backgroundColor='#0096FF' centerComponent={{text:'New Channel', 
            style: {color: '#E6E6FA',fontSize:18}}}
            leftComponent={<AntDesign name="close" size={24} color="white" 
            onPress={() => {navigation.navigate('Chatchannel')}}/> }
            />

            <Text style = {style.ForNameText}>Name </Text>
            
            <View style = {style.FirstContainer}>   
                {!isEnabled 
                ? <FontAwesome5 name="hashtag" size={18} color="black" 
                    style = {style.icon} /> 
                : <Feather name="lock" size={18} color="black" 
                    style = {style.icon}/>
                }   

                <PersonalisedInput
                    name="name"
                    control={control}  
                    placeholder="Channel Name"
                    rules={{
                        required: 'Channel Name is required',
                        }}
                />
            
            </View>
            <Divider style = {{margin :15}} />
            <Text style = {style.ForDescText}>Description (optional) </Text>
            <PersonalisedInput //Custom TextInput
                name="description"
                control={control}  
                placeholder="Description"
                rules={{
                    required: 'Description is required', //sets the Repeat Password as required
                    }}
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
            <View>
            <PersonalisedButton //Register Button
                    text="Register"
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
        </View>
    )
}
export default NewChannel