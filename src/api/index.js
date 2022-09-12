import axios from 'axios';

const api = axios.create({
  baseURL: 'https://softeo-api.herokuapp.com',
});

export const fetchPatientsApi = async () => {
  const endpoint = '/patients';
  const { data } = await api.get(endpoint);

  return data;
};

export const updateInstallment = async (id) => {
  const endpoint = `/installments/${id}`;
  await api.put(endpoint);
};
