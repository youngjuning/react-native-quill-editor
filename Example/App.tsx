import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, StatusBar, View } from 'react-native'
import Quill from 'react-native-quill-wrapper'

const App = () => {
  const [value, setValue] = useState('')
  const onChange = (html: string) => {
    setValue(html)
  }
  return (
    <View style={styles.body}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Quill style={{ height: 300 }} value={value} onChange={onChange} placeholder="请赋诗一首..." />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f1f3f4',
    flex: 1,
  },
})

export default App
