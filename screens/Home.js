import React from 'react'
import { View, Text, Button } from 'react-native'
import MyButton from '../components/MyButton'
import PageTemplate from '../components/PageTemplate'
import PageTitle from '../components/PageTitle'

function Home({ navigation }) {
    return (
        <PageTemplate navigation={navigation}>
            <PageTitle>"Now Give Me A Beat!"</PageTitle>
            <MyButton
                handleClick={() => navigation.navigate('AllDemos')}
            >
                All demos
          </MyButton>
        </PageTemplate>

    )
}

export default Home
