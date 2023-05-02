import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const axiosClient = axios.create({
  baseURL: BASE_URL
});