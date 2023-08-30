import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'

export default class New_Dosages extends React.Component {
  static navigationOptions = {
    title: 'Dosages',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400'
    }
  }
  navigate = (item) => {
    this.props.navigation.navigate('Dosages', { dosage: item })
  }
  render() {
    const { dosages } = this.props.route.params;
    return (
      <ScrollView  contentContainerStyle={[!dosages.length && { flex: 1 }]}>
        <View style={[!dosages.length && { justifyContent: 'center', flex: 1 }]}>
          {
            !dosages.length && <CenterMessage message='No Saved Dosages' />
          }
          {
            dosages.map((item, index) => (
              <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index} >
                <View style={styles.doseContainer}>
                  <Text style={styles.dosage}>{item.dosages}</Text>
                  <Text style={styles.frequency}>{item.frequency}</Text>
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
  doseContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  dosage: {
    fontSize: 20,
  },
  frequency: {
    color: 'rgba(0, 0, 0, .5)'
  },  
})