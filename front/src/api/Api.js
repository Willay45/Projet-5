import axios from 'axios';

const url = 'http://localhost:8080/api';

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
};
