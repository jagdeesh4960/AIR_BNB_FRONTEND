import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3000/api",
  baseURL:process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

export default instance;
