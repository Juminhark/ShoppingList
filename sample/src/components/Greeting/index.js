import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const Greeting = props => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={styles.center}>
      <Text>
        Hello {props.name}, i am {isHungry ? 'hungry' : 'full'}
      </Text>

      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'some eat' : 'Thank you!'}
      />
    </View>
  );
};

export default Greeting;
