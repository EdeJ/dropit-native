import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TopHeader from './components/TopHeader'

function Home({ navigation }) {
    return (
        <>
            <TopHeader navigation={navigation} />
            <View>
                <Text>home page</Text>
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        navigation.navigate('Menu', { name: 'Menu' })
                    }
                />
            </View>
        </>
    )
}

export default Home
