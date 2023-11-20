import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "Akash",
  },
};

const UserSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = {};
    },
  },
});

export const { addUser, removeUser } = UserSlice.actions;

export const userSelector = createSelector(
  [(store) => store.user.user],
  (user) => user
);

export default UserSlice.reducer;
