import React from 'react'
import { Text } from 'react-native'
import {
    useFonts,
    Comfortaa_400Regular
} from "@expo-google-fonts/comfortaa"
import colors from '../config/colors'

function PageTitle({ children }) {

    let [fontsLoaded] = useFonts({
        Comfortaa_400Regular
    })


    return (
        <>
            {fontsLoaded && (
                <Text style={{
                    fontFamily: 'Comfortaa_400Regular',
                    color: colors.customBrown,
                    fontSize: 30,
                    paddingBottom: 20
                }}>
                    {children}
                </Text>
            )}
        </>
    )
}

export default PageTitle
