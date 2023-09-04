import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarWithTextInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [textInputValue, setTextInputValue] = useState('');

  const handleDateSelect = date => {
    setSelectedDate(date.dateString);
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDateSelect}
        markedDates={{
          [selectedDate]: { selected: true },
        }}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your text here"
        value={textInputValue}
        onChangeText={setTextInputValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    marginTop: 10,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default CalendarWithTextInput;
