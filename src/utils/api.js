// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export default axios.create({ baseURL });
