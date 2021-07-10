import * as axios from 'axios';

const URL = 'http://localhost:8090/api';

export const getCities = () => {
  return axios.get(URL + `/cities`).then((response) => {
    return response.data;
  });
};
