/*
Programmer: James Worcester
Created by: James Worcester on 31/07/2022 (Sprint 6)
Edited by: James Worcester on 04/09/2022 (Sprint 8)
Edited by: James Worcester on 15/09/2022 (Sprint 9)
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
import AdminToolsScreen from '../screens/AdminToolsScreen';
import UpdateUserScreen from '../screens/UpdateUserScreen';
import CreateTeamScreen from '../screens/CreateTeamScreen';
import Profile from '../screens/Profile';
import AssignTeamMemberScreen from '../screens/AssignTeamMemberScreen';
import AddMemberScreen from '../screens/AddMemberScreen';
import NewChannel from '../screens/NewChannel';
import UserSearchScreen from '../screens/UserSearchScreen';
import TeamScreen from '../screens/TeamScreen/TeamScreen';
import UserScreen from '../screens/UserScreen/UserScreen';
import TeamMembersScreen from '../screens/TeamMembers/TeamMembers';
import PublicProfileScreen from '../screens/PublicProfileScreen';
import AddTeamMember from '../screens/AddTeamMember';
import TestScreen from '../screens/TestScreen';
import ReviewSurveyScreen from '../screens/ReviewSurveyScreen';
import AssignSurveyToTeamScreen from '../screens/AssignSurveyToTeamScreen/AssignSurveyToTeamScreen';
import SurveyHomeScreen from '../screens/SurveyHomeScreen';
import ViewAssignedSurveysScreen from '../screens/ViewAssignedSurveysScreen/ViewAssignedSurveysScreen';
import ViewAssignedSurveyDetailsScreen from '../screens/ViewAssignedSurveyDetails/ViewAssignedSurveyDetailsScreen';
import AnswerSurveyScreen from '../screens/AnswerSurveyScreen';
import FirstScreen from '../screens/FirstScreen/FirstScreen';
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
                <Stack.Screen name="AdminTools" component={AdminToolsScreen} />
                <Stack.Screen name="UpdateUser" component={UpdateUserScreen} />
                <Stack.Screen name="CreateTeam" component={CreateTeamScreen} />
                <Stack.Screen name="Dashboard" component={Dashboard} options={{title: "Yes"}} /> 
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="AssignTeamMember" component={AssignTeamMemberScreen} />
                <Stack.Screen name="AddMemberScreen" component={AddMemberScreen} /> 
                <Stack.Screen name="NewChannel" component={NewChannel} />
                <Stack.Screen name="UserSearch" component={UserSearchScreen} />
                <Stack.Screen name="Team" component={TeamScreen} />
                <Stack.Screen name="User" component={UserScreen} />
                <Stack.Screen name="TeamMembers" component={TeamMembersScreen} />
                <Stack.Screen name="PublicProfile" component={PublicProfileScreen} />
                <Stack.Screen name="AddTeamMember" component={AddTeamMember} />
                <Stack.Screen name="TestScreen" component={TestScreen} />
                <Stack.Screen name="ReviewSurvey" component={ReviewSurveyScreen} />
                <Stack.Screen name="AssignSurveyToTeam" component={AssignSurveyToTeamScreen} />
                <Stack.Screen name="SurveyHome" component={SurveyHomeScreen} />
                <Stack.Screen name="ViewAssignedSurveys" component={ViewAssignedSurveysScreen} />
                <Stack.Screen name="ViewAssignedSurveyDetails" component={ViewAssignedSurveyDetailsScreen} />
                <Stack.Screen name="AnswerSurvey" component={AnswerSurveyScreen} />
                <Stack.Screen name="FirstScreen" component={FirstScreen} />
             </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

//export the Navigation function
export default Navigation;