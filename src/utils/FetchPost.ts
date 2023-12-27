import { Dispatch } from "react";
import { addDoc, getDocs, query } from "firebase/firestore";
import { IPost } from "../types/post";
import { ref } from "../api/firebase.config";
import {
  addPostError,
  addPostSuccess,
  FetchPosts,
  fetchPostsError,
  fetchPostsSuccess,
} from "../store/slices/postSlice";

export const fetchPosts = async (dispatch: Dispatch<any>) => {
  try {
    dispatch(FetchPosts());
    const PostsQuery = query(ref);
    const data = await getDocs(PostsQuery);
    const items = data.docs.map((doc: any) => doc.data());

    await dispatch(fetchPostsSuccess(items));
  } catch (e) {
    dispatch(fetchPostsError("Posts were not loaded"));
  }
};

export const addPost = (post: IPost) => async (dispatch: any) => {
  try {
    dispatch(addPost);
    await addDoc(ref, post);
    dispatch(addPostSuccess());
  } catch (e) {
    dispatch(addPostError("Post were not uploaded"));
  }
};
