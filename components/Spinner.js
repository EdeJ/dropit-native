import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import colors from '../config/colors'

function Spinner({ message = 'loading...' }) {

    return (
        <View style={styles['spinner']}>
            <Image source={require('../assets/loader.gif')} style={styles.loadingIcon} />
            <Text style={styles.message}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.customBackground,
    },
    message: {
        color: colors.customBrown,
        marginTop: 20
    },
    loadingIcon: {
        width: 64,
        height: 64
    }
})

export default Spinner


