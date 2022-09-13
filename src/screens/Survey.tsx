import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions, ShadowPropTypesIOS} from 'react-native';
import { Header } from "@rneui/themed";

import styles from "../components/ChatListItem/style";

import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/PersonalisedButton';

import {useRoute} from '@react-navigation/native'


function Survey(route) {

    const navigation = useNavigation();

    const onSurveyPressed = () => { // Opens Survey Creator Screen
        navigation.navigate('SurveyScreen');
    }


    
    useEffect(() => {
        if (route.params?.name) {
            console.log('Sent Successfully.');     
        }

    }, [route.params?.name]);
        
    

    return (
        <View >
            <Header 
            backgroundColor='purple'
            centerComponent={{text:'SURVEYS', style: {color: 'white'}}}/>
            
            <PersonalisedButton //Navigate Survey
                text="Create a Survey"
                onPress={onSurveyPressed}
                type="THIRD"
                />

            <Text style={{
                margin: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                padding: 20
                }} onPress={() => {navigation.navigate('SurveyTest')}} >
                    **Survey Name** {route.params?.name}
                 </Text>


            
            
            
                
        </View>




    )


}

export default Survey