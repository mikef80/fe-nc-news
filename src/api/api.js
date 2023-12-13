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

export const getCommentsByArticleId = (id) => {
  return ncNewsApi.get(`/articles/${id}/comments`).then(({ data }) => {
    return data;
  });
};

export const updateVotesByArticleId = (id, votes) => {
  return ncNewsApi
    .patch(`/articles/${id}`, { inc_votes: votes })
    .then(({ data }) => {
      return data;
    });
};

export const postCommentByArticleId = (id, comment) => {
  return ncNewsApi
    .post(`/articles/${id}/comments`, {
      username: "tickle122",
      body: comment,
    })
    .then(({ data }) => {
      return data;
    });
};

export const getUserByUsername = (username) => {
  return ncNewsApi.get(`/users/${username}`).then(({ data }) => {
    return data;
  });
};

export const getTopics = () => {
  return ncNewsApi.get("/topics").then(({ data }) => {
    return data;
  });
};
