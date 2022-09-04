import * as React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { Header } from "@rneui/themed";
import styles from './styles';
const bg = {uri: "https://wallpaperaccess.com/full/7158588.jpg"}

function FirstScreen() {
    return (
        <View>
            <ImageBackground source={bg} style = {styles.ImageBackground}
            >
                <Header 
                centerComponent={{text:'HOME', style: {color: '#E6E6FA',fontSize:16}}}
                backgroundColor = 'purple'
                />
            <Text style = {styles.mainText}> WELCOME BACK! </Text>
            </ImageBackground>
            
        </View>
    )
}

export default FirstScreen