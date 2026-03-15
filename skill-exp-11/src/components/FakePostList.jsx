import React, { useEffect, useState } from "react";
import axios from "axios";

function FakePostList() {
  const [posts, setPosts] = useState([]);
  const loadPosts = () => {
    axios.get("https://dummyjson.com/posts")
      .then(res => {
        setPosts(res.data.posts);
      });
  };
  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="container">

      <h2>Fake API Posts</h2>

      <button onClick={loadPosts} className="refresh-btn">
        Refresh
      </button>

      {posts.map(post => (
        <div className="card" key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}

    </div>
  );
}

export default FakePostList;