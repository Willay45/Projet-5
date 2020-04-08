import axios from 'axios';

const url = 'http://localhost:8080/api';

<<<<<<< HEAD
export const postUser = (user) => {
    return axios.post(`${url}/user`, user).then(response => response.data)
};

export const getUser = () => {
    return axios
        .get(`${url}/user`)
        .then(response => response.data)
=======
export const saveProduct = product => {
  axios.post(`${url}/product/upload`, product).then(res => {
    console.log(res.statusText);
  });
};

export const postProduct = (product, tags) => {
  axios.post(`${url}/product`, { ...product, tags }).then(res => {
    console.log(res.statusText);
  });
};

export const getTag = () => {
  return axios.get(`${url}/tag`).then(response => response.data);
>>>>>>> 53d0e7e1727c6b09338160b23773074c8c665ba3
};
