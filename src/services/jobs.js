import { baseUrl, Token } from "../Utils/constants";
import CallApi from "../Utils/callApi";

export const fetchActiveJob = (page, parameters) => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = `${baseUrl}/jobdetails/?job_isFlagged=false&job_isFeatured=true&page=${page}&job_name=${parameters?.title}&job_city=${parameters?.location}&job_remote=${parameters?.workType["remote"]}&job_hybrid=${parameters?.workType["hybrid"]}&job_sponsorship=${parameters?.workType["friendly"]}&job_commitment=${parameters?.duration}&job_general_category=${parameters?.department}`;
      const apiOptions = {
        method: "GET",
        headers: {
          Authorization: `Token ${Token}`,
        },
      };
      const response = await CallApi(url, apiOptions);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const fetchTaggedJobs = (page, tag) => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = `${baseUrl}/jobdetails/?job_isFlagged=false&job_isFeatured=true&page=${page}&search=${tag}`;
      const apiOptions = {
        method: "GET",
        headers: {
          Authorization: `Token ${Token}`,
        },
      };
      const response = await CallApi(url, apiOptions);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const fetchFeaturedJobs = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = `${baseUrl}/jobdetails?job_isFeatured=true`;
      const apiOptions = {
        method: "GET",
        headers: {
          Authorization: `Token ${Token}`,
        },
      };
      const response = await CallApi(url, apiOptions);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
