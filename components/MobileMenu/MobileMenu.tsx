import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import ArrowDown from "../Icons/ArrowDown";
import ArrowUp from "../Icons/ArrowUp";
import CloseIcon from "../Icons/CloseIcon";
import WorldIcon from "../Icons/WorldIcon";
import Overlay from "../Overlay/Overlay";
import { AnimatePresence, motion } from "framer-motion";
import dropInBottom from "../../lib/animations/dropInBottom";
import useLocalStorage from "../../hooks/useLocalStorage";

interface Props {
  closeMenu: () => void;
}

export default function MobileMenu({ closeMenu }: Props) {
  const { asPath, pathname } = useRouter();

  const [languageSwitch, setLanguageSwitch] = useState(false);

  const [language, setLanguage] = useLocalStorage("language", "en");

  const toogleLanguageSwitch = () => {
    setLanguageSwitch(!languageSwitch);
  };

  const [dropDown, setDropDown] = useState(false);

  const toogleDropdown = () => {
    setDropDown(!dropDown);
  };

  //Change Langugae logic
  const router = useRouter();

  const handleLocaleChange = (event: any) => {
    const value = event.target.value;
    setLanguage(value);

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  //Translations
  const { t } = useTranslation("menu");

  const { locale } = useRouter();

  return (
    <Overlay type="primary">
      <div>
        <ul className="flex flex-col space-y-3 p-8">
          {/* <li>
            <Link href="/">
              <a className={`link__menu ${asPath == "/" && "link__active"}`}>
                {t("home")}
              </a>
            </Link>
          </li> */}
          <li className="flex items-center justify-between">
            <Link href="/products">
              <a
                className={`link__menu ${
                  asPath == "/products" && "link__active"
                }`}
              >
                {t("products")}
              </a>
            </Link>
            {dropDown ? (
              <ArrowUp onclick={toogleDropdown} />
            ) : (
              <ArrowDown onclick={toogleDropdown} />
            )}
          </li>
          {dropDown && (
            <div className="">
              <ul className="flex flex-col space-y-1">
                <li className="flex items-center justify-between rounded-2xl bg-primary-gray p-3">
                  <Link href="/products">
                    <a className="link__product">Hrast</a>
                  </Link>
                </li>
                <li className="flex items-center justify-between rounded-2xl bg-primary-gray p-3">
                  <Link href="/products">
                    <a className="link__product">Hrast</a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <li>
            <Link href="/contact-us">
              <a
                className={`link__menu ${
                  asPath == "/contact-us" && "link__active"
                }`}
              >
                {t("contact")}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a
                className={`link__menu ${asPath == "/blog" && "link__active"}`}
              >
                {t("blog")}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={`link__menu ${asPath == "/about" && "link__active"}`}
              >
                {t("about")}
              </a>
            </Link>
          </li>
        </ul>
        <div className="absolute bottom-0 flex items-center justify-between space-x-20 p-8">
          <CloseIcon onclick={closeMenu} />
          {/* Language switcher */}
          <div
            onClick={toogleLanguageSwitch}
            className="flex items-center justify-between space-x-6 rounded-full border-2 border-black bg-primary-gray pt-1 pl-6 pr-6 pb-1"
          >
            <WorldIcon />
            <p className="text-lg font-medium">
              {locale === "hr" ? "Hrvatski" : "English"}
            </p>
          </div>
        </div>

        {/* Choose lanugage Popup */}
        <AnimatePresence // Disable any initial animations on children that
          // are present when the component is first rendered
          initial={false}
          // Only render one component at a time.
          // The exiting component will finish its exit
          // animation before entering component is rendered
          exitBeforeEnter={true}
          // Fires when all exiting nodes have completed animating out
          onExitComplete={() => null}
        >
          {languageSwitch && (
            <motion.div
              variants={dropInBottom}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed bottom-0 flex w-full flex-col space-y-4 bg-primary-gray p-10"
            >
              <div className="flex items-center justify-center space-x-4">
                <WorldIcon />
                <p className="text-center text-2xl font-semibold">
                  Choose Language
                </p>
              </div>

              <select
                onChange={handleLocaleChange}
                value={router.locale}
                className="rounded-full border-2 border-black bg-primary-gray p-2 font-semibold focus:outline-none"
              >
                <option
                  className="rounded-2xl bg-gray-100 p-2 text-center text-lg font-semibold"
                  value="en"
                >
                  English
                </option>
                <option
                  className="rounded-2xl bg-gray-100 p-2 text-center text-lg font-semibold"
                  value="hr"
                >
                  Croatian
                </option>
              </select>
              {/* <div className="flex items-center justify-between p-4">
              <p className="text-xl font-semibold">Current:</p>
              <div className=" flex items-center justify-between space-x-6 rounded-full border-2 border-black bg-primary-gray pt-1 pl-6 pr-6 pb-1">
                <WorldIcon />
                <p className="text-lg font-medium">
                  {locale === "hr" ? "Hrvatski" : "English"}
                </p>
              </div>
            </div> */}
              <ButtonDefault
                text="Close"
                onclick={toogleLanguageSwitch}
                ariaLabel="Close language menu"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Overlay>
  );
}
