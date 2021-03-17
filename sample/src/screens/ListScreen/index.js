import React from 'react';
import {View, FlatList} from 'react-native';

import Greeting from '../../components/Greeting';

const nameData = [
  {key: 'Devin'},
  {key: 'Dan'},
  {key: 'Dominic'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
];

const ListScreen = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        data={nameData}
        renderItem={({item}) => <Greeting name={item.key} />}
      />
    </View>
  );
};

export default ListScreen;
