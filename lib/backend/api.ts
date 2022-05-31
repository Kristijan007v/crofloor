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
                firstName
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
            posts {
              opis
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
              firstName
              avatar {
                url
              }
            }
          }
          posts {
            opis
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
              firstName
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
          posts {
            opis
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

export async function getProducts(perPage: number) {
  const { data } = await client.query({
    query: gql`
    query Products {
      products(first: ${perPage}) {
        nodes {
          parket {
            kategorija
            detaljniOpis
            opis
            naslovnaslika {
              altText
              sourceUrl
            }
            specifikacije {
              sourceUrl
            }
          }
          tags {
            nodes {
              name
            }
          }
          id
          slug
          title
        }
      }
    }
    `,
  });
  return {
    parket: data?.products.nodes,
  };
}

export async function getAllProductsWithSlug() {
  const { data } = await client.query({
    query: gql`
      query ProductBySlug {
        products {
          nodes {
            slug
          }
        }
      }
    `,
  });
  return {
    products: data?.products.nodes,
  };
}

export async function getProductBySlug(slug: string) {
  const data = await client.query({
    query: gql`
    query Product {
      product(id: "${slug}", idType: SLUG) {
        parket {
          fieldGroupName
          kategorija
          opis
          detaljniOpis
          naslovnaslika {
            altText
            sourceUrl
          }
          pozadinskaSlika
          {
            sourceUrl
          }
          galerija {
            sourceUrl
            altText
          }
          specifikacije {
            mediaItemUrl
          }
        }
        id
        slug
        title
      }
    }
    `,
  });
  console.log(data);
  return {
    data,
  };
}
