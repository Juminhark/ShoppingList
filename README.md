## Expo CLI Quickstart

```sh
npm install -g expo-cli

expo init ShoppingList

? Choose a template: expo-template-blank

- cd ShoppingList
- yarn start

- yarn android
- yarn ios # requires an iOS device or macOS for access to an iOS simulator
- yarn web
```

## React Native CLI Quickstart

### Shep 1 : [Chochlately](https://chocolatey.org/)

```sh
// 관리자 권한으로 powershell 실행
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

// 설치 확인
choco -v

// Node, Python2, JDK
choco install -y nodejs.install python2 jdk8
```

### Step 2 : [Android development environment](https://developer.android.com/studio)

# react native

- react is a js library/framework for creating UIs

- react is agnostic(불가지론: 의식에 주어지는 감각적 경험만이 인식되고, 그 배후에 있는 사물의 본질이나 실재 그 자체는 인식할 수 없다는 설).
- react-dom is used to render in the browser(web app)

- react native is a library that can complie react components into native component/widgets

- react native allows us to use react to create native iOS & android applications

## **single codebase**

- usually, an iOS app and android app are completely separate apps(swift vs java/kotlin)with react native

- we can create one single codebase and build for both platforms this saves a TON of time and money

## requirements

windows - android : android studio / sdk / emulator(avd)

## components

- react native includes built in components and APIs
- basic components: view, text, image, textinput, scrollview,stylesheet
- ui: button, picker,slider,switch
- list views: flatlist, sectionlist
- android: backhandler, datepickerandroid

### android studio

- configure > sdk manager > android 10.0(q)
- configure > avd manager > create virtual device > pixel 2(android 10.0)

### path 설정

- 내 pc > 속성 > 고급 시스템 설정 > 환경변수
- 변수 이름 : ANDROID_HOME
- 변수 값 : C:\Users\rlfrl\AppData\Local\Android\Sdk

### initialize

```sh
npm i -g react-native-cli
react-native init ShoppingList

cd ShoppingList
code . (vsc 열기)
npm i react-native-vector-icons
react-native link react-native-vector-icons
npm i uuidv4
```

- [android studio](https://developer.android.com/studio?hl=ko)
- [react-native](https://facebook.github.io/react-native/docs/view)
- [uuidv4](https://www.npmjs.com/package/uuidv4)
- [flatlist api](https://facebook.github.io/react-native/docs/flatlist)

### start

```sh
npx react-native start

npx react-native run-android
```
