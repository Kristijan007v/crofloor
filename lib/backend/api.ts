import client from "./client";
import { gql } from "@apollo/client";

export async function getPosts(perPage: number, page?: number) {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts(first: ${perPage}) {
          nodes {
            content
            date
            id
            slug
            title
            author {
              node {
                id
                name
              }
            }
            tags {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                sourceUrl(size: MEDIUM)
              }
            }
          }
        }
      }
    `,
  });
  return {
    posts: data?.posts.nodes,
  };
}
