import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3005",
});

export const github = axios.create({
  baseURL: "https://api.github.com/users/Henriquesoto92",
});
