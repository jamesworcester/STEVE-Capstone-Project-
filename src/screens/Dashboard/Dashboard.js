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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import AdminToolsScreen from '../AdminToolsScreen';
import UserScreen from '../UserScreen/UserScreen';
import SurveyHomeScreen from '../SurveyHomeScreen';
import VisualizationScreen from '../VisualizationScreen';
import CreateTeamScreen from '../CreateTeamScreen';
import TeamScreen from '../TeamScreen/TeamScreen';
import ViewAssignedSurveysScreen from '../ViewAssignedSurveysScreen/ViewAssignedSurveysScreen';
import CreateSurveyScreen from '../CreateSurveyScreen/CreateSurveyScreen';
import NewChannel from '../NewChannel';
import TeamMembersScreen from '../TeamMembers/TeamMembers';
import AddTeamMember from '../AddTeamMember';
import ReviewSurveyScreen from '../ReviewSurveyScreen';
import AssignSurveyToTeamScreen from '../AssignSurveyToTeamScreen/AssignSurveyToTeamScreen';
import ViewAssignedSurveyDetailsScreen from '../ViewAssignedSurveyDetails';
import AnswerSurveyScreen from '../AnswerSurveyScreen';
import PublicProfileScreen from '../PublicProfileScreen';
import ViewSurveyResultsScreen from '../ViewSurveyResultsScreen';
import ViewSurveysWithResultsScreen from '../ViewSurveysWithResultsScreen/ViewSurveysWithResultsScreen';

const AdminStack = createNativeStackNavigator(); // CREATE a stack navigator for Admin TAB
function AdminToolsScreenStack() {
    return (
      <AdminStack.Navigator screenOptions={{headerShown: false}}>
        <AdminStack.Screen name="AdminToolsScreen" component={AdminToolsScreen} />
        <AdminStack.Screen name="CreateTeam" component={CreateTeamScreen} />
        <AdminStack.Screen name="Team" component={TeamScreen} />
        <AdminStack.Screen name="TeamMembers" component={TeamMembersScreen} />
        <AdminStack.Screen name="AddTeamMember" component={AddTeamMember} />
        <AdminStack.Screen name="VisualizationScreen" component={VisualizationScreen} />
      </AdminStack.Navigator> 
    );
  }

const SurveyStack = createNativeStackNavigator();// CREATE a stack navigator for Survey TAB
  function SurveyHomeScreenStack() {
      return (
        <SurveyStack.Navigator screenOptions={{headerShown: false}}>
          <SurveyStack.Screen name="SurveyHome" component={SurveyHomeScreen} />
          <SurveyStack.Screen name="CreateSurvey" component={CreateSurveyScreen} />
          <SurveyStack.Screen name="ReviewSurvey" component={ReviewSurveyScreen} />
          <SurveyStack.Screen name="AssignSurveyToTeam" component={AssignSurveyToTeamScreen} />
          <SurveyStack.Screen name="ViewAssignedSurveyDetails" component={ViewAssignedSurveyDetailsScreen} />
          <SurveyStack.Screen name="ViewAssignedSurveys" component={ViewAssignedSurveysScreen} />
          <SurveyStack.Screen name="AnswerSurvey" component={AnswerSurveyScreen} />
          <SurveyStack.Screen name='FirstScreen' component={FirstScreen}/>
          <SurveyStack.Screen name="ViewSurveysWithResults" component={ViewSurveysWithResultsScreen} />
          <SurveyStack.Screen name="ViewSurveyResults" component={ViewSurveyResultsScreen} />
        </SurveyStack.Navigator>
      );
    }  

const ChatStack = createNativeStackNavigator(); // CREATE a stack navigator for Chat TAB
    function ChatchannelStack() {
        return (
        <ChatStack.Navigator screenOptions={{headerShown: false}}>
          <ChatStack.Screen name="Chatchannel" component={Chatchannel} />
          <ChatStack.Screen name="NewChannel" component={NewChannel} />
        </ChatStack.Navigator>
        )
    }  
const DirectoryStack = createNativeStackNavigator(); // CREATE a stack navigator for Directory TAB
    function UserScreenStack() {
      return (
        <DirectoryStack.Navigator screenOptions={{headerShown: false}}>
          <DirectoryStack.Screen name="User" component={UserScreen} />
          <DirectoryStack.Screen name="PublicProfile" component={PublicProfileScreen} />
        </DirectoryStack.Navigator>
      )
    }

const Tab = createMaterialBottomTabNavigator();

const Dashboard = () => {
    return (
    <Tab.Navigator shifting={true} 
        barStyle={{ backgroundColor: '#051C60' }} 
        activeColor="white" 
        >
        <Tab.Screen name="Admin" component={AdminToolsScreenStack}       //Admin Tools Screen
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
      <Tab.Screen name="Survey" component={SurveyHomeScreenStack}        // Survey Screen
      options={{
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file-document-multiple" color={color} size={26}/>
        ),
    }}/>
    
      <Tab.Screen name="Chat" component={ChatchannelStack}      // Channel Screen
      options={{
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wechat" color={color} size={26}/>
        ),
    }}/>
    
    <Tab.Screen name="Directory" component={UserScreenStack}      // Channel Screen
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