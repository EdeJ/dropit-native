import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import colors from '../config/colors'

function Login() {

    const [userName, onChangeUserName] = useState('User name')
    const [password, onChangePassword] = useState('Password')

    return (
        <View style={{ maxWidth: 400 }} >
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
                onChangeText={text => onChangeText(text)}
                value={userName}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={password}
            />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.customBackground,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        height: 60,
        marginTop: 40
    }
})