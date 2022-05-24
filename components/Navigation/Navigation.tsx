import React, { useState, createContext } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import Link from "next/link";
import MenuIcon from "../Icons/MenuIcon";
import { AnimatePresence } from "framer-motion";
import WorldIcon from "../Icons/WorldIcon";
import ButtonDefault from "../Buttons/ButtonDefault";
import { useRouter } from "next/router";
import useLocalStorage from "../../hooks/useLocalStorage";

interface Props {
  style?: string;
}

export default function Navigation({ style }: Props) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toogleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const [language, setLanguage] = useLocalStorage("language", "en");

  const [languageSwitch, setLanguageSwitch] = useState(false);

  //Change Langugae logic
  const router = useRouter();

  const toogleLanguageSwitch = () => {
    setLanguageSwitch(!languageSwitch);
  };

  const handleLocaleChange = (event: any) => {
    const value = event.target.value;
    setLanguage(value);

    router.push(router.route, router.asPath, {
      locale: value,
    });
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
      <div className="hidden rounded-full bg-primary-bg pt-2 pb-2 pr-8 pl-8 md:block">
        <span className="flex items-center justify-center space-x-3">
          <WorldIcon />
          <p>Hrvatski</p>
        </span>
      </div>
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
