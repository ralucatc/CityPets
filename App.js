import React from 'react';

import DrawerNavigatorComp from './components/DrawerNavigatorComp';


export default function App(){
  return(
     <DrawerNavigatorComp/>
  );
}

/*
import Login from './screens/login';
import Signup from './screens/signup';
import Dashboard from './screens/dashboard'
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import AddingPet from './screens/AddingPet';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Ionicons } from '@expo/vector-icons';
import iconSet from '@expo/vector-icons/build/Fontisto';
import Icon from 'react-native-vector-icons/Ionicons';

import { DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
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
     // title:'About',
      headerRight:() => (
         <Icon.Button
                 name="md-menu"
                 size={30}
                 backgroundColor= '#57419d'
                // height={40}
                 onPress={() => navigation.openDrawer()}
               />
      )
    }}
    />
    </HomeStack.Navigator>
  );
}

const FeedStack = createStackNavigator();

function FeedScreenStack({navigation}) {
  return (
    <FeedStack.Navigator
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
    <FeedStack.Screen name="FeedPage" component={FeedScreen} options={{
      title:'Community!',
      headerRight:() => (
         <Icon.Button
                 name="md-menu"
                 size={30}
                 backgroundColor= '#57419d'
                // height={40}
                 onPress={() => navigation.openDrawer()}
               />
      )
    }}
    />
    </FeedStack.Navigator>
  );
}

const AddingPetStack = createStackNavigator();

function AddingPetScreenStack({navigation}) {
  return (
    <AddingPetStack.Navigator
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
    <AddingPetStack.Screen name="AddingPage" component={AddingPet} options={{
      title:'Add a pet!',
      headerRight:() => (
         <Icon.Button
                 name="md-menu"
                 size={30}
                 backgroundColor= '#57419d'
                // height={40}
                 onPress={() => navigation.openDrawer()}
               />
      )
    }}
    />
    </AddingPetStack.Navigator>
  );
}

const Stack = createStackNavigator();

function MyStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Welcome-Screen" 
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
            }}
    >   
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
        }
      />
      <Stack.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options = {{
          headerRight:() => (
            <Icon.Button
                    name="md-menu"
                    size={30}
                    backgroundColor= '#57419d'
                    // height={40}
                   onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                  />
          )
        }
      }
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Drawer.Navigator initialRouteName="Welcome-Screen" >
      <Drawer.Screen name="Welcome-Screen" component={MyStack}/>
      
      <Drawer.Screen name="About" component={HomeScreenStack}
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

      <Drawer.Screen name="Feed" component={FeedScreenStack}
        options={{
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="md-star"
              size={size}
              color={focused ? '#6600cc' : '#ccc'}
            />
          ),
        }}
      />

      <Drawer.Screen name="Add a pet!" component={AddingPetScreenStack}
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

     </Drawer.Navigator>  
    </NavigationContainer>
  );
}
*/