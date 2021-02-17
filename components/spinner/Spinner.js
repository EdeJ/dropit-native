import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
// import { ReactComponent as LoaderIcon } from '../../assets/loading.svg'
import colors from '../../config/colors'
// import styles from './Spinner.module.css'

function Spinner({ message = 'loading...' }) {

    return (
        <View style={styles['spinner']}>
            {/* <LoaderIcon /> */}
            <Image source={require('../../assets/loader.gif')} style={styles.loadingIcon} />
            <Text style={styles.message}>{message}</Text>
        </View>
    )
}

export default Spinner

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.customBackground,
        // position: fixed,
        // top: 0,
        // left: 0,
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



