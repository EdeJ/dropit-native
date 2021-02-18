import React from 'react'
import { View, Text, Button } from 'react-native'
import MyButton from '../components/MyButton'
import PageTemplate from '../components/PageTemplate'
import PageTitle from '../components/PageTitle'
import { useAuthentication } from '../hooks/authentication'

function Home({ navigation }) {

    const { user } = useAuthentication()

    return (
        <PageTemplate navigation={navigation}>
            <PageTitle>"Now Give Me A Beat!"</PageTitle>
            {user ? (
                <MyButton
                    handleClick={() => navigation.navigate('AllDemos')}
                >
                    All demos
                </MyButton>
            ) : (
                    <MyButton
                        handleClick={() => navigation.navigate('SignIn')}
                    >
                        Sign In
                    </MyButton>
                )}

        </PageTemplate>

    )
}

export default Home
