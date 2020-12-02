# react-native-quill-editor

> 诞生记：https://juejin.cn/post/6867945949788897288

React Native Quill Rich Text Editor Wrapper

## Screenshots

<img src="https://i.loli.net/2020/08/27/LvuyxVr3R2mlk9p.png" width="300px" />

## Install

```sh
$ yarn add react-native-quill-editor
```

Make sure you installed [react-native-webview](https://github.com/react-native-community/react-native-webview)

## Usage

```jsx
import QuillEditor from 'react-native-quill-editor'

const App = () => {
  const onChange = (html: string) => {
    console.log(html)
  }
  return <QuillEditor
    style={{ height: 300 }}
    options={{
      placeholder: '请赋诗一首...',
    }}
    onChange={onChange} />
}
```

## Props

| Name         | Type                     | Default                                                                                                                                  | Description                            |
| ------------ | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| defaultValue | string                   | `""`                                                                                                                                     | Default Vaule（any valid html string） |
| options      | object                   | `{placeholder: '请输入...',modules: {toolbar: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block']]}}` | quill [options](http://t.cn/A64z1U2z)  |
| style        | ViewStyle                | `{}`                                                                                                                                     | container style                        |
| onChange     | `(html: string) => void` | `onChange: () => {}`                                                                                                                     | onChange Event                         |
