import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: number;
  name: string;
};
type TaskList = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};
type InitialState = {
  loading: boolean;
  users: User[];
  tasks: TaskList[];
  error: string;
};
const initialState: InitialState = {
  loading: false,
  users: [],
  tasks:[],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
     .then(response => response.data);
});
export const fetchUserbyId= createAsyncThunk("user/fetchUserbyId", (userId:number) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
    .then(response => response.data);
})
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchUserbyId.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }
    );
     builder.addCase(
      fetchUserbyId.fulfilled,
      (state, action: PayloadAction<TaskList[]>) => {
        state.loading = false;
        state.tasks = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something went wrong";
    });
     builder.addCase(fetchUserbyId.rejected, (state, action) => {
      state.loading = false;
      state.tasks = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default userSlice.reducer;