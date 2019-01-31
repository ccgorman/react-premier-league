import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json'
});

export default instance;