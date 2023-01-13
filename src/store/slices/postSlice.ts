import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostState } from "../../types/post";

const initialState: IPostState = {
  posts: [],
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    FetchPosts: (state) => {
      state.loading = true;
      state.error = null;
      state.posts = [];
    },
    fetchPostsSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.error = null;
      state.posts = action.payload;
    },
    fetchPostsError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.posts = [];
    },
    addPost: (state) => {
      state.loading = true;
      state.error = null;
    },
    addPostSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    addPostError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  FetchPosts,
  fetchPostsSuccess,
  fetchPostsError,
  addPost,
  addPostSuccess,
  addPostError,
} = postSlice.actions;

export default postSlice.reducer;
