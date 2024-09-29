import toast from "react-hot-toast";

const localStorageKey = "user";

const API_URL = "https://v2.api.noroff.dev";
const API_KEY = "866105fc-bb1d-4e8d-9e49-081b3c783a70";

export function fetchWrapper(endpoint, { body, ...customConfig } = {}) {
  const user = window.localStorage.getItem(localStorageKey);
  const token = user ? JSON.parse(user).accessToken : "";

  const headers = {
    "content-type": "application/json",
    "X-Noroff-API-Key": API_KEY,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  return fetch(`${API_URL}/${endpoint}`, config).then(async (response) => {
    if (response.status === 401) {
      window.location.href = "/login";
      localStorage.removeItem("user");
      alert("Unauthorized. Please log in again");
      return;
    }

    if (response.ok) {
      if (response.status === 204) {
        return;
      }

      return await response.json();
    } else {
      const errorMessage = await response.text();
      return Promise.reject(new Error(errorMessage));
    }
  });
}
