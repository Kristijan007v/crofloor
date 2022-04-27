import React from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-between p-4">
      <Link href="/">
        <a>CF</a>
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
      <MobileMenu />
    </nav>
  );
}
