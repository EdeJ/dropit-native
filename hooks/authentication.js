import React, { useContext, createContext } from "react"
import { axiosConfig } from "../helpers/axiosConfig"
import { setLocalUser, getLocalUser, resetLocalUser } from "../helpers/helperFunctions"
import { roles } from "../helpers/roles"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

  async function getUser() {
    return await getLocalUser()
  }

  function isAdmin(user) {
    if (user) {
      return user.roles.includes(roles.ADMIN)
    }
  }

  const login = async (username, password) => {

    try {
      const response = await axiosConfig.post('api/auth/signin', {
        "username": username,
        "password": password
      })

      const newUser = {}
      newUser.userId = response.data.id
      newUser.username = response.data.username
      newUser.accessToken = 'Bearer ' + response.data.accessToken
      newUser.roles = response.data.roles

      setLocalUser(newUser)

      return newUser

    } catch (error) {
      console.error(error)
      return false
    }

  }

  const logout = async () => {
    return await resetLocalUser()
  }

  return (
    <AuthContext.Provider
      value={{
        isAdmin,
        login,
        logout,
        getUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthentication = () => useContext(AuthContext)
