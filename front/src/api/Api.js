import axios from 'axios';

const url = 'http://localhost:8080/api';

export const postUser = user => {
  axios.post(`${url}/user`, user).then(response => {
    console.log(response.statusText);
  });
};

export const getUser = () => {
  return axios.get(`${url}/user`).then(response => response.data);
};

export const saveProduct = product => {
  axios.post(`${url}/product/upload`, product).then(response => {
    console.log(response.statusText);
  });
};

export const postProduct = (product, tags) => {
  axios.post(`${url}/product`, { ...product, tags }).then(response => {
    console.log(response.statusText);
  });
};

export const getTag = () => {
  return axios.get(`${url}/tag`).then(response => response.data);
};

export const login = user => {
  axios.post(`${url}/user/login`, user).then(response => {
    const token = response.data;
    localStorage.setItem('token', token);
    const dataPayload = token.split('.')[1];
    console.log(atob(dataPayload));
  });
};
