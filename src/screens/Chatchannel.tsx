import React from 'react'
import { View, Text } from 'react-native'
import { Header } from "@rneui/themed";
import { SearchBar } from "@rneui/themed";

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator();

function Chatchannel() {
    return (
        
        <View >
            <Header 
            backgroundColor='purple'
            leftComponent={{ icon: 'local-parking', color: '#fff' }}
            centerComponent={{text:'ProjectB', style: {color: 'white'}, 
            }}/>
            <SearchBar 
                placeholder="Jump to..."
                round = {true}
                showCancel = {true}
                showLoading = {false}
                lightTheme = {true} 
            />
    
        </View>
        
    )
}

export default Chatchannel