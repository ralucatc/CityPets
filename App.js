import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './screens/login';
import Signup from './screens/signup';
import Dashboard from './screens/dashboard';
import WelcomeScreen from './screens/WelcomeScreen';
import AddingPet from './screens/AddingPet';
import HomeScreen from './screens/HomeScreen';
import FeedScreen from './screens/FeedScreen';
import { Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import iconSet from '@expo/vector-icons/build/Fontisto';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

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
    <Stack.Screen name="Welcome Page" component={WelcomeScreen}  />  
    <Stack.Screen  name="Signup" component={Signup} 
        options={{ title: 'Sign up' }}
    />       
    <Stack.Screen name="Login"  component={Login} 
        options={
          {title: 'Login'}
         // {headerLeft: null} 
         }
    />
    <Stack.Screen name="Dashboard"  component={Dashboard} 
       options={
         { title: 'Dashboard' },
         {headerLeft: null} 
       }
    /> 
    </Stack.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeScreenStack({navigation}) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: "#57419d",
          height : 90,
        },
        
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>   
    <HomeStack.Screen name="Home Page" component={HomeScreen} options={{
      title:'Home',
      headerRight:() => (
         <Icon.Button
                 name="md-menu"
                 size={30}
                 backgroundColor= '#57419d' 
                // height={40}
                 onPress={() => navigation.openDrawer()}
               />
        // <Button 
        //   onPress={() => navigation.openDrawer()}
        //         title="Info"
        //         color="#00cc00"
        // />

      )
    }}
    />      
    </HomeStack.Navigator>
  );
}
// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
//       />
//     </DrawerContentScrollView>
//   );
// }

const Drawer = createDrawerNavigator();

function  NavigationDrawerStructure() {
  return (
   // <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Navigator initialRouteName="Home"> 
     <Drawer.Screen name="Home!" component={HomeScreenStack} 
          options={{
            drawerIcon: ({focused, size}) => (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? '#6600cc' : '#ccc'}
              />
            ),
          }}
      /> 

      <Drawer.Screen name="Adopting" component={AddingPet} 
        options={{
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="md-heart"
              size={size}
              color={focused ? '#6600cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen name="Dashboard" component={Dashboard} 
       options={{
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="md-paw"
            size={size}
            color={focused ? '#6600cc' : '#ccc'}
          />
        ),
      }}
      />
    
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavigationDrawerStructure/>
    </NavigationContainer>
  );
} 