import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, View, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import colors from '../config/colors'
import { axiosConfig } from '../helpers/axiosConfig'
import { setLocalUser } from '../helpers/helperFunctions'
import { useAuthentication } from '../hooks/authentication'
import TopHeader from './TopHeader'

function SignIn({ setUser, navigation }) {

    const { control, handleSubmit, errors } = useForm()
    const [message, setMessage] = useState()
    const { user, login } = useAuthentication()


    const onSubmit = async data => {

        login(data.username, data.password)

        navigation.navigate('Home')

        // try {
        //     const response = await axiosConfig.post('api/auth/signin', {
        //         "username": data.username,
        //         "password": data.password
        //     })

        //     const newUser = {}
        //     newUser.userId = 1
        //     newUser.username = 'emieldejong@xs4all.nl'
        //     newUser.accessToken = 'Bearer secretToken'
        //     newUser.roles = ['ROLE_USER']

        //     return newUser


        // setLocalUser(user)
        // setUser(user)



        // } catch (error) {
        //     setMessage("Incorrect username or password")
        //     console.log(error)
        // }



    }

    // const login = async (username, password) => {


    // }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <TopHeader navigation={navigation} />
            <View style={styles.form} >

                {console.log('USER = ', user)}
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
                        name="username"
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
        </SafeAreaView>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.customBackground,
        // height: '100vh'
    },
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