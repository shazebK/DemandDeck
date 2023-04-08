import axios from "axios";

export const getUserData = async () => {
  const { data } = await axios.get("/api/auth/profile");
  return data;
};
