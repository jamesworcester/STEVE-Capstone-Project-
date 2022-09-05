import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { Header } from "@rneui/themed";


const Survey = () => {
    return (
        <View >
            
                <Header 
                backgroundColor='#0096FF'
                centerComponent={{text:'SURVEYS', style: {color: '#E6E6FA', fontSize:16}}}/>

        </View>
    )
}

export default Survey