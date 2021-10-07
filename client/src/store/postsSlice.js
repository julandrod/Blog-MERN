import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPostsApi = createAsyncThunk(
  "posts/getPostsApi",
  async (payload) => {
    let response;
    if (payload) {
      response = await axios.get(`/posts${payload.search}`);
    } else {
      response = await axios.get(`/posts`);
    }
    return response.data;
  }
);

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

export const deletePostApi = createAsyncThunk(
  "posts/deletePostApi",
  async (payload) => {
    const response = await axios.delete(`/posts/${payload.id}`, {
      headers: {
        "x-access-token": payload.token,
      },
    });
    if (response.status === 200) return { id: payload.id };
  }
);

export const updatePostApi = createAsyncThunk(
  "posts/updatePostApi",
  async (payload) => {
    console.log("photo: ", payload.infoPost);
    const response = await axios.put(`/posts/${payload.id}`, payload.infoPost, {
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
    // Delete post
    [deletePostApi.pending]: (state) => {
      state.postsLoading = true;
    },
    [deletePostApi.fulfilled]: (state, action) => {
      state.postsLoading = false;
      state.postsInfo.splice(
        state.postsInfo.findIndex((item) => item._id === action.payload.id),
        1
      );
    },
    [deletePostApi.rejected]: (state) => {
      state.postsLoading = false;
      state.postsLoading = true;
    },
    // Delete post
    [updatePostApi.pending]: (state) => {
      state.postsLoading = true;
    },
    [updatePostApi.fulfilled]: (state, action) => {
      state.postsLoading = false;
      // state.postsInfo.splice(
      //   state.postsInfo.findIndex((item) => item._id === action.payload.id),
      //   1
      // );
      console.log("update redux: ", action.payload);
    },
    [updatePostApi.rejected]: (state) => {
      state.postsLoading = false;
      state.postsLoading = true;
    },
  },
});

export const selectPostsState = (state) => state.posts;

export default postsSlice.reducer;
