import React, { Children, useContext, useState } from "react";
import Overlay from "../Overlay/Overlay";
import Link from "next/link";
import CloseIcon from "../Icons/CloseIcon";
import WorldIcon from "../Icons/WorldIcon";
import motion from "framer-motion";
import ArrowDown from "../Icons/ArrowDown";

interface Props {
  closeMenu: () => void;
}

export default function MobileMenu({ closeMenu }: Props) {
  const [languageSwitch, setLanguageSwitch] = useState(false);

  const toogleLanguageSwitch = () => {
    setLanguageSwitch(!languageSwitch);
  };

  return (
    <Overlay type="primary">
      <div className="flex flex-col" onClick={toogleLanguageSwitch}>
        <ul className="flex flex-col space-y-3 p-8">
          <li className="flex items-center justify-between">
            <Link href="/products">
              <a className="link__menu">Products</a>
            </Link>
            <ArrowDown />
          </li>
          <li>
            <Link href="/contact">
              <a className="link__menu">Contact us</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="link__menu">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="link__menu">About</a>
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-between p-8">
          <CloseIcon onclick={closeMenu} />
          {/* Language switcher */}
          <div className=" flex items-center justify-between space-x-6 rounded-full border-2 border-black bg-primary-gray pt-1 pl-6 pr-6 pb-1">
            <WorldIcon />
            <p className="text-lg font-medium" onClick={toogleLanguageSwitch}>
              English
            </p>
          </div>
        </div>

        {/* Choose lanugage Popup */}
        {languageSwitch && (
          <div className="fixed bottom-0 flex w-full flex-col space-y-4 bg-primary-gray p-6">
            <p className="text-center text-2xl font-semibold">
              Choose Language
            </p>
            <p className="rounded-2xl bg-gray-100 p-2 text-center text-lg font-medium">
              Croatian
            </p>
            <p className="rounded-2xl bg-gray-100 p-2 text-center text-lg font-medium">
              German
            </p>
            <div className="flex items-center justify-between p-4">
              <p className="text-xl font-semibold">Current:</p>
              <div className=" flex items-center justify-between space-x-6 rounded-full border-2 border-black bg-primary-gray pt-1 pl-6 pr-6 pb-1">
                <WorldIcon />
                <p className="text-lg font-medium">English</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Overlay>
  );
}
