import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigator from './src/navigation/MainNavigator'

const App = () => {
  return (
    <View style={{ flex: 1, }}>

      <MainNavigator />

    </View>

  )
}

const styles = StyleSheet.create({})

export default App;