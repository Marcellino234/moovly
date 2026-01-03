import axios from "axios";

export const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "5ff73ea6d1049691bee82bfad2d4acc8", 
  },
});