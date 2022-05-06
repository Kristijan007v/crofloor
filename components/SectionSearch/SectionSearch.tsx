import React from "react";
import SearchIcon from "../Icons/SearchIcon";
import client from "../../lib/backend/client";
import { gql } from "@apollo/client";

interface Props {
  searchPlaceholder: string;
}

export default function SectionSearch({ searchPlaceholder }: Props) {
  async function search(search: string) {
    const { data } = await client.query({
      query: gql`
        query Posts {
          posts(title: "${search}") {
            nodes {
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
      props: {
        posts: data.posts.nodes,
      },
    };
  }

  return (
    <div className="sticky top-0 left-0 right-0 z-20 border-b bg-white p-4">
      <div className="flex items-center rounded-full bg-primary-yellow pt-2 pb-2 pl-4 pr-4">
        <input
          className="w-full bg-transparent p-1 placeholder-black focus:outline-none"
          type={"search"}
          placeholder={searchPlaceholder}
        />
        <SearchIcon />
      </div>
    </div>
  );
}
