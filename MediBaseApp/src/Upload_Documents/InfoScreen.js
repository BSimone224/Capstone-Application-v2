// DisplayInfoScreen.js

import React from 'react';
import { View, Text } from 'react-native';

const DisplayInfoScreen = ({ uploadedData }) => {
  return (
    <View>
      <Text>Display Uploaded Information:</Text>
      {uploadedData && (
        <Text>{uploadedData.name}</Text>
      )}
    </View>
  );
};

export default DisplayInfoScreen;
