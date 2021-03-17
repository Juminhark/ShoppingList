import React from 'react';
import {Button, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to List"
        onPress={() => navigation.navigate('List', {name: 'Jane'})}
      />
    </View>
  );
};

export default HomeScreen;

// const logo = {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   width: 64,
//   height: 64,
// };

//   <ScrollView>
//     <View style={{alignItems: 'center'}}>
//       <StatusBar barStyle="dark-content" />

//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Text style={{fontSize: 100}}>React Native</Text>

//       {/* <ListView /> */}
//       <Counting />

//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//       <Image source={logo} />
//     </View>
//   </ScrollView>
