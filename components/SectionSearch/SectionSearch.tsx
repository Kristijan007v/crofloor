import React from "react";
import SearchIcon from "../Icons/SearchIcon";

interface Props {
  searchPlaceholder: string;
}

export default function SectionSearch({ searchPlaceholder }: Props) {
  return (
    <div className="sticky top-0 left-0 right-0 z-30 bg-white p-4">
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
