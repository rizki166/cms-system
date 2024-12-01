import axios from "axios";
import API from "..";
import { ILogin, IRegister, IApiResponse, userform } from "../../../types/app";

export const loginApi = async (body: ILogin): Promise<IApiResponse> => {
  return await API.post("/login", body);
};
export const RegisterApi = async (body: IRegister): Promise<IApiResponse> => {
  return await API.post("/register", body);
};

export const getUsers = async () => {
  return await API.get("/users");
};
export const getDelayedUsers = async () => {
  return await API.get("/users?delay=3");
};
export const createUser = async (body: userform) => {
  return await API.post("/usersss", body);
};
export const getUser = async (id: number) => {
  return await API.get(`/users/${id}`);
};

export const updateUser = async (id: number, body: userform) => {
  return await API.put(`/users/${id}`, body);
};

export const deleteUser = async (id: number) => {
  return await axios.delete(`https://reqres.in/api/users/${id}`);
};
