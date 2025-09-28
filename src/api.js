import axios from "axios";
import { parseRSS } from "./parser.js";

export const fetchRSS = (url) => {
  const encodedURL = encodeURIComponent(url);
  const proxyURL = `https://api.allorigins.win/get?url=${encodedURL}&disableCache=true`;

  return axios
    .get(proxyURL)
    .then((response) => {
      const data = response.data.contents;
      return parseRSS(data);
    });
};
