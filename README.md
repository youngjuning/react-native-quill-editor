# react-native-quill-wrapper

React Native Quill Rich Text Editor Wrapper

## Install

```sh
$ yarn add @bitchon/react-native-quill-wrapper
```

## Usage

```jsx
import Quill from '@bitchon/react-native-quill-wrapper'

const App = () => {
  const onChange = (html: string) => {
    console.log(html)
  }
  return <Quill style={{ height: 300 }} placeholder="请赋诗一首..." onChange={onChange} />
}
```
