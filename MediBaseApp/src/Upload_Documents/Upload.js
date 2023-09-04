// UploadScreen.js

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const UploadScreen = ({ onUpload }) => {
  const [uploadedData, setUploadedData] = useState(null);

  const handleDocumentPick = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      // Set the uploaded data in state
      setUploadedData(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = () => {
    // Send the uploaded data to a parent component or a server
    onUpload(uploadedData);
  };

  return (
    <View>
      <Text>Upload Page</Text>
      <Button title="Pick Document" onPress={handleDocumentPick} />
      {uploadedData && (
        <>
          <Text>Uploaded Data:</Text>
          <Text>{uploadedData.name}</Text>
          {/* Display other information if needed */}
          <Button title="Upload" onPress={handleUpload} />
        </>
      )}
    </View>
  );
};

export default UploadScreen;
