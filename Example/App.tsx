import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, StatusBar, Button } from 'react-native'
import Quill from '@bitchon/react-native-quill-wrapper'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Quill style={{ height: 300 }} />
          <Button
            onPress={() => {
              console.log('[App]', '哈哈哈')
            }}
            color="#841584"
            title="Learn More"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({})

export default App
