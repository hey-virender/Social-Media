import { Children, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostlistProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, postIitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postIitle,
        body: postBody,
        reactions: reactions,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Learning React",
    body: "Hey everyone I am learing react and created this project using react",
    reactions: 5000,
    userId: "Virender_Chauhan",
    tags: ["Learning", "React", "FrontEndWebDev"],
  },
  {
    id: 2,
    title: "Going to Shimla",
    body: "Hi friends I am going to Shimla",
    reactions: 0,
    userId: "user-5",
    tags: ["vacation", "shimla", "fun"],
  },
  {
    id: 3,
    title: "Just Completed Dimploma",
    body: "completed PGDCA",
    reactions: 7,
    userId: "user-4",
    tags: ["passed", "education", "knowledge"],
  },
];
export default PostlistProvider;
