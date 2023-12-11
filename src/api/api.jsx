import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://reddit-backend-client.onrender.com/api/",
});

export const getAllArticles = () => {
  return ncNewsApi.get("/articles").then(({ data }) => {
    return data;
  });
};

