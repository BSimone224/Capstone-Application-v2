import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Prescriptions from './src/Prescription/prescription'
import AddPrescription from './src/AddPrescription/AddPrescription'
import Dosages from './src/Dosage/Dosage'
import AddDosage from './src/AddDosage/AddDosage'

//import Countries from './src/Countries/Countries'
//mport AddCountry from './src/AddCountry/AddCountry'

const Tab = createBottomTabNavigator();

export default class App extends Component {
  state = {
    prescriptions: [],
    dosages: []
  }

  Prescriptions = (name) => {
    const prescription = this.state.prescriptions
    prescription.push(name)
    this.setState({ prescription })
  }

  add_dosage = (dosage) => {
    const dosages = this.state.dosages
    dosages.push(dosage)
    this.setState({ dosages })
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Prescriptions"  initialParams={{prescription: this.state.prescriptions, AddPrescription: this.AddPrescription}} component={Prescriptions} />
          <Tab.Screen name="Add Prescriptions"  initialParams={{prescription: this.state.prescriptions, AddPrescription: this.AddPrescription}} component={AddPrescription} />
          <Tab.Screen name="Dosages" initialParams={{dosages: this.state._dosages, add_dosage: this.add_dosage}} component={Dosages} />
          <Tab.Screen name="Add Dosages" initialParams={{dosages: this.state._dosages, add_dosage: this.add_dosage}} component={AddDosage} />

        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}