import React from 'react';
import {Button, View, ScrollView, Image, Text} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to List"
        onPress={() => navigation.navigate('List', {name: 'Jane'})}
      />

      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Text style={{fontSize: 100}}>React Native</Text>
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
        </View>
      </ScrollView>

      <Button
        title="Go to Shopping"
        onPress={() => navigation.navigate('Shopping')}
      />
    </View>
  );
};

export default HomeScreen;
