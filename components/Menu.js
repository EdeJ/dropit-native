import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import colors from '../config/colors'
import { resetLocalUser } from '../helpers/helperFunctions'
import { useAuthentication } from '../hooks/authentication'

const { width, height } = Dimensions.get('window')

function Menu({ setUser, setShowMenu, navigation }) {

    const { user, logout } = useAuthentication()

    const signOut = () => {
        logout()
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => navigation.goBack()}
            >
                <Image style={styles.closeIcon} source={require('../assets/close-btn.png')} />
            </TouchableOpacity>
            {!user && (
                <View style={styles.menuItem}>
                    <Text
                        style={styles.menuLink}
                        onPress={() => navigation.navigate('SignIn', { name: 'SignIn' })}
                    >
                        Sign in
                </Text>
                </View>
            )}
            {user && (
                <>
                    <View style={styles.menuItem}>
                        <Text
                            style={styles.menuLink}
                            onPress={() => navigation.navigate('AllDemos', { name: 'AllDemos' })}
                        >
                            All demos
                  </Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Text
                            style={styles.menuLink}
                            onPress={() => navigation.navigate('MyProfile', { name: 'MyProfile' })}
                        >
                            My profile
                            </Text>
                    </View>
                </>
            )}
            <View style={styles.menuItem}>
                <Text
                    style={styles.menuLink}
                    onPress={signOut}
                >
                    Sign out
                </Text>
            </View>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.customBackground,
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
        padding: 40
    },
    closeBtn: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    closeIcon: {
        width: 48,
        height: 50
    },
    menuItem: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: colors.customBorderBeige,
    },
    menuLink: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        color: colors.customBrown,
        fontSize: 20,
        width: width
    }
})

