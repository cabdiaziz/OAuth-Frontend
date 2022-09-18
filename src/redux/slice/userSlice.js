import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "../thunk/userThunk";

//* login slice & signup slice [x]

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  token: null,
  user: {},
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [createUser.pending]: (state) => {
      state.isLoading = true;
    },
    [createUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.token = payload.data.authorization;
      state.user = payload.data.user;
    },
    [createUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.token = null;
      state.user = initialState.user; //* equal to  null value.
      state.error = payload.error.message;
    },
  },
});

export default userSlice.reducer;
