import request from "./request";

export const getAddress = async (data) => {
  return await request.post("/oauth/token", data);
};
