import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://reddit-backend-client.onrender.com/api/",
});

export const getAllArticles = (topic, sort_by,order) => {
  return ncNewsApi
    .get("/articles", {
      params: {
        topic,
        sort_by,
        order
      },
    })
    .then(({ data }) => {
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

export const getAuthorByUsername = (username) => {
  return ncNewsApi.get(`/users/${username}`).then(({ data }) => {
    return data;
  });
};

export const getTopics = () => {
  return ncNewsApi.get("/topics").then(({ data }) => {
    return data;
  });
};

export const deleteCommentById = (comment_id) => {
  return ncNewsApi.delete(`comments/${comment_id}`);
};
