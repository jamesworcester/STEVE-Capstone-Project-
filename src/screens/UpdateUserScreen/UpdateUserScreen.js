/*
Programmer: James Worcester
Created by: James Worcester on 04/09/2022 (Sprint 8)
Refactored by James Worcester on 14/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: UpdateUserScreen
*/

/*
Purpose: 
1. To update a user's details in the database after they log in for the first time
*/

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, useWindowDimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';
//user defined component imports
import PersonalisedInput from '../../components/PersonalisedInput';
import PersonalisedButton from '../../components/PersonalisedButton';
//user defined API import
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';

const UpdateUserScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    current_user = route.params.current_user

    const { control, handleSubmit } = useForm();
    const {height} = useWindowDimensions(); 

    const onUpdatePressed = async (data) => { 
            let user = await Auth.currentAuthenticatedUser();
            const { username } = user; //get the id (Cognito username) of the current user
            const { phone, first_name, last_name, gender } = data;
            async function updateUser() { 
            try 
            {
                const userDetails = {
                    id: username, phone: phone.replace(/'/g, "''"), first_name: first_name.replace(/'/g, "''"), last_name: last_name.replace(/'/g, "''"), gender: gender.replace(/'/g, "''")
                }
                await API.graphql(graphqlOperation(mutations.updateUserScreen, {input: userDetails})); //update the user's details in the database
                navigation.navigate('Dashboard');
            }
            catch(e)
            {
                Alert.alert('Spinning up the Database', 'Please wait a minute before trying again')
            }
        }
        updateUser()
    }

    const onBackPressed = () => {
        navigation.goBack();
    }

    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={styles.title}>
                    Update User
                </Text>

                <Text style={styles.text}>Phone Number:</Text>
                <PersonalisedInput
                name="phone"
                control={control}
                defaultValue={current_user.data.getUser.phone}
                rules={{
                    required: 'Phone Number is required',
                }}
                />

                <Text style={styles.text}>First Name:</Text>
                <PersonalisedInput
                name="first_name"
                control={control}
                defaultValue={current_user.data.getUser.first_name}
                rules={{
                    required: 'First Name is required',
                }}
                />

                <Text style={styles.text}>Last Name:</Text>
                <PersonalisedInput
                name="last_name"
                control={control}
                defaultValue={current_user.data.getUser.last_name}
                rules={{
                    required: 'Last Name is required',
                }}
                />

                <Text style={styles.text}>Gender:</Text>
                <PersonalisedInput
                name="gender"
                control={control}
                defaultValue={current_user.data.getUser.gender}
                rules={{
                    required: 'Gender is required',
                }}
                />

                <PersonalisedButton
                    text="Update"
                    onPress={handleSubmit(onUpdatePressed)}
                />

                <PersonalisedButton
                    text="Go Back"
                    onPress={onBackPressed}
                    type="THIRD"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
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

export default UpdateUserScreen