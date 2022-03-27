import axios from "axios";

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://coffeappteste.netlify.app/api"
      : "http://localhost:3000/api",
});
