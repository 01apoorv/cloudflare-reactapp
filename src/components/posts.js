import React, { useEffect, useState } from "react";

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
            <em>Published {new Date(post.published_at/1).toLocaleString()} by {post.username}</em>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
