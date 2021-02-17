import AsyncStorage from "@react-native-async-storage/async-storage"


const localStorage = AsyncStorage;

export async function getLocalUser() {
    if (await localStorage.getItem("user")) {
        return JSON.parse(await localStorage.getItem("user"))
    }
}

export async function setLocalUser(user) {
    await localStorage.setItem("user", JSON.stringify(user))
}

export async function getAccessToken() {
    if (await localStorage.getItem("user")) {
        return JSON.parse(await localStorage.getItem("user")).accessToken
    }
}

export async function resetLocalUser() {
    await localStorage.removeItem('user')

}



// export function getLocalUser() {
//     if (localStorage.getItem("user")) {
//         return JSON.parse(localStorage.getItem("user"))
//     }
// }

// export function setLocalUser(user) {
//     localStorage.setItem("user", JSON.stringify(user))
// }

// export function getAccessToken() {
//     if (localStorage.getItem("user")) {
//         return JSON.parse(localStorage.getItem("user")).accessToken
//     }
// }

// export function resetLocalUser() {
//     localStorage.removeItem('user')

// }


