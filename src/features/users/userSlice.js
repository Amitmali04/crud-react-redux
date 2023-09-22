import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // { id: "1", name: "Amit Mali", email: "amit@gmail.com" },
  // { id: "2", name: "Ram", email: "ram@gmail.com" },
  // { id: "3", name: "Radha", email: "radha@gmail.com" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const exitingUser = state.find((user) => user.id === id);

      if (exitingUser) {
        exitingUser.name = name;
        exitingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const exitingUser = state.find((user) => user.id === id);
      if (exitingUser) {
        return state.filter((user) => user.id !== id);
      }
    }
  },
});
export const { addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
