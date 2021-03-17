import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import styles from './styles';

const Counting = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text>
        {name} clicked {count} times
      </Text>
      <Button onPress={() => setCount(count + 1)} title="Click me!" />

      <TextInput
        style={{height: 40}}
        placeholder="what is your name"
        onChangeText={name => setName(name)}
        defaultValue={name}
      />
    </View>
  );
};

export default Counting;
