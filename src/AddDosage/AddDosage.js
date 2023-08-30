import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import uuidV4 from 'uuid/v4'
import { colors } from '../theme'

class AddDosage extends React.Component {
  state = {
    dosages: '',
    frequency: ''
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  submit = () => {
    if (this.state.dosages === '' || this.state.frequency === '') alert('Please Enter Prescription Frequency')
    const dosages = {
      dosages: this.state.dosages,
      frequency: this.state.frequency,
      id: uuidV4(),
      locations: []
    }
    this.props.route.params.add_dosage(dosages)
    this.setState({
      dosages: '',
      frequency: ''
    }, () => {
      this.props.navigation.navigate('Dosages')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Dosage</Text>
        <TextInput
          placeholder='Dosages'
          onChangeText={val => this.onChangeText('dosages', val)}
          style={styles.input}
          value={this.state.dosages}
        />
        <TextInput
          placeholder='Frequency'
          onChangeText={val => this.onChangeText('frequency', val)}
          style={styles.input}
          value={this.state.frequency}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Dosages</Text>
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

export default AddDosage