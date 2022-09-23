/*
Programmer: James Worcester
Created by: James Worcester on 21/09/2022 (Sprint 10)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: SurveyHomeScreen
*/

/*
Purpose: 
1. Screen to display survey tools for administrators
*/

import React from 'react';
import { View, Text , StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PersonalisedButton from '../../components/PersonalisedButton';

const SurveyHomeScreen = () => {
    const navigation = useNavigation();
    const {height} = useWindowDimensions(); 

    const onCreateSurveyPressed =  () => {
        navigation.navigate('CreateSurvey');
    }

    const onViewAssignedSurveysPressed =  () => {
        navigation.navigate('ViewAssignedSurveys');
    }

    return (
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: height, padding: 20}}>
                <Text style={styles.title}>
                    Surveys
                </Text>

                <PersonalisedButton
                text={"Create Survey"}
                onPress={onCreateSurveyPressed}
                />

                <PersonalisedButton
                text={"View Assigned Surveys"}
                onPress={onViewAssignedSurveysPressed}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        marginBottom: 10
    },
})

export default SurveyHomeScreen