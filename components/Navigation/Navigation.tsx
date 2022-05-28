import { AnimatePresence } from "framer-motion";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import MenuIcon from "../Icons/MenuIcon";
import WorldIcon from "../Icons/WorldIcon";
import MobileMenu from "../MobileMenu/MobileMenu";

interface Props {
  style?: string;
}

export default function Navigation({ style }: Props) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toogleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const { t } = useTranslation("menu");

  const [language, setLanguage] = useLocalStorage("language", "en");

  const [languageSwitch, setLanguageSwitch] = useState(false);

  //Change Langugae logic
  const router = useRouter();

  const locale = router.locale;

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
      <ul className="md: hidden items-center md:flex md:space-x-6">
        <div className="flex space-x-6">
          <li>
            <Link href="/products">
              <a className="link__menu__desktop">{t("desktop.products")}</a>
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              <a className="link__menu__desktop">{t("desktop.contact")}</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="link__menu__desktop">{t("desktop.blog")}</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="link__menu__desktop">{t("desktop.about")}</a>
            </Link>
          </li>
        </div>
        <div className="hidden rounded-full bg-primary-bg pt-2 pb-2 pr-6 pl-6 md:block">
          <span className="flex items-center justify-center space-x-3">
            <WorldIcon />
            <select
              onChange={handleLocaleChange}
              value={router.locale}
              className="bg-transparent"
            >
              <option
                className="rounded-2xl bg-gray-100 p-6 text-center text-lg font-semibold"
                value="en"
              >
                {locale === "hr" ? "English" : "Engleski"}
              </option>
              <option
                className="rounded-2xl bg-gray-100 p-6 text-center text-lg font-semibold"
                value="hr"
              >
                {locale === "hr" ? "Croatian" : "Hrvatski"}
              </option>
            </select>
          </span>
        </div>
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
