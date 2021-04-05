import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './screens/login';
import Signup from './screens/signup';
import Dashboard from './screens/dashboard';
import WelcomeScreen from './screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddingPet from './screens/AddingPet';

export default function App(){
  return(
     <AddingPet/>
  );
}

/*const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome Screen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: "#57419d",
          height : 80,
        },
        
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>   
    <Stack.Screen 
        name="Welcome Page" 
        component={WelcomeScreen} 
       
      />  
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Sign up' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'}
         // {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Dashboard' },
         {headerLeft: null} 
       }
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

*/