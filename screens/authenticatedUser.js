import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';


export default function AuthenticatedScreen() {
    return (
       <ImageBackground
       style={styles.background}
       source={require("../assets/background.png")}>
           <View style={styles.buttonsContainer}></View>
       </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        height: 900,
    },

    buttonsContainer: {
        padding: 20,
        width: "100%",
    },

})

// import React from 'react';
// import AddingPet from './screens';
// import HomeScreen from './screens';
// import Dashboard from './screens';
// // import FeedScreen from './FeedScreen';
// // import { Button } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { DrawerActions } from '@react-navigation/native';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';

// import iconSet from '@expo/vector-icons/build/Fontisto';
// import Icon from 'react-native-vector-icons/Ionicons';

// // const Stack = createStackNavigator();

// // function ScreensStack() {
// //   return (
// //     <Stack.Navigator
// //       initialRouteName="Welcome Screen"
// //       screenOptions={{
// //         headerTitleAlign: 'center',
// //         headerStyle: {
// //           backgroundColor: "#57419d",
// //           height : 80,
// //         },

// //         headerTintColor: '#fff',
// //         headerTitleStyle: {
// //           fontWeight: 'bold',
// //         },
// //       }}>
// //     <Stack.Screen name="Welcome Page" component={WelcomeScreen}  />
// //     <Stack.Screen  name="Signup" component={Signup}
// //         options={{ title: 'Sign up' }}
// //     />
// //     <Stack.Screen name="Login"  component={Login}
// //         options={
// //           {title: 'Login'}
// //          // {headerLeft: null}
// //          }
// //     />
// //     <Stack.Screen name="Dashboard"  component={Dashboard}
// //        options={
// //          { title: 'Dashboard' },
// //          {headerLeft: null}
// //        }
// //     />
// //     </Stack.Navigator>
// //   );
// // }

// const HomeStack = createStackNavigator();

// function HomeScreenStack({navigation}) {
//   return (
//     <HomeStack.Navigator
//       screenOptions={{
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: "#57419d",
//           height : 90,
//         },

//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//     <HomeStack.Screen name="Home Page" component={HomeScreen} options={{
//       title:'Home',
//       headerRight:() => (
//          <Icon.Button
//                  name="md-menu"
//                  size={30}
//                  backgroundColor= '#57419d'
//                 // height={40}
//                  onPress={() => navigation.openDrawer()}
//                />
//       )
//     }}
//     />
//     </HomeStack.Navigator>
//   );
// }

// const AddingPetStack = createStackNavigator();

// function AddingPetScreenStack({navigation}) {
//   return (
//     <AddingPetStack.Navigator
//       screenOptions={{
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: "#57419d",
//           height : 90,
//         },

//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//     <AddingPetStack.Screen name="Home Page" component={AddingPet} options={{
//       title:'Addoption!',
//       headerRight:() => (
//          <Icon.Button
//                  name="md-menu"
//                  size={30}
//                  backgroundColor= '#57419d'
//                 // height={40}
//                  onPress={() => navigation.openDrawer()}
//                />
//       )
//     }}
//     />
//     </AddingPetStack.Navigator>
//   );
// }

// // const WelcomeStack = createStackNavigator();

// // function WelcomeScreenStack({navigation}) {
// //   return (
// //     <WelcomeStack.Navigator
// //       screenOptions={{
// //         headerTitleAlign: 'center',
// //         headerStyle: {
// //           backgroundColor: "#57419d",
// //           height : 90,
// //         },

// //         headerTintColor: '#fff',
// //         headerTitleStyle: {
// //           fontWeight: 'bold',
// //         },
// //       }}>
// //     <WelcomeStack.Screen name="Welcome Page" component={WelcomeScreen} options={{
// //       title:'Welcome!',
// //       headerRight:() => (
// //          <Icon.Button
// //                  name="md-menu"
// //                  size={30}
// //                  backgroundColor= '#57419d'
// //                 // height={40}
// //                  onPress={() => navigation.openDrawer()}
// //                />
// //       )
// //     }}
// //     />
// //     <Stack.Screen  name="Signup" component={Signup}
// //         options={{ title: 'Sign up' }}
// //     />
// //     <Stack.Screen name="Login"  component={Login}
// //         options={
// //           {title: 'Login'}
// //          // {headerLeft: null}
// //          }
// //     />

// //     </WelcomeStack.Navigator>
// //   );
// // }


// // function CustomDrawerContent(props) {
// //   return (
// //     <DrawerContentScrollView {...props}>
// //       <DrawerItemList {...props} />
// //       <DrawerItem
// //         label="Close drawer"
// //         onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
// //       />
// //       <DrawerItem
// //         label="Toggle drawer"
// //         onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
// //       />
// //     </DrawerContentScrollView>
// //   );
// // }

// const Drawer = createDrawerNavigator();

// function  NavigationDrawerStructure() {
//   return (
//    // <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
//     <Drawer.Navigator initialRouteName="Home">

//      {/* <Drawer.Screen name="Welcome" component={WelcomeScreenStack}
//           options={{
//             drawerIcon: ({focused, size}) => (
//               <Ionicons
//                 name="md-log-in"
//                 size={size}
//                 color={focused ? '#6600cc' : '#ccc'}
//               />
//             ),
//           }}
//       />  */}

//      <Drawer.Screen name="Home" component={HomeScreenStack}
//           options={{
//             drawerIcon: ({focused, size}) => (
//               <Ionicons
//                 name="md-home"
//                 size={size}
//                 color={focused ? '#6600cc' : '#ccc'}
//               />
//             ),
//           }}
//       />

//       <Drawer.Screen name="Adopt!" component={AddingPetScreenStack}
//         options={{
//           drawerIcon: ({focused, size}) => (
//             <Ionicons
//               name="md-heart"
//               size={size}
//               color={focused ? '#6600cc' : '#ccc'}
//             />
//           ),
//         }}
//       />
//       <Drawer.Screen name="Dashboard" component={Dashboard}
//        options={{
//         drawerIcon: ({focused, size}) => (
//           <Ionicons
//             name="md-paw"
//             size={size}
//             color={focused ? '#6600cc' : '#ccc'}
//           />
//         ),
//       }}
//       />

//     </Drawer.Navigator>
//   );
// }

// export default function AuthenticatedScreen() {
//   return (
//     <NavigationContainer>
//       <NavigationDrawerStructure/>
//     </NavigationContainer>
//   );
// }