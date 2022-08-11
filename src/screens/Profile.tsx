import React from 'react'
import { View, Text } from 'react-native'
import { Header } from "@rneui/themed";
import { Button } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons'; 

function Profile() {

    const navigation = useNavigation(); 
    return (
        <View >
            <Header 
            backgroundColor='purple'
            centerComponent={{text:'PROFILE', style: {color: 'white'}}}
            rightComponent={<Octicons name="sign-out" size={24} color="white" 
            onPress={() => {navigation.navigate('SignIn')}}/> }
            />
        </View>
    )
}

export default Profile