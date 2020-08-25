import React, { useEffect } from 'react'
import { Dimensions, Platform, ViewStyle } from 'react-native'
import { WebView, WebViewMessageEvent } from 'react-native-webview'

type Props = {
  style?: ViewStyle
  placeholder?: string
  value?: string
  onChange?: (html: string) => void
}

const Quill = (props: Props) => {
  const onMessage = (e: WebViewMessageEvent) => {
    const data = JSON.parse(e.nativeEvent.data)
    if (data.type === 'onChange') {
      props.onChange(data.message)
    }
  }
  useEffect(() => {
    console.log('[index]', props.value)
  }, [props.value])
  return (
    <WebView
      onMessage={onMessage}
      source={Platform.OS === 'ios' ? require('./assets/quill.html') : { uri: 'file:///android_asset/quill.html' }}
      javaScriptEnabled
      injectedJavaScript={`document.querySelector('#editor').children[0].innerHTML="${props.value}";document.querySelector('.ql-editor').setAttribute("data-placeholder","${props.placeholder}")`}
      style={{ height: Dimensions.get('window').height - 42, width: Dimensions.get('window').width, ...props.style }}
    />
  )
}

Quill.defaultProps = {
  style: {},
  placeholder: '请输入......',
  value: '',
  onChange: () => {},
}

export default Quill
