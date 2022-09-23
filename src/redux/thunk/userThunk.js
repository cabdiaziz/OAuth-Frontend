import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "user/createUser",
  //? auth user token and user data.
  async ({ user }) => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}user/signup`,
        { user }, //* user data here & pick up any data you want.
        {
          headers, //* token and type of data like application/json.
        }
      );
      return res;
    } catch (err) {
      return err.message;
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ authToken }) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken,
      };
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}user/login`,
        {}, //* user data here
        {
          headers, //* token and type of data like application/json.
        }
      );
      return res;
    } catch (e) {
      return e.response.status;
    }
  }
);
