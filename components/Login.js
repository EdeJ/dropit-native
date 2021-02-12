import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import { setLocalUser } from '../helpers/helperFunctions'

function Login({ setUser }) {

    const { control, handleSubmit, errors } = useForm()
    const [message, setMessage] = useState()

    const onSubmit = data => {

        const user = login(data.userName, data.password)

        if (!user) {
            setMessage("Incorrect username or password")
        } else {
            setLocalUser(user)
            setUser(user)
        }

    }

    const login = (username, password) => {

        const newUser = {}
        if (username === 'emieldejong@xs4all.nl' && password === 'password') {
            newUser.userId = 1
            newUser.username = 'emieldejong@xs4all.nl'
            newUser.accessToken = 'Bearer secretToken'
            newUser.roles = ['ROLE_USER']

            return newUser
        }
    }

    return (
        <View style={styles.form} >
            <View style={styles.formField}>
                <Text style={styles.label}>User name</Text>
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="userName"
                    rules={{ required: true }}
                    defaultValue=""
                />
                {errors.userName && <Text style={styles.error}>Username is required</Text>}
            </View>

            <View style={styles.formField}>
                <Text style={styles.label}>Password</Text>
                <Controller
                    control={control}
                    render={({ onChange, onBlur, value }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="password"
                    rules={{ required: true }}
                    defaultValue=""
                />
                {errors.password && <Text>Password is required</Text>}
                {message && <Text style={styles.error}>{message}</Text>}
            </View>


            <View style={styles.formField}></View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={styles.btnText}>Sign in</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    form: {
        maxWidth: 600,
        padding: 30
    },
    formField: {
        marginTop: 20,
    },
    label: {
        marginBottom: 10
    },
    button: {
        backgroundColor: colors.customGreen,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20

    },
    btnText: {
        color: colors.customWhite,
        fontWeight: 'bold'
    },
    error: {
        color: colors.customRed
    },
    input: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: colors.customWhite,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.customBrown,
        height: 50,
    }
})