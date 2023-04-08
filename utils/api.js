import axios from "axios";

export const getUserData = async () => {
  const { data } = await axios.get("/api/auth/profile");
  return data;
};

export const editUserData = async (payload) => {
  await axios.put("/api/auth/profile", payload);
};
