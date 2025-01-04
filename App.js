import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Ensure this is at the root level
import TabsScreen from './(tabs)/index';  // Import the Tab Navigator

export default function App() {
  return (
    <NavigationContainer>  {/* Only one NavigationContainer at the root */}
      <TabsScreen />  {/* Your Tab Navigator */}
    </NavigationContainer>
  );
}
