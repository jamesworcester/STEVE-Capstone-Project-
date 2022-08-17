import * as React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { Header } from "@rneui/themed";

const bg = {uri: "https://raw.githubusercontent.com/Savinvadim1312/WhatsappClone/main/assets/images/BG.png"}

function FirstScreen() {
    return (
        <View>
            <Header 
            backgroundColor='purple'
            centerComponent={{text:'HOME', style: {color: 'white', fontSize:16}}}
            />
            <ImageBackground source={bg}
                style={{height:"100%"}}
            >
               
            </ImageBackground>
        </View>
    )
}

export default FirstScreen