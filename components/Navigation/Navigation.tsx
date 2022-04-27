import React, { useState, createContext } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import Link from "next/link";
import MenuIcon from "../Icons/MenuIcon";

export default function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toogleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="flex justify-between p-4">
      <Link href="/">
        <a className="link__logo">CF</a>
      </Link>
      <ul className="hidden space-x-4 md:flex">
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
      <MenuIcon onclick={toogleMenu} />
      {mobileMenu && <MobileMenu closeMenu={toogleMenu} />}
    </nav>
  );
}
