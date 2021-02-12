import AsyncStorage from "@react-native-async-storage/async-storage"


// TODO naar map helpers
export async function getLocalUser() {
    if (await AsyncStorage.getItem("user")) {
        return JSON.parse(await AsyncStorage.getItem("user"))
    }
}

export async function setLocalUser(user) {
    await AsyncStorage.setItem("user", JSON.stringify(user))
}

export async function getAccessToken() {
    if (await AsyncStorage.getItem("user")) {
        return JSON.parse(await AsyncStorage.getItem("user")).accessToken
    }
}

export async function resetLocalUser() {
    await AsyncStorage.removeItem('user')

}


