import React from 'react'
import { Dimensions, Platform, ViewStyle } from 'react-native'
import { WebView, WebViewMessageEvent } from 'react-native-webview'

type Props = {
  style?: ViewStyle
}

const Quill = (props: Props) => {
  const onMessage = (e: WebViewMessageEvent) => {
    console.log('onMessage', e.nativeEvent.data)
  }
  return (
    <WebView
      onMessage={onMessage}
      source={
        Platform.OS === 'ios' ? require('./assets/quill.snow.html') : { uri: 'file:///android_asset/quill.snow.html' }
      }
      style={{ height: Dimensions.get('window').height - 42, width: Dimensions.get('window').width, ...props.style }}
    />
  )
}

Quill.defaultProps = {
  style: {},
}

export default Quill
