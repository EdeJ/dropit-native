import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import { getUserById } from '../helpers/axiosConfig'
import { useAuthentication } from '../hooks/authentication'
import Spinner from '../components/Spinner'
import PageTitle from '../components/PageTitle'
import PageTemplate from '../components/PageTemplate'

function MyProfile({ navigation }) {

    const { getUser } = useAuthentication()
    const [userData, setUserData] = useState()

    useEffect(() => {

        fetchData()
        async function fetchData() {
            const user = await getUser()

            if (!user) {
                navigation.navigate('SignIn')
                return
            }

            try {
                const result = await getUserById(user.userId)
                setUserData(result.data)

            } catch (error) {
                navigation.navigate('Home')
                console.error(error)
            }
        }
    }, [])

    if (!userData) {
        return <Spinner message="Loading profile..." />
    }

    return (
        <PageTemplate navigation={navigation}>
            <PageTitle>My profile</PageTitle>
            {
                userData && (
                    <View style={styles.userData}>
                        <Text style={styles.text}>User name: {userData.username}</Text>
                        <Text style={styles.text}>First name: {userData.firstName}</Text>
                        <Text style={styles.text}>Last name: {userData.lastName}</Text>
                        <Text style={styles.text}>Country: {userData.country}</Text>
                        <Text style={styles.text}>E-mail: {userData.email}</Text>
                        <Text style={styles.text}>Facebook: {userData.facebook}</Text>
                        <Text style={styles.text}>Instagram: {userData.instagram}</Text>
                    </View>
                )
            }
        </PageTemplate >
    )

}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: colors.customBrown
    },
    userData: {
        marginTop: 30
    }
})

export default MyProfile

