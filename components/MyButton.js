import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

function MyButton({ handleClick, children }) {

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={handleClick}
        >
            <Text style={styles.btnText}>{children}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.customGreen,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20

    },
    btnText: {
        color: colors.customWhite,
        fontWeight: 'bold'
    }
})

export default MyButton
