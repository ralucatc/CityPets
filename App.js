import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './screens/login';
import Signup from './screens/signup';
import Dashboard from './screens/dashboard';
import WelcomeScreen from './screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddingPet from './screens/AddingPet';

import { DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

/*export default function App(){
  return(
     <AddingPet/>

  );
} */

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function  NavigationDrawerStructure() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Welcome!" component={ScreensStack} />
      <Drawer.Screen name="Form" component={AddingPet} />
  
    </Drawer.Navigator>
  );
}

function ScreensStack() {
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
      <NavigationDrawerStructure/>
    </NavigationContainer>
  );
}