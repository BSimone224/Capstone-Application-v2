// Listing 6.7 Cities route (functionality)
// Listing 6.8 Cities route (styling)
import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'

export default class Prescriptions extends React.Component {
  static navigationOptions = {
    title: 'Prescriptions',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400'
    }
  }
  navigate = (item) => {
    this.props.navigation.navigate('Prescription', { prescription: item })
  }
  render() {
    const {  prescription  } = this.props.route.params;
    return (
      <ScrollView  contentContainerStyle={[!prescription.length && { flex: 1 }]}>
        <View style={[!prescription.length && { justifyContent: 'center', flex: 1 }]}>
          {
            !prescription.length && <CenterMessage message='No Saved Prescriptions!' />
          }
          {
            prescription.map((item, index) => (
              <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index} >
                <View style={styles.prescriptionContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.physician}>{item.physician}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  prescriptionContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  name: {
    fontSize: 20,
  },
  physician: {
    color: 'rgba(0, 0, 0, .5)'
  },  
})