import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import { useAuthentication } from '../hooks/authentication'

function TopHeader({ navigation }) {

    const { getUser, isAdmin } = useAuthentication()
    const [user, setUser] = useState()

    useEffect(() => {

        fetchUser()
        async function fetchUser() {
            const user = await getUser()
            if (user && isAdmin(user)) {
                setUser(user)
            }
        }
    }, [])

    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home', { name: 'Home' })}
            >
                <Image source={require('../assets/dropit-logo.png')} style={styles.logo} />
            </TouchableOpacity>
            <View style={styles.tools}>
                {user && (
                    <TouchableOpacity
                        style={styles.userIcon}
                        onPress={() => navigation.navigate('MyProfile', { name: 'MyProfile' })}
                    >
                        <Image source={require('../assets/user-icon.png')} style={styles.userIcon} />
                    </TouchableOpacity>
                )}
                <TouchableOpacity
                    style={styles.menu}
                    onPress={() => navigation.navigate('Menu', { name: 'Menu' })}
                >
                    <Image source={require('../assets/menu-icon.png')} style={styles.menu} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.customBackground,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingRight: 20,
        marginBottom: 20
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
        height: 37,
        marginRight: 20,
    },
    menu: {
        width: 42,
        height: 37
    }
})


export default TopHeader