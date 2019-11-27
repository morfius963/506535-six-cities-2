import axios from "axios";

const DEFAULT_TIMEOUT = 5000;

const ErrorCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400
};

const createAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: DEFAULT_TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === ErrorCode.UNAUTHORIZED) {
      localStorage.clear();
      onLoginFail();
    } else if (err.response.status === ErrorCode.BAD_REQUEST) {
      throw new Error(`Incorrect data. Please, enter valid email address`);
    }

    return;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
