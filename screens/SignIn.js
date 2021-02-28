import React, { useState, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Text, TextInput, View, StyleSheet } from 'react-native'
import colors from '../config/colors'
import { useAuthentication } from '../hooks/authentication'
import MyButton from '../components/MyButton'
import PageTemplate from '../components/PageTemplate'
import Spinner from '../components/Spinner'


function SignIn({ navigation }) {

    const { control, handleSubmit, errors, setValue } = useForm()
    const [message, setMessage] = useState()
    const { isAdmin, login } = useAuthentication()
    const [isLoading, setIsLoading] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {

        setIsMounted(true)

        return () => setIsMounted(false)
    }, [])


    const onSubmit = async data => {

        setIsLoading(true)
        const user = await login(data.username, data.password)
        setIsLoading(false)

        if (!user) {
            setMessage("Incorrect username or password")
            return
        }


        if (user && !isAdmin(user)) {
            setMessage("You have to login as an administrator")
            return
        }

        if (user && isAdmin(user)) {
            if (isMounted) {
                navigation.push('Home')
            }
            return
        }
    }

    if (isLoading) {
        return <Spinner message="Signing in..." />
    }

    return (
        <PageTemplate navigation={navigation}>
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
                    {errors.password && <Text style={styles.error}>Password is required</Text>}
                    {message && <Text style={styles.error}>{message}</Text>}
                </View>
                <MyButton handleClick={handleSubmit(onSubmit)}>Sign in</MyButton>
            </View>
        </PageTemplate>
    )
}

const styles = StyleSheet.create({
    form: {
        maxWidth: 600,
    },
    formField: {
        marginTop: 20,
    },
    label: {
        marginBottom: 10
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

export default SignIn
