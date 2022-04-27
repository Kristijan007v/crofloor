import React, { Children, useContext } from "react";
import Overlay from "../Overlay/Overlay";
import Link from "next/link";
import CloseIcon from "../Icons/CloseIcon";
import WorldIcon from "../Icons/WorldIcon";

interface Props {
  closeMenu: () => void;
}

export default function MobileMenu({ closeMenu }: Props) {
  return (
    <Overlay type="primary">
      <div className="flex flex-col">
        <ul className="flex flex-col space-y-3 p-8">
          <li>
            <Link href="/">
              <a className="link__menu">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="link__menu">About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="link__menu">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="link__menu">Contact</a>
            </Link>
          </li>
        </ul>
        <div className="flex items-center justify-between p-8">
          <CloseIcon onclick={closeMenu} />
          {/* Language switcher */}
          <div className=" flex items-center justify-between space-x-6 rounded-full border-2 border-black bg-gray-300 pt-1 pl-6 pr-6 pb-1">
            <WorldIcon />
            <p className="text-lg font-medium">English</p>
          </div>
        </div>
      </div>
    </Overlay>
  );
}
