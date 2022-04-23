
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const signup = ( mail, pass ) => {
    // console.log('API.js called', mail, pass)
    const url = `${API_BASE_URL}/user/signup/`;
    return axios.post(url, { email:mail, password:pass });
}


export{
    signup
}