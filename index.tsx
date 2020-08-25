import React, { useEffect } from 'react'
import { Dimensions, Platform, ViewStyle } from 'react-native'
import { WebView, WebViewMessageEvent } from 'react-native-webview'

type Props = {
  style?: ViewStyle
  value?: string
  options?: any
  onChange?: (html: string) => void
}

const Quill = (props: Props) => {
  const options = JSON.stringify({
    theme: 'snow',
    placeholder: '请输入...',
    modules: {
      toolbar: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block']],
    },
    ...props.options,
  })
  const injectedJavaScriptBeforeContentLoaded = `window.options=${options}`
  const injectedJavaScript = `document.querySelector('#editor').children[0].innerHTML="${props.value}"`

  const onMessage = (e: WebViewMessageEvent) => {
    const data = JSON.parse(e.nativeEvent.data)
    if (data.type === 'onChange') {
      props.onChange(data.message)
    }
  }
  // useEffect(() => {
  //   console.log('[index]', props.value)
  // }, [props.value])

  return (
    <WebView
      onMessage={onMessage}
      source={Platform.OS === 'ios' ? require('./assets/quill.html') : { uri: 'file:///android_asset/quill.html' }}
      javaScriptEnabled
      injectedJavaScriptBeforeContentLoaded={injectedJavaScriptBeforeContentLoaded}
      injectedJavaScript={injectedJavaScript}
      style={{ height: Dimensions.get('window').height - 42, width: Dimensions.get('window').width, ...props.style }}
    />
  )
}

Quill.defaultProps = {
  style: {},
  value: '',
  onChange: () => {},
  options: {},
}

export default Quill
