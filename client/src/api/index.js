import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
console.log("baseURL:", baseURL);
const url = `${baseURL}/posts`;

console.log("url:", url);

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
