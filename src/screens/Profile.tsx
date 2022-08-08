import React from 'react'
import { View, Text } from 'react-native'
import { Header } from "@rneui/themed";

function Profile() {
    return (
        <View >
            <Header 
            backgroundColor='purple'
            centerComponent={{text:'PROFILE', style: {color: 'white'}}}/>
        </View>
    )
}

export default Profile