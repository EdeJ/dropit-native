import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from './components/SignIn'
import Menu from './components/Menu'
import Home from './Home'

const Stack = createStackNavigator()

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="signin"
                    component={SignIn}
                    options={{ title: 'Sign in' }}
                />
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}