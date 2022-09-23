/*
Programmer: Hung
Edited by: James Worcester on 15/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: Dashboard
*/

/*
Purpose: 
1. Component used to create a dashboard for the user to navigate through the app
*/

import React from 'react'
import 'react-native-gesture-handler';
import FirstScreen from '../FirstScreen/FirstScreen';
import Chatchannel from '../ChatChannel/Chatchannel';
import Profile from '../Profile/Profile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import AdminToolsScreen from '../AdminToolsScreen';
import UserScreen from '../UserScreen/UserScreen';
import SurveyHomeScreen from '../SurveyHomeScreen';

const Tab = createMaterialBottomTabNavigator();

const Dashboard = () => {
    return (
    <Tab.Navigator shifting={true} 
        barStyle={{ backgroundColor: '#051C60' }} 
        activeColor="white" 
        >
        <Tab.Screen name="Admin" component={AdminToolsScreen}       //Admin Tools Screen
            options={{
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shield-crown-outline" color={color} size={26}/>
        ),
    }}/>
        <Tab.Screen name="Home" component={FirstScreen}             //Home Screen
            options={{
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26}/>
        ),
    }}/>
      <Tab.Screen name="Survey" component={SurveyHomeScreen}        // Survey Screen
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
    
    <Tab.Screen name="Directory" component={UserScreen}      // User Directory Screen
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