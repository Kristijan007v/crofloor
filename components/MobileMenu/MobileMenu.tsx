import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import dropInBottom from "../../lib/animations/dropInBottom";
import ButtonDefault from "../Buttons/ButtonDefault";
import ArrowDown from "../Icons/ArrowDown";
import ArrowUp from "../Icons/ArrowUp";
import CloseIcon from "../Icons/CloseIcon";
import TagIcon from "../Icons/TagIcon";
import WorldIcon from "../Icons/WorldIcon";
import Overlay from "../Overlay/Overlay";

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

  //Tab switching
  const [activeTab, setActiveTab] = useState("hrast");

  const [products, setProducts] = useState<any>();

  /* Get all the products */
  /* useEffect(() => {
    async function fetchData() {
      getProducts(100)
        .then((res) => {
          setProducts(res);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
    console.log(products);
  }, []); */

  return (
    <Overlay type="primary">
      <div>
        <ul className="flex flex-col space-y-3 p-8 md:hidden">
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
            <div className="flex flex-col space-y-3">
              <div className="flex justify-center space-x-6 rounded-xl border-b bg-primary-bg p-3 text-xl font-medium text-black">
                <button
                  className={`${
                    activeTab === "hrast" && "active__tab__special"
                  }`}
                  onClick={() => setActiveTab("hrast")}
                >
                  Hrast
                </button>
                <button
                  className={`${
                    activeTab === "jasen" && "active__tab__special"
                  }`}
                  onClick={() => setActiveTab("jasen")}
                >
                  Jasen
                </button>
                <button
                  className={`${
                    activeTab === "jela" && "active__tab__special"
                  }`}
                  onClick={() => setActiveTab("jela")}
                >
                  Jela
                </button>
              </div>
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link href="/products">
                    <div className="flex items-center justify-between rounded-xl bg-primary-bg">
                      <a className="ml-3">Morello Ricco</a>
                      <div className="flex items-center space-x-2 p-3">
                        <TagIcon />
                        <span>Hrast</span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <div className="flex items-center justify-between rounded-xl bg-primary-bg">
                      <a className="ml-3">Castro</a>
                      <div className="flex items-center space-x-2 p-3">
                        <TagIcon />
                        <span>Hrast</span>
                      </div>
                    </div>
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
                  {t("language-switcher.heading")}
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
                  {locale === "hr" ? "English" : "Engleski"}
                </option>
                <option
                  className="rounded-2xl bg-gray-100 p-2 text-center text-lg font-semibold"
                  value="hr"
                >
                  {locale === "hr" ? "Croatian" : "Hrvatski"}
                </option>
              </select>
              <ButtonDefault
                text={t("language-switcher.button")}
                onclick={toogleLanguageSwitch}
                ariaLabel={t("language-switcher.button")}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Overlay>
  );
}
