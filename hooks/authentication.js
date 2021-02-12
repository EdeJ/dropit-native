import React, { useState, useContext, createContext, useEffect } from "react"
import { axiosConfig } from "../helpers/axiosConfig"
import { setLocalUser, getLocalUser, resetLocalUser } from "../helpers/helperFunctions"
import { roles } from "../helpers/roles"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState()

  useEffect(() => {

    fetchLocalUser()
    async function fetchLocalUser() {
      const data = await getLocalUser()
      // console.log(data.username)
      setUser(data)
    }

  }, [])

  function isAdmin() {
    if (user) {
      return user.roles.includes(roles.ADMIN)
    }
  }

  const login = (username, password) => {
    console.log("login function")

    // try {
    //   const response = await axiosConfig.post('api/auth/signin', {
    //     "username": username,
    //     "password": password
    //   })

    let newUser = {}
    if (username === 'emieldejong@xs4all.nl' && password === 'password') {
      // response.data.id = 1
      // response.data.username = 'emieldejong@xs4all.nl'
      // response.data.accessToken = 'Bearer temp token'
      // response.data.roles = ['ROLE_USER']

      newUser.userId = 1
      newUser.username = 'emieldejong@xs4all.nl'
      newUser.accessToken = 'Bearer secretToken'
      newUser.roles = ['ROLE_USER']
    }

    // const newUser = {}
    // newUser.userId = response.data.id
    // newUser.username = response.data.username
    // newUser.accessToken = 'Bearer ' + response.data.accessToken
    // newUser.roles = response.data.roles

    setUser(newUser)
    setLocalUser(newUser)

    return true

    // } catch (error) {
    console.error(error)
    return false
    // }

  }

  const logout = async () => {
    resetLocalUser()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        isAdmin,
        login,
        logout,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthentication = () => useContext(AuthContext)
