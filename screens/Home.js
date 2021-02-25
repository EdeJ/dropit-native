import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import MyButton from '../components/MyButton'
import PageTemplate from '../components/PageTemplate'
import PageTitle from '../components/PageTitle'
import { useAuthentication } from '../hooks/authentication'

function Home({ navigation }) {

    const { getUser, isAdmin } = useAuthentication()
    const [user, setUser] = useState()

    useEffect(() => {
        fetchUser()
        async function fetchUser() {
            const user = await getUser()
            if (user && isAdmin(user)) {
                setUser(user)
            }
        }
    }, [])

    return (
        <PageTemplate navigation={navigation}>
            <PageTitle>"Now Give Me A Beat!"</PageTitle>
            {user ? (
                <View>
                    <MyButton
                        handleClick={() => navigation.navigate('AllDemos')}
                    >
                        All demos
                    </MyButton>
                </View>
            ) : (
                    <View>
                        <MyButton
                            handleClick={() => navigation.navigate('SignIn')}
                        >
                            Sign In
                        </MyButton>
                    </View>
                )}
        </PageTemplate>

    )
}

export default Home
