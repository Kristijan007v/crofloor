import React, { useState, createContext } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import Link from "next/link";
import MenuIcon from "../Icons/MenuIcon";
import { AnimatePresence } from "framer-motion";

interface Props {
  style?: string;
}

export default function Navigation({ style }: Props) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toogleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`flex justify-between p-4 ${style}`}>
      <Link href="/">
        <a className="link__logo">CF</a>
      </Link>
      <ul className="hidden space-x-4 md:flex">
        <li>
          <Link href="/products">
            <a className="link__menu__desktop">Products</a>
          </Link>
        </li>
        <li>
          <Link href="/contact-us">
            <a className="link__menu__desktop">Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="link__menu__desktop">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="link__menu__desktop">About</a>
          </Link>
        </li>
      </ul>
      <span className="block md:hidden">
        <MenuIcon onclick={toogleMenu} />
      </span>
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
