import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import { getAllDemos, getAllUsers } from '../helpers/axiosConfig'
import { useAuthentication } from '../hooks/authentication'
import Spinner from '../components/Spinner'
import PageTitle from '../components/PageTitle'
import PageTemplate from '../components/PageTemplate'

function AllDemos({ navigation }) {

    const { getUser } = useAuthentication()
    const [allUsers, setAllUsers] = useState()

    useEffect(() => {

        fetchData()
        async function fetchData() {

            const user = await getUser()

            if (!user) {
                navigation.navigate('SignIn')
                return
            }

            try {
                const result = await getAllUsers()
                setAllUsers(result.data)

            } catch (error) {
                navigation.navigate('Home')
                console.error(error)
            }
        }
    }, [])

    if (!allUsers) {
        return <Spinner message="loading demos..." />
    }


    return (
        <PageTemplate navigation={navigation}>
            <PageTitle>All Demos</PageTitle>
            {allUsers && (
                <View style={styles.allDemo}>
                    {allUsers.map(user => (
                        <>
                            {user.demos.length > 0 && (
                                <View>
                                    <Text style={styles.user} >User: {user.username}</Text>
                                    <View>
                                        {user.demos.map(demo => (
                                            <Text style={styles.demo} >{demo.songTitle}</Text>
                                        ))}
                                    </View>
                                </View>
                            )}
                        </>
                    ))}
                </View>
            )}
        </PageTemplate>
    )
}

const styles = StyleSheet.create({
    allDemo: {

    },
    user: {
        color: colors.customGreen,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 20,
        color: colors.customBrown
    }
})

export default AllDemos

