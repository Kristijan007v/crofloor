import React, { useState, createContext } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import Link from "next/link";
import MenuIcon from "../Icons/MenuIcon";
import { AnimatePresence } from "framer-motion";

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
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {mobileMenu && <MobileMenu closeMenu={toogleMenu} />}
      </AnimatePresence>
    </nav>
  );
}
