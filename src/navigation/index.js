/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Edited by: James Worcester on 04/09/2022 (Sprint 8)
*/
//Navigation class that uses @react-navigation/native library for navigation between different screens of the app https://reactnavigation.org/docs/getting-started/
//react-native imports
import React from 'react';
import { View, Text } from 'react-native';
//@react-navigation/native imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//importing all other JavaScript screens for navigation to handle
//NOTE: IF YOU ADD A NEW SCREEN TO THE APP, MAKE SURE TO PUT IT IN A FOLDER IN THE 'screens' FOLDER WITH AN 'index.js' FILE AND IMPORT IT BELOW. 
//IT ALSO NEEDS TO BE ADDED WITHIN THE 'Navigation' LAMBDA FUNCTION BELOW!
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import Dashboard from '../screens/Dashboard';
import SurveyScreen from '../screens/SurveyScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';

import SurveyTest from '../screens/SurveyTest'
import CreateSurveyScreen from '../screens/CreateSurveyScreen';
import CreatedSurveyScreen from '../screens/CreatedSurveyScreen';
import CompletingSurveyScreen from '../screens/CompletingSurveyScreen';
import NewMessage from '../screens/NewMessage';
import AdminToolsScreen from '../screens/AdminToolsScreen';
import UpdateUserScreen from '../screens/UpdateUserScreen';
import CreateTeamScreen from '../screens/CreateTeamScreen';
import ViewTeamsScreen from '../screens/ViewTeamsScreen';
import ViewTeamMembersScreen from '../screens/ViewTeamMembersScreen';
import Profile from '../screens/Profile';
import NewChannel from '../screens/NewChannel';
import AddMemberScreen from '../screens/AddMemberScreen';
import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';

//create the navigation stack
const Stack = createStackNavigator();

//define a constant lambda function called Navigation to handle the navigation stack, and add all screens to the Stack.
//NOTE: IF YOU ADD A NEW SCREEN, MAKE SURE TO ADD IT BELOW WITH ITS OWN UNIQUE NAME
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  >
             <Stack.Group screenOptions={{headerShown: false}} > 
                <Stack.Screen name="Dashboard" component={Dashboard} options={{title: "Yes"}} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
                <Stack.Screen name="SurveyScreen" component={SurveyScreen} />
                <Stack.Screen name="SurveyTest" component={SurveyTest} />
                <Stack.Screen name="CreateSurvey" component={CreateSurveyScreen} />
                <Stack.Screen name="CreatedSurvey" component={CreatedSurveyScreen} />
                <Stack.Screen name="CompletingSurveyScreen" component={CompletingSurveyScreen} />
                <Stack.Screen name="Chatroom" component={ChatRoomScreen} />
                <Stack.Screen name="NewMessage" component={NewMessage} />  
                <Stack.Screen name="AdminTools" component={AdminToolsScreen} />
                <Stack.Screen name="UpdateUser" component={UpdateUserScreen} />
                <Stack.Screen name="CreateTeam" component={CreateTeamScreen} />
                <Stack.Screen name="ViewTeams" component={ViewTeamsScreen} />
                <Stack.Screen name="ViewTeamMembers" component={ViewTeamMembersScreen} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="NewChannel" component={NewChannel} /> 
                <Stack.Screen name="AddMemberScreen" component={AddMemberScreen} /> 
             </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

//export the Navigation function
export default Navigation;