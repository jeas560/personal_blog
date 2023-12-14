import { gql } from "@apollo/client";

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

export default ALL_POSTS;
