import axios from 'axios';

const beersApi = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
});

export const listBeers = () => {
  return beersApi.get('/').then((response) => {
    console.log(response);
    return response.data;
  });
};

export const loadBeer = (id) =>
  beersApi.get(`/${id}`).then((response) => response.data);
