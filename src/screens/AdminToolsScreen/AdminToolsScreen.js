/*
Programmer: James Worcester
Created by: James Worcester on 06/09/2022 (Sprint 9)
Refactored by: James Worcester on 13/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: AdminToolsScreen
*/

/*
Purpose: 
1. Screen to display admin tools for administrators
*/

import React from 'react';
import { View, Text , StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import PersonalisedButton from '../../components/PersonalisedButton';

const AdminToolsScreen = () => {

    const navigation = useNavigation();
    const {height} = useWindowDimensions();
    const {control, handleSubmit, formState: {errors}} = useForm(); //useForm from react-hook-form

    const onCreateTeamPressed =  () => {
        navigation.navigate('CreateTeam');
    }

    const onViewTeamsPressed =  () => {
        navigation.navigate('Team'); 
    }

    // const onGraphVisualizationPressed =  () => { 
    //     navigation.navigate('VisualizationScreen');
    // }



    return (
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: height, padding: 20}}>

                <Text style={styles.title}>
                    Administration
                </Text>

                <PersonalisedButton
                text={"Create Team"}
                onPress={handleSubmit(onCreateTeamPressed)}
                />

                <PersonalisedButton
                text="View Teams"
                onPress={onViewTeamsPressed}
                type="SECOND"
                />

                {/* <PersonalisedButton
                text="Data Visualization"
                onPress={onGraphVisualizationPressed}
                type="SECOND"
                /> */}
            </View>
        </ScrollView>
    );
};

//create a constant called styles that creates a CSS StyleSheet with CSS styling
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        marginBottom: 10
    },
})

export default AdminToolsScreen