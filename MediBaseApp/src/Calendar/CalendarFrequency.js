import React from 'react';
import { View } from 'react-native';
import { Picker } from 'react-native-picker';

const FrequencyPicker = ({ selectedFrequency, onFrequencyChange }) => {
  return (
    <View>
      <Picker
        selectedValue={selectedFrequency}
        onValueChange={(itemValue) => onFrequencyChange(itemValue)}>
        <Picker.Item label="Daily" value="daily" />
        <Picker.Item label="Weekly" value="weekly" />
        <Picker.Item label="Monthly" value="monthly" />
      </Picker>
    </View>
  );
};

export default FrequencyPicker;
