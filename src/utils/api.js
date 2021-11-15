import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_ADDRESS,
  timeout: 5000,
});

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return err.response.data;
  }
);

export const request = {
  get: async (url, params = {}) => {
    try {
      const parsedParams = Object.keys(params)
        .map((k) => ({ k, v: params[k] }))
        .reduce(
          (cur, val, ind) =>
            cur + (ind === 0 ? "?" : "&") + val.k + "=" + val.v,
          ""
        );
      return await instance.get(url + parsedParams, {
        headers: {
          authorization: window.localStorage.getItem("access_token")
            ? `Bearer ${window.localStorage.getItem("access_token")}`
            : "",
        },
      });
    } catch (err) {
      console.error(err);
      return err.response ? err.response.data : err;
    }
  },
  post: async (url, data) => {
    try {
      return await instance.post(url, data, {
        headers: {
          authorization: window.localStorage.getItem("access_token")
            ? `Bearer ${window.localStorage.getItem("access_token")}`
            : "",
        },
      });
    } catch (err) {
      console.error(err);
      return err.response ? err.response.data : err;
    }
  },
  put: async (url, data) => {
    try {
      return await instance.put(url, data, {
        headers: {
          authorization: window.localStorage.getItem("access_token")
            ? `Bearer ${window.localStorage.getItem("access_token")}`
            : "",
        },
      });
    } catch (err) {
      console.error(err);
      return err.response ? err.response.data : err;
    }
  },
  delete: async (url, params = {}) => {
    try {
      const parsedParams = Object.keys(params)
        .map((k) => ({ k, v: params[k] }))
        .reduce(
          (cur, val, ind) =>
            cur + (ind === 0 ? "?" : "&") + val.k + "=" + val.v,
          ""
        );
      return await instance.delete(url + parsedParams, {
        headers: {
          authorization: window.localStorage.getItem("access_token")
            ? `Bearer ${window.localStorage.getItem("access_token")}`
            : "",
        },
      });
    } catch (err) {
      console.error(err);
      return err.response ? err.response.data : err;
    }
  },
};

export const check = async () => {
  return await request.get('/');
}