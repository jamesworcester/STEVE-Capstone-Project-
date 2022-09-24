/*
Programmer: Hung
*/
import { container } from "aws-amplify";
import { StyleSheet } from "react-native";

const style = StyleSheet.create ({
    AddMemberInput : {
        fontSize : 20,
        left : '3%',
        marginVertical : 15,
    },
    container :{
        flexDirection : 'row',
        left : '5%',
        fontSize : 20,
    },
    forText : {
        flexDirection: 'column',
        fontSize : 30,
        marginLeft : 20
    },
    AddButton : {
        marginVertical : 30,
    }
})

export default style;