# [React Native v0.62](https://reactnative.dev/)

* [Traversy Media - React Native Crash Course 2020](https://www.youtube.com/watch?v=Hf4MJH0jDb4)

## react native

- [react-native vs flutter](https://www.youtube.com/watch?v=siow15Yn8r8)

## requirements

windows - android : android studio / sdk / emulator(avd)

## components

- react native includes built in components and APIs
- basic components: view, text, image, textinput, scrollview,stylesheet
- ui: button, picker,slider,switch
- list views: flatlist, sectionlist
- android: backhandler, datepickerandroid

# Setting up the development environment

- Expo-CLI
- React-Native-CLI

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

- 1. Install Android Studio
- 2. Install the Android SDK : Android 9 (Pie)
- 3. SDK Tools tab > Android SDK Build-Tools 28.0.3
- 4. Configure the ANDROID_HOME environment variable
- 5. Add platform-tools to Path

### android studio

- configure > sdk manager > android 10.0(q)
- configure > avd manager > create virtual device > pixel 2(android 10.0)

### path 설정

- 내 pc > 속성 > 고급 시스템 설정 > 환경변수
- 변수 이름 : ANDROID_HOME
- 변수 값 : C:\Users\rlfrl\AppData\Local\Android\Sdk

* 변수 이름 : Path
* 변수 값 : %ANDROID_HOME%\tools
* 변수 값 : %ANDROID_HOME%\tools\bin
* 변수 값 : %ANDROID_HOME%\platform-tools

### Step 3 : Creating a new application

```sh
npx react-native init NativeShoppingList

cd  NativeShoppingList

npx react-native start

npx react-native run-android
```

## Expo CLI Quickstart

```sh
npm install -g expo-cli

expo init ExpoShoppingList

cd ExpoShoppingList

yarn start

// another terminal
- yarn android
- yarn ios
- yarn web

```

### 
