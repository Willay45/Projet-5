import axios from 'axios';

const url = 'http://localhost:8080/api';

export const postDriver = driver => {
  axios.post(`${url}/driver`, driver).then(response => {
    console.log(response.statusText);
  });
};

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
  });
};

export const getProductTag = () => {
  return axios
    .get(`${url}/product/product-tag`)
    .then(response => response.data);
};

export const getProduct = () => {
  return axios.get(`${url}/product`).then(response => response.data);
};

export const getProductById = id => {
  return axios.get(`${url}/product/${id}`).then(response => response.data);
};

export const postProductIntoBasket = data => {
  axios
    .post(`${url}/basket`, data)
    .then(response => console.log(response.statusText));
};

export const getBasket = userId => {
  return axios.get(`${url}/basket/${userId}`).then(response => response.data);
};
