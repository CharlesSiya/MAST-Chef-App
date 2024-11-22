import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AddRemoveScreen from './AddRemoveScreen';
import FilterScreen from './FilterScreen';

const Stack = createStackNavigator();

const App = () => {
  // Shared state for the menu items
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

  // Function to add a new menu item
  const addItem = (newItem) => {
    setMenuItems([...menuItems, { ...newItem, price: parseFloat(newItem.price) }]);
    setFilteredItems([...menuItems, { ...newItem, price: parseFloat(newItem.price) }]); // Update filtered items as well
  };

  // Function to remove a menu item by name
  const removeItem = (name) => {
    const updatedMenuItems = menuItems.filter(item => item.name !== name);
    setMenuItems(updatedMenuItems);
    setFilteredItems(updatedMenuItems); // Update filtered items as well
  };

  // Function to filter items by course
  const filterByCourse = (course) => {
    if (course === 'All') {
      setFilteredItems(menuItems); // Show all items
    } else {
      setFilteredItems(menuItems.filter(item => item.course === course));
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              menuItems={filteredItems}
              calculateAveragePrice={(course) => {
                const itemsOfCourse = menuItems.filter(item => item.course === course);
                if (itemsOfCourse.length === 0) return 0;
                const total = itemsOfCourse.reduce((sum, item) => sum + item.price, 0);
                return total / itemsOfCourse.length;
              }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddRemove">
          {(props) => (
            <AddRemoveScreen
              {...props}
              menuItems={menuItems}
              addItem={addItem}
              removeItem={removeItem}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Filter">
          {(props) => (
            <FilterScreen
              {...props}
              filterByCourse={filterByCourse}
              menuItems={filteredItems} // Pass filtered items to the FilterScreen
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
