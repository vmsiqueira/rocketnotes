import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-98s2.onrender.com"
});