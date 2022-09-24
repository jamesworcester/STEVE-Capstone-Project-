/*
Programmer: Hung
*/
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        marginTop : 5,
        alignItems: 'flex-end',

    },
    mainContainer : {
        flexDirection : "row",
        backgroundColor : 'white',
        padding : 10,
        borderRadius : 25,
        flex:1,
        marginRight : 10,
        alignItems : 'flex-end',
    },
    buttonContainer : {
        backgroundColor : '#0096FF',
        width : 50,
        height: 50,
        borderRadius:50,
        alignItems: 'center',
        justifyContent:'center',

    },
    textInput : {
        flex : 1,
        marginHorizontal : 10,
    },
    icon : {
        marginHorizontal : 5,
    }
})

export default styles;