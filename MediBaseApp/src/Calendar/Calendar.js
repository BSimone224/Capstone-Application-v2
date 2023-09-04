import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CalendarWithTextInput from './CalendarInput';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CalendarWithTextInput />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
