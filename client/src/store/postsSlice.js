import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const TOKEN = JSON.parse(localStorage.getItem("user"))?.token;
// console.log(TOKEN);

export const getPostsApi = createAsyncThunk("posts/getPostsApi", async () => {
  const response = await axios.get("/posts");
  return response.data;
});

export const getSinglePostApi = createAsyncThunk(
  "posts/getSinglePostApi",
  async (payload) => {
    const response = await axios.get(`/posts/${payload}`);
    return response.data;
  }
);

export const createPostApi = createAsyncThunk(
  "posts/createPostApi",
  async (payload) => {
    const response = await axios.post("/posts", payload.infoPost, {
      headers: {
        "x-access-token": payload.token,
      },
    });
    return response.data;
  }
);

const initialState = {
  postsInfo: [],
  postsLoading: false,
  postsError: false,
  singlePost: null,
  featuredPosts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    // Get all posts
    [getPostsApi.pending]: (state) => {
      state.postsLoading = true;
    },
    [getPostsApi.fulfilled]: (state, action) => {
      state.postsLoading = false;
      state.featuredPosts = action.payload.info.filter(
        (post) => post.featured === true
      );
      state.postsInfo = action.payload.info;
    },
    [getPostsApi.rejected]: (state) => {
      state.postsLoading = false;
      state.postsError = true;
    },
    // Get a single post
    [getSinglePostApi.pending]: (state) => {
      state.postsLoading = true;
    },
    [getSinglePostApi.fulfilled]: (state, action) => {
      state.postsLoading = false;
      state.singlePost = action.payload.info;
    },
    [getSinglePostApi.rejected]: (state) => {
      state.postsLoading = false;
      state.postsError = true;
    },
    // Create post
    [createPostApi.pending]: (state) => {
      state.postsLoading = true;
    },
    [createPostApi.fulfilled]: (state, action) => {
      state.postsLoading = false;
      state.postsInfo.push(action.payload);
    },
    [createPostApi.rejected]: (state) => {
      state.postsLoading = false;
      state.postsLoading = true;
    },
  },
});

export const selectPostsState = (state) => state.posts;

export default postsSlice.reducer;
