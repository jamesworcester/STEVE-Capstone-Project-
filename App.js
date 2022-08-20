/*
Programmer: James Worcester
Edited by: James Worcester on 31/07/2022
*/
//main App.js javascript file, from which every other screen is run
//react-native imports
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native'; //import various react-native components
//user defined imports
import Navigation from './src/navigation'; //import navigation from ./src/navigation that uses @react-navigation/native library for navigation between different screens of the app https://reactnavigation.org/docs/getting-started/
import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify'; //import Amplify & Auth from AWS Amplify library https://docs.amplify.aws/start/getting-started/installation/q/integration/react-native/
import config from './src/aws-exports'; //import auto-generated AWS application settings for Cognito https://aws.amazon.com/cognito/ authentication

Amplify.configure(config); //set up Amplify using aws-exports config

//define a constant lambda function called App that returns the navigation stack from './src/navigation' (called <Navigation />)
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
        <Navigation />
    </SafeAreaView>
  );
};

//create a constant called styles that creates a CSS StyleSheet with CSS styling
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
});

//run the App
export default App;

