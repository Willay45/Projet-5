import axios from 'axios';

const url = 'http://localhost:8080/api';

export const saveImage = image => {
  axios.post(`${url}/image/upload`, image).then(res => {
    console.log(res.statusText);
  });
};

export const postImage = image => {
  axios.post(`${url}/image`, image).then(res => {
    console.log(res.statusText);
  });
};
