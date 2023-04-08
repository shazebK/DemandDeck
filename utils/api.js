import axios from "axios";

export const getUserData = async () => {
  const { data } = await axios.get("/api/auth/profile");
  return data;
};

export const getPollsData = async () => {
  const { data } = await axios.get("/api/demand");
  return data;
};

export const editUserData = async (payload) => {
  return await axios.put("/api/auth/profile", payload);
};

export const voteHandler = async (payload) => {
  const { id, response } = payload;
  return await axios.post(`/api/demand/${id}/response`, {
    response,
  });
};
