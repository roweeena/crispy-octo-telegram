
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

// const header = {"Access-Control-Allow-Origin": "*"}

const login = ( mail, pass ) => {
    // console.log('API.js called', mail, pass)
    // const url = `${API_BASE_URL}/user/signup`;
    const url = `${API_BASE_URL}/user/login`;
    return axios.post(
        url, 
        // {headers: header}, 
        { email: mail, password: pass })
        .then((res) => {
            console.log('res', res.data)
            const { token, id } = res.data
            // const currentUser = Vue.observable({ id: id, token: token })
            localStorage.setItem('currentUserToken', token)
            localStorage.setItem('currentUserId', id)
        })
        .catch((err, res) => {
            console.log(err, "RESPONSE:", res)
        })
}


const signup = ( mail, pass ) => {
    // console.log('API.js called', mail, pass)
    // const url = `${API_BASE_URL}/user/signup`;
    const url = `${API_BASE_URL}/user/signup`;
    return axios.post(
        url, 
        // {headers: header}, 
        { email: mail, password: pass })
        .then((res) => {
            console.log('res', res.data)
        })
        .catch((err, res) => {
            console.log(err, "RESPONSE:", res)
        })

}


export{
    signup,
    login
}