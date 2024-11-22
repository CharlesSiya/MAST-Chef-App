import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const FilterScreen = () => {
  const [menuItems, setMenuItems] = useState([
    { name: 'Salad', description: 'Fresh garden salad', course: 'Starter', price: 50 },
    { name: 'Steak', description: 'Grilled steak with veggies', course: 'Main', price: 150 },
    { name: 'Soup', description: 'Warm tomato basil soup', course: 'Starter', price: 40 },
    { name: 'Pasta', description: 'Pasta with creamy Alfredo sauce', course: 'Main', price: 120 },
    { name: 'Cheesecake', description: 'Classic New York cheesecake', course: 'Dessert', price: 70 },
    { name: 'Burger', description: 'Juicy beef burger with cheese', course: 'Main', price: 130 },
    { name: 'Ice Cream', description: 'Vanilla ice cream with chocolate sauce', course: 'Dessert', price: 40 }
  ]);

  const [filteredItems, setFilteredItems] = useState(menuItems);

  const filterByCourse = (course) => {
    setFilteredItems(menuItems.filter(item => item.course === course));
  };

  return (
    <View>
      <Text>Filter Menu by Course</Text>
      <Button title="Show All" onPress={() => setFilteredItems(menuItems)} />
      <Button title="Starters" onPress={() => filterByCourse('Starter')} />
      <Button title="Mains" onPress={() => filterByCourse('Main')} />
      <Button title="Desserts" onPress={() => filterByCourse('Dessert')} />

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} - {item.description} (${item.price})</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FilterScreen;
