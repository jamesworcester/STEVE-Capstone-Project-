/*
Programmer: Hung
*/
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    FirstContainer : {
        flexDirection : 'row',
        
        display : "flex",
        justifyContent : "space-between",
        alignItems : 'flex-end',
    },
    ForNameText : {
        left : '3%',
        top : 50,
        alignItems: 'center',
        fontSize : 20,
        position : 'absolute',
    },
    NewNameInput : {
        fontSize : 18,
        flex : 1,
        marginHorizontal : 20,
    },
    icon : {
        left : 22,
        marginTop : 50,
        marginRight : 30,
    },
    ForDescText : {
        fontSize : 20,
        left : '3%',
        
    },
    DescriptionInput : {
        fontSize : 18,
        left : '3%',
        marginVertical : 15,
    },
    ForSettingText : {
        fontSize : 18,
        left : '3%',
    },
    ForMakePrivateText  : {
        fontSize : 18,
        left : '3%',
        marginVertical : 15,
    },
    SecondContainer : {
        flexDirection : 'row',
    },
    ForExplainText : {
        marginHorizontal : 6,
    },

    CreateButton : {
        marginVertical : 70,
       
    }
})

export default style;