// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

const postUrl = "https://jsonplaceholder.typicode.com/posts/";

// eslint-disable-next-line import/prefer-default-export
export const loginApi = async (inputs) => {
  const request = await axios.post(postUrl, inputs);
  return request;
};
