import request from "./request";

export const getAddress = async (data) => {
  return await request.post("/oauth/token", data);
};

export const getrepository = async (data) => {
  return await request.post("/api/v5/user/repos", data);
};
