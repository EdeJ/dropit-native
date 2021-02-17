import React, { useEffect, useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import Header from '../components/TopHeader'
import colors from '../config/colors'
import { getUserById } from '../helpers/axiosConfig'
import { getLocalUser } from '../helpers/helperFunctions'
import { useAuthentication } from '../hooks/authentication'
// import { FormProvider, useForm } from 'react-hook-form'
// import { IoPencilSharp } from 'react-icons/io5'
// import { getUserById, updateUser } from '../../helpers/axiosConfig'
// import { TextInput } from '../../components/textInput/TextInput'
// import { useAuthentication } from '../../hooks/authentication'
import Spinner from '../components/spinner/Spinner'


// import styles from '../MyProfile.module.css'

function MyProfile({ navigation }) {

    const { user } = useAuthentication()
    const [userData, setUserData] = useState()
    // const [disabled, setDisabled] = useState(true)
    // const { ...methods } = useForm({ mode: 'onBlur' })
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        fetchData()

        async function fetchData() {

            const user = await getLocalUser()
            console.log('localUser', user)


            setIsLoading(true)
            try {
                const result = await getUserById(user.userId)
                console.log('userDate', result.data)
                setUserData(result.data)
                setIsLoading(false)
            } catch (error) {
                // TODO user message
                setIsLoading(false)
                console.error(error)
            }
        }

    }, [user])

    // const onSuccess = (formData) => {

    //     formData.userId = user.userId
    //     formData.username = user.username

    //     sendUser(formData)
    //     async function sendUser(formData) {
    //         try {
    //             setIsLoading(true)
    //             await updateUser(formData)
    //             setIsLoading(false)
    //             setDisabled(true)
    //         } catch (error) {
    //             // TODO user message
    //             setIsLoading(false)
    //             console.error(error)
    //         }
    //     }
    // }

    // const onError = (errorList) => {
    //     console.log(errorList)
    // }

    return (
        <>
            {!userData ? (<Spinner />
            ) : (
                    <SafeAreaView style={styles.container}>
                        <StatusBar style="auto" />
                        <Header navigation={navigation} />
                        {userData && (
                            <View style={styles.userData}>
                                <Text style={styles.text}>User name: {userData.username}</Text>
                            </View>
                        )}
                    </SafeAreaView>
                )}
        </>

        // <>
        //     {isLoading && <Spinner message="loading profile..." />}
        //     <FormProvider {...methods} >
        //         <div
        //             onSubmit={methods.handleSubmit(onSuccess, onError)}
        //             className={styles['center']}
        //         >
        //             <div className={styles['full-page']}>
        //                 <h3>My Profile</h3>
        //                 <div>
        //                     {userData && (
        //                         <form className="dropit-form">
        //                             <div
        //                                 className={styles['edit']}
        //                                 onClick={() => setDisabled(!disabled)}
        //                             >
        //                                 <IoPencilSharp />
        //                                 <span>edit</span>
        //                             </div>
        //                             <TextInput
        //                                 type="text"
        //                                 label="User name"
        //                                 name="username"
        //                                 value={userData.username}
        //                                 fieldRef={methods.register({
        //                                     required: "Your user name is required"
        //                                 })}
        //                                 disabled={true}
        //                             />
        //                             <TextInput
        //                                 type="text"
        //                                 label="First name"
        //                                 name="firstName"
        //                                 value={userData.firstName}
        //                                 disabled={disabled}
        //                                 fieldRef={methods.register}
        //                             />
        //                             <TextInput
        //                                 type="text"
        //                                 label="Last name"
        //                                 name="lastName"
        //                                 value={userData.lastName}
        //                                 disabled={disabled}
        //                                 fieldRef={methods.register}
        //                             />
        //                             <TextInput
        //                                 type="text"
        //                                 label="Country"
        //                                 name="country"
        //                                 value={userData.country}
        //                                 disabled={disabled}
        //                                 fieldRef={methods.register}
        //                             />
        //                             <TextInput
        //                                 type="text"
        //                                 label="Email address"
        //                                 name="email"
        //                                 value={userData.email}
        //                                 disabled={disabled}
        //                                 fieldRef={methods.register}
        //                             />
        //                             <TextInput
        //                                 type="text"
        //                                 label="Facebook"
        //                                 name="facebook"
        //                                 value={userData.facebook}
        //                                 disabled={disabled}
        //                                 fieldRef={methods.register}
        //                             />
        //                             <TextInput
        //                                 type="text"
        //                                 label="Instagram"
        //                                 name="instagram"
        //                                 value={userData.instagram}
        //                                 disabled={disabled}
        //                                 fieldRef={methods.register}
        //                             />
        //                             {!disabled && <button type="submit">Save</button>}
        //                         </form>
        //                     )}
        //                 </div>
        //             </div>
        //         </div>
        //     </FormProvider>
        // </>

    )
}

export default MyProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.customBackground,
    },
    userData: {
        padding: 40
    },
    text: {
        fontSize: 20,
        color: colors.customBrown
    }
})

