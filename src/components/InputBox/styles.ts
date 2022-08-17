import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        marginTop : 25

    },
    mainContainer : {
        flexDirection : "row",
        backgroundColor : 'white',
        padding : 10,
        borderRadius : 25,
        flex:1,
        marginRight : 10,
        alignItems : 'center'
    },
    buttonContainer : {
        backgroundColor : 'purple',
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