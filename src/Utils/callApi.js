import axios from "axios";

const CallApi = async (url, config) => {
  let apiResponse = {};

  await axios(url, config)
    .then((res) => (apiResponse = res))
    .catch((error) => (apiResponse = error));

  return apiResponse;
};

export default CallApi;
