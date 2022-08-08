import * as React from 'react'
import { View, Text } from 'react-native'
import { Header } from "@rneui/themed";


function FirstScreen() {
    return (
        <View>
            <Header 
            backgroundColor='purple'
            centerComponent={{text:'HOME', style: {color: 'white'}}}
            />

        </View>
    )
}

export default FirstScreen