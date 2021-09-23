import axios from "axios";
import { TOKEN_CYBERSOFT } from "../utils/settings";

export const request = ({ method, url, data, params }) => {
  const variables = {
    method,
    url,
    data,
    params,
    headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
    },
  };

  const token = localStorage.getItem("t");

  if (token) {
    variables.headers = {
      ...variables.headers,
      Authorization: "Bearer " + token,
    };
  }

  return axios(variables);
};
