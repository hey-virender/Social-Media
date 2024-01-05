import Post from "./Post";
import { useContext } from "react";
import { PostList } from "../store/post-list.store";
import WelcomeMessage from "./WelcomeMessage";
const Postlist = () => {
  const { postList, addInitialPost } = useContext(PostList);
  const handlePostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handlePostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default Postlist;
