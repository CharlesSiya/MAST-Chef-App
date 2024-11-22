import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState([
    { name: 'Salad', description: 'Fresh garden salad', course: 'Starter', price: 50 },
    { name: 'Steak', description: 'Grilled steak with veggies', course: 'Main', price: 150 },
    { name: 'Soup', description: 'Warm tomato basil soup', course: 'Starter', price: 40 },
    { name: 'Pasta', description: 'Pasta with creamy Alfredo sauce', course: 'Main', price: 120 },
    { name: 'Cheesecake', description: 'Classic New York cheesecake', course: 'Dessert', price: 70 },
    { name: 'Burger', description: 'Juicy beef burger with cheese', course: 'Main', price: 130 },
    { name: 'Ice Cream', description: 'Vanilla ice cream with chocolate sauce', course: 'Dessert', price: 40 }
  ]);

  const calculateAveragePrice = (course) => {
    const itemsOfCourse = menuItems.filter(item => item.course === course);
    if (itemsOfCourse.length === 0) return 0;
    const total = itemsOfCourse.reduce((sum, item) => sum + item.price, 0);
    return total / itemsOfCourse.length;
  };

  return (
    <View>
      <Text>Total Menu Items: {menuItems.length}</Text>
      <Text>Average Price for Starters: {calculateAveragePrice('Starter')}</Text>
      <Text>Average Price for Mains: {calculateAveragePrice('Main')}</Text>
      <Text>Average Price for Desserts: {calculateAveragePrice('Dessert')}</Text>

      <FlatList
        data={menuItems}
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

export default HomeScreen;
