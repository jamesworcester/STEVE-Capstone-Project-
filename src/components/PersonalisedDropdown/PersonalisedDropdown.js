/*
Programmer: James Worcester
Created by James Worcester on 19/09/2022 (Sprint 10)
Edited by: James Worcester on 23/09/2022 (Sprint 10)
*/

/*
Name: PersonalisedDropdown
*/

/*
Purpose: 
1. Component to create personalised dropdown with customisable styling and functionality
*/

import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Controller} from 'react-hook-form';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

  const data = [
    { label: 'Scale (1 - 10)', value: '1' },
    { label: 'Short answer', value: '2' },
    { label: 'Multiple choice', value: '3' },
  ];

const PersonalisedDropdown = (control, name, placeholder) => {

    const [selectedType, setSelectedType] = useState(null);

    return (
      <Controller
          name={name}
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
      />
    );
};

const styles = StyleSheet.create({
      dropdown: {
        margin: 16,
        height: 50,
        width: 200,
        borderBottomColor: 'gray',
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