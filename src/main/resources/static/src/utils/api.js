import * as axios from 'axios';
import moment from 'moment';

//axios.defaults.baseURL = 'http://46.174.51.154:8090/api';
axios.defaults.baseURL = 'http://localhost:8090/api';

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

export const updateCity = (props) => {
  return axios
    .put(`/cities`, { ...props })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};

// Клубы (getClubs, deleteClub, createClub, updateClub)

export const getClubs = () => {
  return axios
    .get(`/clubs`)
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getClub = (props) => {
  return axios
    .get(`/clubs/${props.id}`)
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const deleteClub = (props) => {
  return axios
    .delete(`/clubs`, { params: { id: props.id } })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const createClub = (props) => {
  let time = moment.parseZone(props.openTime).toISOString();
  props.openTime = moment.parseZone(props.openTime).toISOString();
  props.closeTime = moment.parseZone(props.closeTime).toISOString();
  return axios
    .post(`/clubs`, { ...props })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};

export const updateClub = (props) => {
  props.openTime = moment.parseZone(props.openTime).toISOString();
  props.closeTime = moment.parseZone(props.closeTime).toISOString();
  return axios
    .put(`/clubs`, { ...props })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};
