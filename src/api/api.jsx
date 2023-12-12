import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://reddit-backend-client.onrender.com/api/",
});

export const getAllArticles = () => {
  return ncNewsApi.get("/articles").then(({ data }) => {
    data.articles.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
    return data;
  });
};

export const getArticleById = (id) => {
  return ncNewsApi.get(`/articles/${id}`).then(({ data }) => {
    return data;
  });
};
