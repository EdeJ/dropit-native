import React from 'react'
import { View, Text, StyleSheet, Dimensions, Button, TouchableOpacity, Image } from 'react-native'
import colors from '../config/colors'
import { resetLocalUser } from '../helpers/helperFunctions'
import TopHeader from './TopHeader'

let { width, height } = Dimensions.get('window')

function Menu({ setUser, setShowMenu, navigation }) {

    const logout = () => {
        resetLocalUser()
        setUser(null)
        setShowMenu(false)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => setShowMenu(false)}
            >
                <Image source={require('../assets/close-btn.png')} />
            </TouchableOpacity>
            <View style={styles.menuItem}>
                <Text
                    style={styles.menuLink}
                    onPress={() => navigation.navigate('SignIn', { name: 'SignIn' })}
                >
                    Sign in
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
            <View style={styles.menuItem}>
                <Text
                    style={styles.menuLink}
                    onPress={logout}
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
        right: 20
    },
    menuItem: {
        width: '100%',
        // borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.customBorderBeige,
    },
    menuLink: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        color: colors.customBrown,
        fontWeight: 'bold',
        width: width
    }
})

