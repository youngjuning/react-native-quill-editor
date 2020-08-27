import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, StatusBar, View } from 'react-native'
import QuillEditor from 'react-native-quill-editor'

const App = () => {
  const onChange = (html: string) => {
    console.log(html)
  }
  return (
    <View style={styles.body}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <QuillEditor
            style={{ height: 300 }}
            defaultValue="哈哈哈"
            onChange={onChange}
            options={{
              placeholder: '请赋诗一首...',
            }}
          />
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
