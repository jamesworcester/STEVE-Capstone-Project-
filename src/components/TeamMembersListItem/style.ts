/*
Programmer: Hung
*/
import { StyleSheet } from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    padding: 10,
  },
  lefContainer: {
    flexDirection: 'row',
  },
  midContainer: {
    justifyContent: 'space-around'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: 'grey',
  },
  time: {
    fontSize: 14,
    color: 'grey'
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    backgroundColor: 'white',
  },
  containerSu: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  inputQuestion: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 300,
    backgroundColor: 'white',
  }, 


});

export default styles;