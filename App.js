/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Navigation from './src/navigation';
import Amplify, {Auth} from 'aws-amplify';
import config from './src/aws-exports';
// import {withAuthenticator, AmplifyTheme} from 'aws-amplify-react-native';

Amplify.configure(config);

const App = () => {
  // Auth.signOut();
  return (
    <SafeAreaView style={styles.root}>
        <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
});

// const signUpConfig = {
//   header: "My Customized Sign Up",
//   hideAllDefaults: true,
//   signUpFields: [
//     {
//       label: "Full name",
//       key: "name",
//       required: true,
//       displayOrder: 1,
//       type: "string",
//     },
//     {
//       label: "Email",
//       key: "email",
//       required: true,
//       displayOrder: 2,
//       type: "string",
//     },
//     {
//       label: "Username",
//       key: "preferred_username",
//       required: true,
//       displayOrder: 3,
//       type: "string",
//     },
//     {
//       label: "Password",
//       key: "password",
//       required: true,
//       displayOrder: 4,
//       type: "password",
//     },
//   ],
// };

// const customTheme = {
//   ...AmplifyTheme,
//   button: {
//     ...AmplifyTheme.button,
//     backgroundColor: 'blue',
//     borderRadius: 5,
//   }
// }

//export default withAuthenticator(App, { signUpConfig, theme: customTheme });
export default App;

