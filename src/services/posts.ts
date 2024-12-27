import { apiRequest } from "./apiRequest";

export const fetchPosts = async () => {
  return apiRequest("https://jsonplaceholder.typicode.com/posts");
};

export const fetchPostById = async (id: number) => {
  return apiRequest(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const fetchPostComments = async (id: number) => {
  return apiRequest(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
};
