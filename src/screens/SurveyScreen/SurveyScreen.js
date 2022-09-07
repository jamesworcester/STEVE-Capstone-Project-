import Survey from "../Survey";
import { useNavigation, useRoute } from '@react-navigation/native';
import React, {Component} from 'react'
import { Header } from "@rneui/themed";
import { SearchBar } from "@rneui/themed";
import { Octicons } from '@expo/vector-icons'; 

import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions} from 'react-native';
import {TextInput, Button} from 'react-native';
import { ListItemSubtitle } from "@rneui/base/dist/ListItem/ListItem.Subtitle";
import styles from "../../components/ChatListItem/style";
import {useState} from "react";


function SurveyCreate() {
  const [surveyName, setName] = useState('');
  const [surveyQ1, setQ1] = useState('');
  const [surveyQ2, setQ2] = useState('');
  const [surveyQ3, setQ3] = useState('');
  const [surveyQ4, setQ4] = useState('');
  const [surveyQ5, setQ5] = useState('');


  const navigation = useNavigation(); 

  const SaveSurvey = () =>{
    navigation.navigate({
      name: 'Dashboard',
      params: {name: surveyName },
      merge: true,
    });
  };

  return (
      <View style={styles.containerSu} >
          <Header 
          backgroundColor='purple'
          centerComponent={{text:'Create a Survey', style: {color: 'white'}}}
          rightComponent={<Octicons name="arrow-left" size={24} color="white" 
          onPress={() => {navigation.navigate('Dashboard')}}/> }
          />



          <TextInput 
          style={styles.input}
          placeholder= 'Enter Survey Name'
          onChangeText={(val) => setName(val)} />



          <TextInput 
          style={styles.inputQuestion}
          placeholder= 'Enter Question 1'
          onChangeText={(val) => setQ1(val)}
          multiline />

          <TextInput 
          style={styles.inputQuestion}
          placeholder= 'Enter Question 2'
          onChangeText={(val) => setQ2(val)}
          multiline />
          
          <TextInput 
          style={styles.inputQuestion}
          placeholder= 'Enter Question 3'
          onChangeText={(val) => setQ3(val)}
          multiline />

          <TextInput 
          style={styles.inputQuestion}
          placeholder= 'Enter Question 4'
          onChangeText={(val) => setQ4(val)}
          multiline />

          <TextInput 
          style={styles.inputQuestion}
          placeholder= 'Enter Question 5'
          onChangeText={(val) => setQ5(val)}
          multiline />

      <Button title='Create Survey' color="purple"onPress={SaveSurvey}/>
      
      <Text style={{margin: 10}}> TESTING DATA INPUTS</Text>
      <Text>Survey Name: {surveyName}</Text>
      <Text>Question 1: {surveyQ1}</Text>
      <Text>Question 2: {surveyQ2}</Text>
      <Text>Question 3: {surveyQ3}</Text>
      <Text>Question 4: {surveyQ4}</Text>
      <Text>Question 5: {surveyQ5}</Text>
                
        
      </View>
  )
}


export default SurveyCreate