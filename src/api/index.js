import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

const fetchPatientsApi = (month) => {
  const endpoint = 'patients';
  const { data } = api.get(endpoint, { month });
  return data;
};

export default fetchPatientsApi;
