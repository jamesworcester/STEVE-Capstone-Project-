import * as React from 'react';
import { List, Divider, Button} from 'react-native-paper';


import ChatListItem from './Index';
import ChatRooms from '../../../assets/data/ChatRooms';
import { FlatList } from 'react-native-gesture-handler';


const NestedList = () => {
  const [expanded, setExpanded] = React.useState(true);
  
  
  return (
    
    <FlatList 
      data={ChatRooms}
      renderItem = {({item}) => <ChatListItem chatRoom={item}/>}
      keyExtractor = {(item) => item.id}
    />
    
  );
};

export default NestedList;