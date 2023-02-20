import axios from "axios";

const baseApi = process.env.BASE_URL;

const instance = axios.create({
  baseURL: baseApi,
});

export default instance;
