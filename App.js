import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import colors from './config/colors'
import SignIn from './screens/SignIn'
import { AuthProvider } from './hooks/authentication'
import { getLocalUser } from './helpers/helperFunctions'
import Menu from './components/Menu'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import MyProfile from './screens/MyProfile'
import AllDemos from './screens/AllDemos'

export default function App() {

  // const [user, setUser] = useState()
  // const [showMenu, setShowMenu] = useState(false)

  const Stack = createStackNavigator()

  // useEffect(() => {

  //   fetchLocalUser()

  //   async function fetchLocalUser() {
  //     setUser(await getLocalUser())
  //   }


  // }, [])


  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>

          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen
            name="SignIn"
            component={SignIn}
          />

          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
          <Stack.Screen name="AllDemos" component={AllDemos} />

        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.customBackground,
//     color: colors.customBrown,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingTop: 40,
//     paddingRight: 20
//   },
//   logo: {
//     width: 200,
//     height: 60,
//   },
//   tools: {
//     flexDirection: 'row'
//   },
//   userIcon: {
//     width: 43,
//     height: 37
//   },
//   menu: {
//     width: 42,
//     height: 37
//   }
// })
