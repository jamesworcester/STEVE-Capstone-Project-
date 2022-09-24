/*
Programmer: James Worcester
Edited by: James Worcester on 04/09/2022
Refactored by James Worcester on 14/09/2022 (Sprint 9)
*/
//Screen to create a Survey
//react-native imports
import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, Image, useWindowDimensions} from 'react-native';
//@react-native/native import
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
//react-hook-form import for easy form validation https://react-hook-form.com/
import {useForm, Controller} from 'react-hook-form';
//AWS Amplify import
import { Auth } from 'aws-amplify';
//user defined component imports
import PersonalisedInput from '../PersonalisedInput';
import PersonalisedButton from '../PersonalisedButton';
import { Picker } from '@react-native-picker/picker';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

  const data = [
    { label: 'Scale (1 - 10)', value: '1' },
    { label: 'Short answer', value: '2' },
    { label: 'Multiple choice', value: '3' },
  ];

const PersonalisedDropdown = (control, name, rules = {}, placeholder, defaultValue, value, secureTextEntry) => {

    const [selectedType, setSelectedType] = useState(null);

    return (
      <Controller
          control={control}
          render={({ selectedType }) => (
              <View>
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={data}
                  //search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={placeholder}
                  //searchPlaceholder="Search..."
                  value={selectedType}
                  onChange={item => {
                  setSelectedType(item.value);
                  }}
                  renderLeftIcon={() => (
                  <AntDesign style={styles.icon} color="black" name="setting" size={20} />
                  )}
                />   
              </View>
            )}
          name={name}
          //defaultValue={defaultValues.language}
      />
    );
};

//create a constant called styles that creates a CSS StyleSheet with CSS styling
const styles = StyleSheet.create({
      dropdown: {
        margin: 16,
        height: 50,
        width: 200,
        borderBottomColor: 'gray',
        //borderBottomWidth: 0.5,
      },
      icon: {
        marginRight: 5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },

})

export default PersonalisedDropdown