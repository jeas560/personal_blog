import "./App.css";

import React from "react";
import { useQuery, gql } from "@apollo/client";

const ALL_POSTS = gql`
  {
    allPosts {
      author {
        user {
          username
        }
      }
      body
      id
      title
      subtitle
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(ALL_POSTS);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div>
      <h1>Postagens</h1>
      <ul>
        {data.allPosts.map((post) => (
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
