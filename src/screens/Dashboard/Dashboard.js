/*
Programmer: Hung
Edited by: James Worcester on 15/09/2022 (Sprint 9)
*/
import React, { Component } from 'react'

import 'react-native-gesture-handler';
import FirstScreen from '../FirstScreen/FirstScreen';
import Survey from '../Survey/Survey';
import Chatchannel from '../ChatChannel/Chatchannel';
import Profile from '../Profile/Profile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import CreateSurveyScreen from '../CreateSurveyScreen';
import AdminToolsScreen from '../AdminToolsScreen';
import UserSearchScreen from '../UserSearchScreen';





const Tab = createMaterialBottomTabNavigator();

const Dashboard = () => {

    return (
        
        
    <Tab.Navigator shifting={true} 
        barStyle={{ backgroundColor: '#051C60' }} 
        activeColor="white" 
        >
        <Tab.Screen name="Admin" component={AdminToolsScreen}        
            options={{
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shield-crown-outline" color={color} size={26}/>
        ),
    }}/>
        <Tab.Screen name="Home" component={FirstScreen}        
            options={{
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26}/>
        ),
    }}/>
      <Tab.Screen name="Survey" component={CreateSurveyScreen}        // Survey Screen
      options={{
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file-document-multiple" color={color} size={26}/>
        ),
    }}/>
    
      <Tab.Screen name="Chatchannel" component={Chatchannel}      // Channel Screen
      options={{
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wechat" color={color} size={26}/>
        ),
    }}/>
    
    <Tab.Screen name="Directory" component={UserSearchScreen}      // Channel Screen
      options={{
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wechat" color={color} size={26}/>
        ),
    }}/>

      <Tab.Screen name="Profile" component={Profile}            // Profile Screen
      options={{
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26}/>
        ),
    }}/>
    </Tab.Navigator>
    
    )
};

export default Dashboard;