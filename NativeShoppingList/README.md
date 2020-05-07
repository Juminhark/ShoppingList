## Init

```sh
npm i react-native-vector-icons

npx react-native link react-native-vector-icons

npx react-native start

// another terminal
npx recat-native run-android
```

## StyleSheet

```ts
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
});
```

## Prop

```ts
// App.js
<Header title="ShoppingList" />;

// Header.js
const Header = ({title}) => {
  return <Text style={styles.text}>{title}</Text>;
};
```

```ts
// App.js
<Header />;

// Header.js
const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'ShoppingList',
};
```

### uuid

```sh
npm install react-native-uuid buffer --save
```

```ts
import uuid from 'react-native-uuid';

const testUUID = uuid.v4();
```
