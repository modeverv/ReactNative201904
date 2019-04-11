# Hello World to React Native

## 起動

```txt
  Run instructions for iOS:
    • cd /Users/seijiro/work/udemy/hello_world_native && react-native run-ios
    - or -
    • Open ios/hello_world_native.xcodeproj in Xcode
    • Hit the Run button

  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd /Users/seijiro/work/udemy/hello_world_native && react-native run-android
```

## リロードについて

```txt
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
```
