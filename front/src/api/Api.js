import axios from 'axios';

const url = 'http://localhost:8080/api';

export const postUser = (user) => {
    return axios.post(`${url}/user`, user).then(response => response.data)
};

export const getUser = () => {
    return axios
        .get(`${url}/user`)
        .then(response => response.data)
};
