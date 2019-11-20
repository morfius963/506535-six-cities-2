import axios from "axios";

const createAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === 401) {
      onLoginFail();
    } else if (err.response.status === 400) {
      throw new Error(`Incorrect data. Please, enter valid email address`);
    }

    return;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
