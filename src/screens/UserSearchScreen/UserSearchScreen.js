/*
Programmer: Ali Alriyami on 19/08/2022
Edited by: Ali Alriyami on 24/08/2022
*/

import React, {useState, useEffect} from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Text, TextInput
} from 'react-native';

const UserSearchScreen = () => {
const [filteredData, setFilterData] = useState([]);
const [masterData, setMasterData] = useState([]);
const [search, setSearch] = useState('');

useEffect(() => {
fetchUsers();
return () => {

}
},[])

const fetchUsers = () => {
const apiURL = 'https://jsonplaceholder.typicode.com/posts';
fetch(apiURL)
.then((response) => response.json())
.then((responseJson) => {
setFilterData(responseJson);
setMasterData(responseJson);
}).catch((error) => {
console.error(error);
})
}

const searchFilter = (text) => {
if (text) {
const newData = masterData.filter((item) => {
const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();

const textData = text.toUpperCase();
return itemData.indexOf(textData) > -1;
});
setFilterData(newData);
setSearch(text);
} else {
setFilterData(masterData);
setSearch(text);
}
}

const ItemView = ({item}) => {
return (
<Text style={styles.itemStyle}>
{item.id}{'. '}{item.title.toUpperCase()}
</Text>
)
}

const ItemSeparatorView = () => {
return (
<View
style={{height: 0.5, width: '100%', backgroundColor:'#c8c8c8'}}
/>
)
}

return (
<SafeAreaView style ={{ flex: 1}}>
<View style={styles.container}>
<TextInput
style={styles.textInputStyle}
value={search}
placeholder="Search for users by name"
underlineColorAndroid="transparent"
onChangeText={(text) => searchFilter(text)}
/>
<FlatList
data={filteredData}
keyExtractor={(item, index) => index.toString()}
ItemSeparatorComponent={ItemSeparatorView}
renderItem={ItemView}
/>
</View>
</SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
backgroundColor: 'white',
},
itemStyle: {
padding: 15
},

textInputStyle: {
height: 50,
borderWidth: 1,
paddingLeft: 20,
margin: 5,
borderColor: '#009688',
backgroundColor: 'white'
}
});

export default UserSearchScreen;