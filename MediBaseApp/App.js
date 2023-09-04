import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Cities from './src/Cities/Cities'
import AddCity from './src/AddCity/AddCity'
import Countries from './src/Countries/Countries'
import AddCountry from './src/AddCountry/AddCountry'
import CalendarWithTextInput from './src/Calendar/CalendarInput';
import StackNavigator from './src/homescreen';

const Tab = createBottomTabNavigator();

const [uploadedData, setUploadedData] = useState(null);

  const handleUpload = (data) => {
    // Handle the uploaded data, e.g., send it to a server
    setUploadedData(data);
  };

export default class App extends Component {
  state = {
    cities: [],
    countries: []
  }

  addCity = (city) => {
    const cities = this.state.cities
    cities.push(city)
    this.setState({ cities })
  }

  addcountries = (country) => {
    const countries = this.state.countries
    countries.push(country)
    this.setState({ countries })
  }

  render() {
    return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen
          name="Home"  
          component={StackNavigator}
          options={{
            tabBarLabel: () => (
              <Text style={{ fontSize: 9.5, textAlign: 'center' }}>
                Home
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Prescriptions"  
          initialParams={{cities: this.state.cities, addCity: this.addCity}} 
          component={Cities}
          options={{
            tabBarLabel: () => (
              <Text style={{ fontSize: 9.5, textAlign: 'center' }}>
                Prescriptions
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Add Prescription" 
          initialParams={{cities: this.state.cities, addCity: this.addCity}} 
          component={AddCity}
          options={{
            tabBarLabel: () => (
              <Text style={{ fontSize: 8.5, textAlign: 'center' }}>
                Add Prescription
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Dosages" 
          initialParams={{countries: this.state.countries, addcountries: this.addcountries}} 
          component={Countries}
          options={{
            tabBarLabel: () => (
              <Text style={{ fontSize: 10, textAlign: 'center' }}>
                Dosages
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Add Dosages" 
          initialParams={{countries: this.state.countries, addcountries: this.addcountries}} 
          component={AddCountry}
          options={{
            tabBarLabel: () => (
              <Text style={{ fontSize: 10, textAlign: 'center' }}>
                Add Dosages
              </Text>
            ),
          }}
        />
                <Tab.Screen
          name="Prescription Calendar"
          component={CalendarWithTextInput}
          options={{
            tabBarLabel: () => (
              <Text style={{ fontSize: 10, textAlign: 'center' }}>
                Prescription Calendar
              </Text>
            ),
          }}
        />
                        <Tab.Screen
          name="Upload"
          component={() => <UploadScreen onUpload={handleUpload}/>} 
          options={{
            tabBarLabel: () => (
              <Text style={{ fontSize: 10, textAlign: 'center' }}>
               Upload
              </Text>
            ),
          }}
        />
                <Tab.Screen
                name="DisplayInfo"
                component={() => <DisplayInfoScreen uploadedData={uploadedData} />}
          options={{
            tabBarLabel: () => (
              <Text style={{ fontSize: 10, textAlign: 'center' }}>
                Display Upload
              </Text>
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>      
    );
  }
}

