import axios from "axios";

const baseURL = "https://api.coingecko.com/api/v3";

const instance = axios.create({
  baseURL,
})

export default instance;