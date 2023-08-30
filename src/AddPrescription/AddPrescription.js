import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import uuidV4 from 'uuid/v4'
import { colors } from '../theme'

class AddPrescription extends React.Component {
  state = {
    name: '',
    physician: ''
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  submit = () => {
    if (this.state.name === '' || this.state.physician === '') alert('Please Enter Prescription Information')
    const prescription = {
      name: this.state.name,
      frequency: this.state.frequency,
      id: uuidV4(),
      locations: []
    }
    this.props.route.params.AddPrescription(prescription)
    this.setState({
      name: '',
      physician: ''
    }, () => {
      this.props.navigation.navigate('Prescription')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Prescriptions</Text>
        <TextInput
          placeholder='Prescription Name'
          onChangeText={val => this.onChangeText('name', val)}
          style={styles.input}
          value={this.state.name}
        />
        <TextInput
          placeholder='Physician Name'
          onChangeText={val => this.onChangeText('physician', val)}
          style={styles.input}
          value={this.state.frequency}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Prescriptions</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50
  }
})

export default AddPrescription