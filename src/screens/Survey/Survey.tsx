import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { Header } from "@rneui/themed";

const bg = {uri: "https://www.solidbackgrounds.com/images/1080x1920/1080x1920-pastel-purple-solid-color-background.jpg"}
const Survey = () => {
    return (
        <View >
            <ImageBackground source={bg} style = {{height:'100%'}}>
                <Header 
                backgroundColor='purple'
                centerComponent={{text:'SURVEYS', style: {color: '#E6E6FA', fontSize:16}}}/>
            </ImageBackground>
        </View>
    )
}

export default Survey