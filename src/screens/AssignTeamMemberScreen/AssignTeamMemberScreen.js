/*
Programmer: James Worcester
Created by: James Worcester on 07/09/2022 (Sprint 9)
Refactored by: James Worcester on 13/09/2022 (Sprint 9)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: AssignTeamMemberScreen
*/

/*
Purpose: 
1. Screen to display a Flatlist of all teams in the database that can be clicked on to Navigate to the team's TeamMembers screen
*/

import React from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import PersonalisedButton from '../../components/PersonalisedButton';
import { Header } from "@rneui/themed";
//import ListItem
import TeamListItem from '../../components/TeamListItem/Index';

const AssignTeamMemberScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const teams = route.params.teams.data.listTeams; //retrieve the teams from the route

    const onBackPressed = () => {
        navigation.goBack();
    }

    return (
        <View >
            <Header 
            backgroundColor='#051C60'
            leftComponent={{ color: '#fff' }}
            centerComponent={{text:'TEAMS', style: {color: '#E6E6FA', fontSize : 16}, 
            }}/>

        <FlatList 
            data={teams}
            renderItem = {({item}) => <TeamListItem team={item}/>}
            keyExtractor = {(item) => item.id}
        />
        
        <PersonalisedButton
            text="Go Back"
            onPress={onBackPressed}
            type="THIRD"
                />
        </View>
        
    ) 
};

//create a constant called styles that creates a CSS StyleSheet with CSS styling
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
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

export default AssignTeamMemberScreen