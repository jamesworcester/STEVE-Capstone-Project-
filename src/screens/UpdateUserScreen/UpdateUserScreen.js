/*
Programmer: James Worcester
Edited by: James Worcester on 31/07/2022
*/
//SignUpScreen users are navigated to after clicking on a 'SignUp' button that allows users to create a AWS iAM account in the project's user pool
//react-native imports
import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions} from 'react-native';
//@react-native/native import
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
//react-hook-form import for easy form validation https://react-hook-form.com/
import {useForm} from 'react-hook-form';
//AWS Amplify import
import { Auth } from 'aws-amplify';
//user defined component imports
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
//user defined logo import
import Logo from '../../../assets/images/planit_nri_v_navy.png';
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //regex (regular expression) constant to check if the email is in the correct format. WILL NEED TO BE CHANGED/UPDATED

//define a constant lambda function called SignUpScreen that creates three CustomInputs and two CustomButtons and allows the user to sign up for an account or navigate to sign into an account
const UpdateUserScreen = () => {
    const navigation = useNavigation(); //use navigation from @react-navigation/native
    const route = useRoute(); //route passed parameters from the previous screen (SignUp)
    const {control, handleSubmit, watch} = useForm(); //use form from react-hook-form
    const {height} = useWindowDimensions(); //sets the height of the window
    current_info = route.params.current_info
    //console.log(current_info)


    
    const onUpdatePressed = async (data) => {
            let user = await Auth.currentAuthenticatedUser();
            const { username } = user;
            console.log(username)
            const {email, phone, first_name, last_name, gender } = data;
            async function updateUser() {
            try 
            {
                const userDetails = {
                    id: username, email: email, phone: phone, first_name: first_name, last_name: last_name, gender: gender
                }

                await API.graphql(graphqlOperation(mutations.updateUserScreen, {input: userDetails}));
                navigation.navigate('AdminDash');
            }
            catch(e)
            {
                //Alert.alert('Oops', e.message);
                console.log(e)
                Alert.alert('Oops', e.message);
            }
        }
        updateUser()
    }

    const onBackPressed = () => { //if the 'Have an account? Sign in' button is clicked
        navigation.goBack(); //navigate back to the previous screen
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Update User
                </Text>

                <Text style={styles.text}>Email:</Text>
                <CustomInput //Custom TextInput
                name="email"
                control={control}
                value={current_info.data.getUser.email}
                defaultValue={current_info.data.getUser.email}

                rules={{
                    required: 'Email is required', //sets the TextInput as required
                    pattern: //The entered text must match the EMAIL_REGEX regex (regular expression) defined above or else it is invalid
                    {
                        value: EMAIL_REGEX,
                        message: 'Email is invalid'
                    }
                }}
                />

                <Text style={styles.text}>Phone Number:</Text>
                <CustomInput //Custom TextInput
                name="phone"
                control={control}
                defaultValue={current_info.data.getUser.phone}
                value={current_info.data.getUser.phone}
                rules={{
                    required: 'Phone Number is required', //sets the TextInput as required
                }}
                />

                <Text style={styles.text}>First Name:</Text>
                <CustomInput //Custom TextInput
                name="first_name"
                control={control}
                defaultValue={current_info.data.getUser.first_name}
                value={current_info.data.getUser.first_name}
                rules={{
                    required: 'First Name is required', //sets the TextInput as required
                }}
                />

                <Text style={styles.text}>Last Name:</Text>
                <CustomInput //Custom TextInput
                name="last_name"
                control={control}
                defaultValue={current_info.data.getUser.last_name}
                value={current_info.data.getUser.last_name}
                rules={{
                    required: 'Last Name is required', //sets the TextInput as required
                }}
                />

                <Text style={styles.text}>Gender:</Text>
                <CustomInput //Custom TextInput
                name="gender"
                control={control}
                defaultValue={current_info.data.getUser.gender}
                value={current_info.data.getUser.gender}
                rules={{
                    required: 'Gender is required', //sets the TextInput as required
                }}
                />

                <CustomButton //Register Button
                    text="Update"
                    onPress={handleSubmit(onUpdatePressed)}
                />

                <CustomButton //Sign in Button
                    text="Go Back"
                    onPress={onBackPressed}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
};

//create a constant called styles that creates a CSS StyleSheet with CSS styling
const styles = StyleSheet.create({
    root: {
        //alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        marginTop: 50,
        alignSelf: 'center',
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },

})

//export the SignUpScreen lambda function
export default UpdateUserScreen