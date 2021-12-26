import React, { useEffect, useState } from "react";
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  
  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "https://hiringproj.01apoorv719.workers.dev/posts"
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    };
    getPosts();
  }, [refreshFlag]);

  const like = async (id, val) => {
   await fetch("https://hiringproj.01apoorv719.workers.dev/like",
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({id, val})
    });
    setRefreshFlag(!refreshFlag);
  }

  return (
    <div style={{padding: "25px"}}>
      <h2>Posts</h2>
      <div style={{marginBottom: "15px"}}>
        <a href="/post.html">Make a post</a>
      </div>
      {posts.map((post) => (
        <div key={post.published_at} className="card border border-primary" style={{marginBottom: "25px"}}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Posted {new Date(post.published_at/1).toLocaleString()} by {post.username}</h6>
            <p className="card-text">{post.content}</p>
            <button className="btn btn-outline btn-sm" onClick={() => like(post.published_at, "l")}><i className="fa fa-thumbs-up"/>: {post.likes}</button>
            <button className="btn btn-outline btn-sm" onClick={() => like(post.published_at, "d")}><i className="fa fa-thumbs-down"/>: {post.dislikes}</button>
          </div>     
        </div>
      ))}
    </div>
  );
};

export default App;
