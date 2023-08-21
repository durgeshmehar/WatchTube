
// https://youtube-v31.p.rapidapi.com/search?part=snippet&q=Coding&maxResults=50


import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
     maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPIDKEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi  = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
