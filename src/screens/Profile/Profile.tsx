import React from 'react'
import { View, Text } from 'react-native'
import { Header, Avatar } from "@rneui/themed";
import { useNavigation } from '@react-navigation/native';
import { Octicons,FontAwesome } from '@expo/vector-icons'; 
import style from './styles';
import { Divider } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const ava = {uri: "https://pbs.twimg.com/profile_images/1482915501328465926/ubBPGeOT_400x400.jpg"}
function Profile() {

    const navigation = useNavigation(); 
    return (
        <View >
            <Header 
            backgroundColor='#0096FF'centerComponent={{text:'PROFILE', 
            style: {color: '#E6E6FA',fontSize:16}}}
            rightComponent={<Octicons name="sign-out" size={24} color="white" 
            onPress={() => {navigation.navigate('SignIn')}}/> }
            />
            <View style = {style.mainAva}>
                <Avatar source={ava} size ={'xlarge'}
                rounded
                />
                <Text style = {style.userName}>Duc Hung Tran</Text>
            </View>
            <View style = {style.userLocation}>
                <FontAwesome name="location-arrow" size={20} color="black" />
                <Text>Latrobe Uni,Melbourne</Text>
            </View>
            <Divider style = {{marginTop : 30, marginBottom:20}} 
            subHeader = {'ABOUT ME'} subHeaderStyle = {{marginLeft:10}}/>
            <TextInput style = {style.textDescription}
                    placeholder = {'Describe your bio here'}
                    multiline
                    //value={message}
                    //onChangeText = {setMessage}
                />
        </View>
    )
}

export default Profile