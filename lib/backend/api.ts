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

export async function getPostBySlug(slug: string) {
  const data = await client.query({
    query: gql`
      query Post {
        post(id: "${slug}", idType: SLUG) {
          id
          databaseId
          title
          content
          uri
          date
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    `,
  });
  return {
    data,
  };
}

export async function getAllPostsWithSlug() {
  const data = await client.query({
    query: gql`
      query PostbySlug {  {
        posts(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
  });
  return {
    data,
  };
}
