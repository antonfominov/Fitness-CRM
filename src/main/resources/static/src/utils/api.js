import * as axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8090/api';

//const URL = 'http://localhost:8090/api';

export const getCities = () => {
  return axios
    .get(`/cities`)
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const deleteCity = (props) => {
  return axios
    .delete(`/cities`, { params: { id: props.id } })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const createCity = (props) => {
  return axios
    .post(`/cities`, { ...props })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};
