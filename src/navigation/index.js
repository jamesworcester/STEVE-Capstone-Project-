/*
Programmer: James Worcester
Edited by: James Worcester on 31/07/2022
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
import ChatRoomScreen from '../screens/ChatChannel/ChatRoomScreen';
import NewMessage from '../screens/NewMessage';
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
            <Stack.Navigator >
             <Stack.Group screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
             </Stack.Group>   
             <Stack.Group screenOptions={{headerShown: false}}>
             
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen
                    name="Chatroom"
                    component={ChatRoomScreen}
                    />
                <Stack.Screen name="NewMessage" component={NewMessage} />    
             </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

//export the Navigation function
export default Navigation;