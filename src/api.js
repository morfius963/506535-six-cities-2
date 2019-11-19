import axios from "axios";

const createAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFali = (err) => {
    if (err.response.status === 401) {
      onLoginFail();

      return;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFali);

  return api;
};

export default createAPI;
