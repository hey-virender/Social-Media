import Post from "./Post";
import { useContext } from "react";
import { PostList } from "../store/post-list.store";
const Postlist = () => {
  const { postList } = useContext(PostList);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default Postlist;
