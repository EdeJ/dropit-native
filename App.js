import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import colors from './config/colors'
import Login from './components/Login'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('./assets/dropit-logo.png')} style={styles.logo} />
      </View>
      <Login />
      <Text>Dropit app</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.customBackground,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 60,
    marginTop: 40
  }
})
