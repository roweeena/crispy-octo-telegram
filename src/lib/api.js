
import axios from 'axios';

import router from '../router/index.js'

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
            const { token, id, name } = res.data
            // const currentUser = Vue.observable({ id: id, token: token })
            localStorage.setItem('currentUserToken', token)
            localStorage.setItem('currentUserId', id)
            localStorage.setItem('currentUserName', name)
            localStorage.setItem('currentUser', JSON.stringify(res.data))
            // router.push('/')
            router.push('/user/edit')
            
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

const createTrip = (payload) => {
  console.log('something', payload)
   const url = `${API_BASE_URL}/trip/new`;
   const {location, budget, date} = payload
   console.log(location);
    return axios.post(
     url, {
       location:location,
       budget: budget,
       date: date
     }
   )
   .then((res) => {
     console.log(res.data)
   })
   .catch((err) => {
     console.warn(err)
   })
}

const verifyLogin = (id) => {
  console.log('verifying login', id)
  const url = `${API_BASE_URL}/user/${id}`
  return axios.get(url)
  .then((res) => {
    console.log(res.data)
    return res.data
  })
  .catch((err) => {
    console.warn(err)
  })
}

const editUser = (userInfo) => {
  console.log('editing user', userInfo);
  const url = `${API_BASE_URL}/user/edit/`
  axios.post(url, {newName: userInfo, id:localStorage.getItem('currentUserId')})
  .then((res) => {
    console.log(res.data)
    // localStorage.setItem('currentUserName', res.data.name)
    localStorage.setItem('currentUser', JSON.stringify(res.data))

  })
  .catch((err)=>{
    console.warn(err)
  })
}




export{
    signup,
    login,
    createTrip,
    verifyLogin,
    editUser
}
