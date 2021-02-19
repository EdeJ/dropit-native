import axios from 'axios'
import { getAccessToken } from './helperFunctions'

export const axiosConfig = axios.create({
    baseURL: 'https://dropit-api.herokuapp.com/'
})

export const getAllUsers = async () => {
    try {
        return await axiosConfig.get('/api/users/',
            { headers: { Authorization: await getAccessToken() } }
        )
    } catch (error) {
        console.log(error)
    }
}

export const getUserById = async (userId) => {

    try {
        return await axiosConfig.get(`/api/users/${userId}`,
            { headers: { Authorization: await getAccessToken() } }
        )
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async (user) => {
    try {
        return await axiosConfig.put(`/api/users/${user.userId}`, user)
    } catch (error) {
        console.log(error)
    }
}

export const getAllDemos = async () => {
    try {
        return await axiosConfig.get('/api/demos',
            { headers: { Authorization: await getAccessToken() } }
        )
    } catch (error) {
        console.log(error)
    }
}

export const getDemoById = async (demoId) => {
    try {
        return await axiosConfig.get(`/api/demos/${demoId}`)
    } catch (error) {
        console.log(error)
    }
}

export const getAllDemosByUserId = async (userId) => {
    try {
        return await axiosConfig.get(`/api/users/${userId}/demos`)
    } catch (error) {
        console.log(error)
    }
}

export const deleteDemoById = async (demoId) => {
    try {
        return await axiosConfig.delete(`/api/demos/${demoId}`)
    } catch (error) {
        console.log(error)
    }
}

export const addComment = async (comment) => {
    try {
        return await axiosConfig.post('/api/comments/', comment)
    } catch (error) {
        console.log(error)
    }
}

export const updateComment = async (comment) => {
    try {
        return await axiosConfig.put(
            `/api/comments/${comment.commentId}`, comment)
    } catch (error) {
        console.log(error)
    }
}

export const deleteComment = async (commentId) => {
    try {
        return await axiosConfig.delete(`/api/comments/${commentId}`)
    } catch (error) {
        console.log(error)
    }
}



