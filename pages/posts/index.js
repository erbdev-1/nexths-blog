import AllPosts from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
