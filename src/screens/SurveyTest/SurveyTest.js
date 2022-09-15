
/*
Programmer: Alex McCoy
*/
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions} from 'react-native';
import { Header } from "@rneui/themed";

import styles from "../../components/ChatListItem/style";

import { useNavigation } from '@react-navigation/native';
import PersonalisedButton from '../../components/PersonalisedButton';

import {useRoute} from '@react-navigation/native'

import { Octicons } from '@expo/vector-icons'; 


/*

hello 


function SurveyTest(route) {

    const navigation = useNavigation();

    const onSurveyPressed = () => { // Opens Survey Creator Screen
        navigation.navigate('SurveyScreen');
    }


    
    useEffect(() => {
        if (route.params?.name) {
            console.log('Sent Successfully.');     
        }

    }, [route.params?.name]);
        

    return(
        <View style={styles.containerSu} >
        <Header 
        backgroundColor='purple'
        centerComponent={{text:'TEEEEEEEEST', style: {color: 'white'}}}
        rightComponent={<Octicons name="arrow-left" size={24} color="white" 
        onPress={() => {navigation.navigate('Dashboard')}}/> }
        />
        </View>
    )
}

*/


function SurveyTest() {

    const navigation = useNavigation(); 

    return(
        <View>
          <Header 
          backgroundColor='purple'
          centerComponent={{text:'**Survey Name**', style: {color: 'white'}}}
          rightComponent={<Octicons name="arrow-left" size={24} color="white" 
          onPress={() => {navigation.navigate('Dashboard')}}/> }
          />
        </View>
    )
}

export default SurveyTest