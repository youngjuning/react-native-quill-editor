import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native'
import Quill from '@bitchon/react-native-quill-wrapper'

const App = () => {
  const [value, setValue] = useState('')
  const onChange = (html: string) => {
    setValue(html)
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Quill style={{ height: 300 }} value={value} onChange={onChange} placeholder="请赋诗一首..." />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({})

export default App
