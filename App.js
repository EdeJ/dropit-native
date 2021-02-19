import 'react-native-gesture-handler'
import React from 'react'
import SignIn from './screens/SignIn'
import { AuthProvider } from './hooks/authentication'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import Menu from './components/Menu'
import MyProfile from './screens/MyProfile'
import AllDemos from './screens/AllDemos'

export default function App() {

  const Stack = createStackNavigator()

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
          <Stack.Screen name="AllDemos" component={AllDemos} />

        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  )
}