import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import colors from './config/colors'
import Login from './components/Login'
import { AuthProvider } from './hooks/authentication'
import { getLocalUser } from './helpers/helperFunctions'
import Menu from './components/Menu'

export default function App() {

  const [user, setUser] = useState()
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {

    fetchLocalUser()

    async function fetchLocalUser() {
      setUser(await getLocalUser())
    }


  }, [])


  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        {user && <Text>{user.username}</Text>}
        {showMenu ? (
          <Menu
            setUser={setUser}
            setShowMenu={setShowMenu}
          />
        ) : (
            <View>
              <View style={styles.header}>
                <Image source={require('./assets/dropit-logo.png')} style={styles.logo} />
                <View style={styles.tools}>
                  <TouchableOpacity
                    style={styles.menu}
                    onPress={() => setShowMenu(true)}
                  >
                    <Image source={require('./assets/user-icon.png')} style={styles.userIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.menu}
                    onPress={() => setShowMenu(true)}
                  >
                    <Image source={require('./assets/menu-icon.png')} style={styles.menu} />
                  </TouchableOpacity>
                </View>
              </View>
              {user ? (
                <View>
                  <Text>Welcome: {user.username}</Text>
                </View>
              ) : (
                  <Login
                    setUser={setUser}
                  />
                )}
              <Text>Dropit app test</Text>
              <StatusBar style="auto" />
            </View>
          )
        }

      </SafeAreaView>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.customBackground,
    color: colors.customBrown,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingRight: 20
  },
  logo: {
    width: 200,
    height: 60,
  },
  tools: {
    flexDirection: 'row'
  },
  userIcon: {
    width: 43,
    height: 37
  },
  menu: {
    width: 42,
    height: 37
  }
})
