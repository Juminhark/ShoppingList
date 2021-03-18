import React, {useState} from 'react';
import {View, FlatList, Alert} from 'react-native';
import uuid from 'react-native-uuid';

import styles from './styles';

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import AddItem from '../../components/AddItem';

const ShoppingScreen = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Bread'},
    {id: uuid.v4(), text: 'Juice'},
    {id: uuid.v4(), text: 'Cake'},
    {id: uuid.v4(), text: 'Coffee'},
    {id: uuid.v4(), text: 'Beef'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert(
        'Error',
        'Please enter an item',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } else {
      setItems(prevItems => {
        return [{id: uuid.v4(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ShoppingScreen;
