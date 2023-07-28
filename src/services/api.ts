import axios from 'axios';

const TIMEOUT_SERVER = 60 * 1000; // 1 minute

const params = {
  timeout: TIMEOUT_SERVER,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    Authorization: localStorage.token ? `Bearer ${localStorage.token}` : ''
  }
};

export const api = axios.create({
  baseURL: 'http://localhost:4000',
  ...params
});
