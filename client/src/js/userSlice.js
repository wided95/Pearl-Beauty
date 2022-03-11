import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const register = createAsyncThunk("user/register", async (user) => {
  try {
    const result = axios.post("http://localhost:5000/user/register", user);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const login = createAsyncThunk("user/login", async (user) => {
  try {
    const result = axios.post("http://localhost:5000/user/login", user);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const current = createAsyncThunk("user/current", async () => {
  try {
    const result = axios.get("http://localhost:5000/user/current", {
      headers: { Authorization: localStorage.getItem("token") },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const getall = createAsyncThunk("user/get", async () => {
  try {
    const result = axios.get("http://localhost:5000/user/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const updateuser = createAsyncThunk(
  "user/update",
  async ({ id, users }) => {
    try {
      const result = axios.put(`http://localhost:5000/user/${id}`, users);
      console.log(users);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  user: null,
  status: null,
  users: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("token");
      localStorage.removeItem("admin");
      localStorage.removeItem("shippinginfo");
      localStorage.removeItem("cartItems");
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.status = "pending";
    },
    [register.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload.data.newUserToken;
    },
    [register.rejected]: (state) => {
      state.status = "rejected";
    },
    [getall.pending]: (state) => {
      state.status = "pending";
    },
    [getall.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.users = action.payload.data.users;
    },
    [getall.rejected]: (state) => {
      state.status = "rejected";
    },
    [login.pending]: (state) => {
      state.status = "pending";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload.data.user;
      localStorage.setItem("token", action.payload.data.token);
      localStorage.setItem("admin", action.payload.data.user.isAdmin);
    },
    [login.rejected]: (state) => {
      state.status = "rejected";
    },
    [current.pending]: (state) => {
      state.status = "pending";
    },
    [current.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload.data.user;
    },
    [current.rejected]: (state) => {
      state.status = "rejected";
    },
    [updateuser.pending]: (state) => {
      state.status = "pending";
    },
    [updateuser.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [updateuser.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});
// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
