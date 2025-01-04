import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Registration from '../auth/Registration';
import Login from '../auth/login';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login Page' }} 
        />
        <Stack.Screen 
          name="Register" 
          component={Registration} 
          options={{ title: 'Registration Page' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
