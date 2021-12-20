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

  const borderStyle = {
    height: '1px',
    borderWidth: '0',
    color: 'black',
    backgroundColor: 'black'
  };

  function like(id, val) {
    fetch("https://hiringproj.01apoorv719.workers.dev/like",
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({id, val})
    });
    window.location.reload(true);
  }

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
            Likes: {post.likes} <button onClick={() => like(post.published_at, 1)}>Like</button> <button onClick={() => like(post.published_at, -1)}>Dislike</button>
          </p>
          <hr style={borderStyle}></hr>     
        </div>
      ))}
    </div>
  );
};

export default Posts;
