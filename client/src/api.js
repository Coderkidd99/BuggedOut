import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burimi-issuetracker-api.azurewebsites.net/api/Api/',
});

export default instance;
