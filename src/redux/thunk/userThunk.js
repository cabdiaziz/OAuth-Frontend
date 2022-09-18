import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "axios";

export const createUser = createAsyncThunk(
  "user/createUser",
  //* auth user token and user data.
  async ({ authToken, user }) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: authToken,
    };
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/users`,
      { user }, //* user data here
      {
        headers, //* token and type of data like application/json.
      }
    );
    console.log("result of creating user", res);
    return res;
  }
);

export const loginUser = createAsyncThunk("user/loginUser", async () => {});
