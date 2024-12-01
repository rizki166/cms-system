import API from "..";
import { IResource } from "../../../types/app";

export const getResources = async () => {
  return await API.get("/unknown");
};
export const getResource = async (id: number) => {
  return await API.get(`/unknown/${id}`);
};

export const deleteResource = async (id: number) => {
  return await API.delete(`/resource/${id}`);
};

export const updateResource = async (id: number, body: IResource) => {
  return await API.put(`/resource/${id}`, body);
};

export const createResource = async (body: IResource) => {
  return await API.post("/unknown", body);
};
