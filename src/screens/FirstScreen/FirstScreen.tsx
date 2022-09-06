import * as React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { Header } from "@rneui/themed";
import styles from './styles';
const bg = {uri: "https://wallpaperaccess.com/full/7158588.jpg"}

function FirstScreen() {
    //<ImageBackground source={bg} style = {styles.ImageBackground}>
    //</ImageBackground>
    return (
        <View>
                <Header 
                centerComponent={{text:'HOME', style: {color: '#E6E6FA',fontSize:16}}}
                backgroundColor = '#051C60'
                />
            <Text style = {styles.mainTextBlack}> WELCOME BACK!</Text>
        </View>
    )
}

export default FirstScreen