import { API } from "../api";
import { useMutation, useQuery, UseQueryResult } from "react-query";
import { useForm } from "../../@types";

// export const getDataForm = async <useForm>(): Promise<useForm> => {
//   const resp = await API.get<useForm>("/form");
//   return resp.data;
// };

export const useGetDataForm = () => {
  return useQuery<useForm[]>("getForm", () =>
    API.get<useForm[]>("/form").then((res) => res.data)
  );
};

export const postForm = () => {
  return useMutation((data: useForm) => API.post("/form", data));
};
