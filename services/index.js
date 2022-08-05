// import { post, posts } from "../constants/dummy";
import Get from "./Get";
import Post from "./Post";
import Delete from "./Delete";
import Put from "./Put";

const convertToQueryStr = (query) => {
  let result = "";
  for (const key in query) {
    result += `&${key}=${query[key]}`;
  }
  return result.replace("&", "?");
};
// GET

// POST

const getShortLink = (data) => Post("shopees/shortlink", data);
// const removebg = (data) => Post("removebg", data);

// PUT

// DELETE

const API = {
  getShortLink,
};

export default API;
