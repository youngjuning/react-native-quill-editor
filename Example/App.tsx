import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>哈哈哈哈</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({})

export default App
