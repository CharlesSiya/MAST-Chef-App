import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const AddRemoveScreen = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '', course: '', price: '' });

  const addItem = () => {
    setMenuItems([...menuItems, { ...newItem, price: parseFloat(newItem.price) }]);
    setNewItem({ name: '', description: '', course: '', price: '' });
  };

  const removeItem = (name) => {
    setMenuItems(menuItems.filter(item => item.name !== name));
  };

  return (
    <View>
      <Text>Add New Menu Item</Text>
      <TextInput placeholder="Name" value={newItem.name} onChangeText={(text) => setNewItem({ ...newItem, name: text })} />
      <TextInput placeholder="Description" value={newItem.description} onChangeText={(text) => setNewItem({ ...newItem, description: text })} />
      <TextInput placeholder="Course" value={newItem.course} onChangeText={(text) => setNewItem({ ...newItem, course: text })} />
      <TextInput placeholder="Price" value={newItem.price} onChangeText={(text) => setNewItem({ ...newItem, price: text })} keyboardType="numeric" />
      <Button title="Add Item" onPress={addItem} />

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} - {item.description} (${item.price})</Text>
            <Button title="Remove" onPress={() => removeItem(item.name)} />
          </View>
        )}
      />
    </View>
  );
};

export default AddRemoveScreen;
