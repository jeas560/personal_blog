import "./App.css";

import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import ALL_POSTS from "./querys/index";

function App() {
  const { data, loading, error } = useQuery(ALL_POSTS);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (data) setPosts(data.allPosts);
  }, [data]);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div>
      <h1>Postagens</h1>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <h3>{post.subtitle}</h3>
              <p>{post.body}</p>
              {post.author.user.username}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
