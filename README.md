# react-native-quill-wrapper

React Native Quill Rich Text Editor Wrapper

## Install

```sh
$ yarn add react-native-quill-wrapper
```

Make sure you installed [react-native-webview](https://github.com/react-native-community/react-native-webview)

## Usage

```jsx
import Quill from 'react-native-quill-wrapper'

const App = () => {
  const onChange = (html: string) => {
    console.log(html)
  }
  return <Quill style={{ height: 300 }} placeholder="请赋诗一首..." onChange={onChange} />
}
```
