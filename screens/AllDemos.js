import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import { getAllDemos } from '../helpers/axiosConfig'
import { useAuthentication } from '../hooks/authentication'
import Spinner from '../components/spinner/Spinner'
import PageTitle from '../components/PageTitle'
import PageTemplate from '../components/PageTemplate'

function AllDemos({ navigation }) {

    const { user } = useAuthentication()
    const [demos, setDemos] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        fetchData()

        async function fetchData() {
            if (!user) {
                navigation.navigate('SignIn')
                return
            }

            try {
                setIsLoading(true)
                const result = await getAllDemos()
                setDemos(result.data)
                setIsLoading(false)

            } catch (error) {
                setIsLoading(false)
                navigation.navigate('Home')
                console.error(error)
            }
        }
    }, [])

    return (
        <>
            {isLoading ? (
                <Spinner message="loading demos..." />
            ) : (
                    <PageTemplate navigation={navigation}>
                        <PageTitle>All Demos</PageTitle>
                        {demos && (

                            <View>
                                {console.log(demos)}
                                {/* <Text style={styles.text}>User name: {userData.username}</Text>
                                <Text style={styles.text}>First name: {userData.firstName}</Text>
                                <Text style={styles.text}>Last name: {userData.lastName}</Text>
                                <Text style={styles.text}>Country: {userData.country}</Text>
                                <Text style={styles.text}>E-mail: {userData.email}</Text>
                                <Text style={styles.text}>Facebook: {userData.facebook}</Text>
                                <Text style={styles.text}>Instagram: {userData.instagram}</Text> */}
                            </View>
                        )}
                    </PageTemplate>
                )}
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: colors.customBrown
    }
})

export default AllDemos

