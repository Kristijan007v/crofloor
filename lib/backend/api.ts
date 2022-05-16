import client from "./client";
import { useLazyQuery, gql } from "@apollo/client";

export async function getPosts(perPage: number, page?: number) {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts(first: ${perPage}) {
          nodes {
            id
            content
            date
            slug
            title
            author {
              node {
                name
                avatar {
                  url
                }
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
                altText
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
          title
          content
          date
          slug
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
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
  const { data } = await client.query({
    query: gql`
      query PostBySlug {
        posts {
          nodes {
            slug
          }
        }
      }
    `,
  });
  return {
    posts: data?.posts.nodes,
  };
}

export async function getPostByCategory(categoryName: string) {
  const { data } = await client.query({
    query: gql`
    query Posts {
      posts(where: {categoryName: "${categoryName}"}) {
        nodes {
          id
          content
          date
          slug
          title
          author {
            node {
              name
              avatar {
                url
              }
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
              altText
            }
          }
        }
      }
    }
    `,
  });
  return {
    featuredPost: data?.posts.nodes,
  };
}
