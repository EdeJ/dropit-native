import React, { useEffect, useState, useRef } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { getAllUsers } from '../helpers/axiosConfig'
import { useAuthentication } from '../hooks/authentication'
import Spinner from '../components/Spinner'
import PageTitle from '../components/PageTitle'
import PageTemplate from '../components/PageTemplate'
import { WebView } from 'react-native-webview';
import colors from '../config/colors'


function AllDemos({ navigation }) {

    const { getUser } = useAuthentication()
    const [allUsers, setAllUsers] = useState()
    const webViewRef = useRef()


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

    async function playSound(fileName) {
        console.log('Loading Sound', fileName)
    }

    function handleLoadEnd() {
        console.log(webViewRef.current)
    }

    if (!allUsers) {
        return <Spinner message="loading demos..." />
    }

    const audioUrl = 'https://dropit-api.herokuapp.com/api/files/066bb4db-ef44-4548-9e01-2541e2426229.mp3'

    // return 

    return (
        <>
            <WebView
                onLoadEnd={handleLoadEnd}
                ref={webViewRef}
                originWhitelist={['*']}
                source={{ html: `<audio  ontrols crossOrigin="anonymous" src="https://dropit-api.herokuapp.com/api/files/066bb4db-ef44-4548-9e01-2541e2426229.mp3" ></audio>` }}
            />
            <PageTemplate navigation={navigation}>
                <PageTitle>All Demos</PageTitle>
                {allUsers && (
                    <View style={styles.allDemo}>
                        {allUsers.map(user => (
                            <View key={user.userId}>
                                {user.demos.length > 0 && (
                                    <View>
                                        <Text style={styles.user} >User: {user.username}</Text>
                                        {user.demos.map(demo => (
                                            <View key={demo.id} style={styles.card}>
                                                <TouchableOpacity
                                                    style={styles.playBtn}
                                                    onPress={() => playSound(demo.fileName)}
                                                >
                                                    <Image source={require('../assets/play-icon.png')} style={styles.playIcon} />
                                                </TouchableOpacity>
                                                <Text style={styles.demoText} >{demo.songTitle}</Text>
                                            </View>
                                        ))}
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>
                )}
            </PageTemplate>
        </>
    )
}

const styles = StyleSheet.create({
    allDemo: {

    },
    user: {
        color: colors.customGreen,
        fontWeight: 'bold'
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: colors.customBrown,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 20
    },
    playIcon: {
        width: 36,
        height: 36,
        marginRight: 20
    },
    text: {
        fontSize: 20,
        color: colors.customBrown
    }
})

export default AllDemos

