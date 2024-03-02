// import axios from "axios";

const CallApi = async (url, config) => {
  let apiResponse = {};

  await fetch(url, config)
    .then(async (res) => {
      const resp = await res.json();
      return (apiResponse = resp);
    })
    .catch((error) => {
      return (apiResponse = error);
    });

  return apiResponse;
};

export default CallApi;
