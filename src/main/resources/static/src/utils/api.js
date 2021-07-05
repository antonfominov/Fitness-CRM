import * as axios from 'axios';

const API = 'http://localhost:8090/api';

export const getCities = () => {
  return axios.get(API + `/cities`).then((response) => {
    return response.data;
  });
};
