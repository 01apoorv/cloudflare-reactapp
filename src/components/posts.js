import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "https://hiringproj.01apoorv719.workers.dev/posts"
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  const borderStyle = {
    height: '1px',
    "border-width": '0',
    color: 'black',
    "background-color": 'black'
  };

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.username}>
          <h2>
            {post.title}
          </h2>
          <p>{post.content}</p>
          <p>
            <em>Posted {new Date(post.published_at/1).toLocaleString()} by {post.username}</em>
          </p>
          <p>
            Likes: {post.likes} <Link to={`/like/${post.published_at}`}>Like</Link> <Link to={`/dislike/${post.published_at}`}>Dislike</Link>
          </p>
          <hr style={borderStyle}></hr>     
        </div>
      ))}
    </div>
  );
};

export default Posts;
