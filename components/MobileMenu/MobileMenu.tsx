import React, { Children } from "react";
import Overlay from "../Overlay/Overlay";
import Link from "next/link";
import CloseIcon from "../Icons/CloseIcon";

export default function MobileMenu() {
  return (
    <>
      <Overlay type="primary">
        <ul>
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
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>

        <CloseIcon />
      </Overlay>
    </>
  );
}
