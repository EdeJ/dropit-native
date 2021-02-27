import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import TopHeader from '../components/TopHeader'
import colors from '../config/colors'

function PageTemplate({ children, navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <TopHeader navigation={navigation} />
            <View style={styles.page}>
                {children}
            </View>
        </SafeAreaView>
    )
}

export default PageTemplate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.customBackground,
    },
    page: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 80
    }
})
