import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Post = ({ username }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const resp = await fetch(
        "https://hiringproj.01apoorv719.workers.dev/posts"
      );
      const postResp = await resp.json();
      setPost(postResp.find(o => o.username.toString() === username.toString()));
    };

    getPost();
  }, [username]);

  if (!Object.keys(post).length) return <div />;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>
        <em>Published {new Date(post.published_at/1).toLocaleString()} by {post.username}</em>
      </p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
};

export default Post;
