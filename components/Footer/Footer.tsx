import Link from "next/link";
import React from "react";
import Faq from "../Faq/Faq";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="">
      {/* FAQ */}
      <div className="flex flex-col space-y-4 bg-primary-bg p-6">
        <h3 className="heading__3 text-center">FAQ</h3>
        <Faq
          question="Kako proizvodite parkete?"
          answer="A blockchain is a distributed ledger of information."
        />
        <Faq
          question="Kako provjeravate kvalitetu?"
          answer="A blockchain is a distributed ledger of information."
        />
        <Faq
          question="Tko su vam glavni dobavljači?"
          answer="A blockchain is a distributed ledger of information."
        />
        <Faq
          question="Što je s garancijom za parket?"
          answer="A blockchain is a distributed ledger of information."
        />
      </div>
      <div className="flex flex-col space-y-4 bg-primary-yellow p-6">
        <h4 className="heading__4">{t("newsletter.title")}</h4>
        <div className="flex">
          <input
            className="grow rounded-tl-2xl rounded-bl-2xl border-2 border-black"
            type="text"
            name="email"
            id="email"
          />
          <button className="rounded-tr-2xl rounded-br-2xl bg-black p-2 text-white">
            {t("newsletter.button")}
          </button>
        </div>
        <h4 className="heading__4">Požgaj Group</h4>
        <Link
          href={
            "https://www.google.com/maps/place/Dravska+ul.+40,+42231,+Veliki+Bukovec/@46.2869072,16.7099287,17z/data=!4m2!3m1!1s0x4768a18575c182bf:0xfbb76f3cb4d6b219"
          }
        >
          <a>Dravska 40, 42 231 Veliki Bukovec</a>
        </Link>
        <p>
          {t("info.phone")} <a href="tel:+385 42 406 600">+385 42 406 600</a>
        </p>
        <p>
          {t("info.email")}{" "}
          <a href="mailto:pozgaj@pozgaj.com">pozgaj@pozgaj.com</a>
        </p>
        {/* Social links */}
        <div className="justify-left flex items-center space-x-4">
          <FacebookIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <YoutubeIcon />
        </div>
        <ul className="flex justify-between rounded-2xl bg-primary-gray p-3">
          <li>
            <Link href="/">
              <a>{t("navigation.products")}</a>
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              <a>{t("navigation.contact")}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{t("navigation.blog")}</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>{t("navigation.about")}</a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Footer bottom */}
      <div className="flex flex-col items-center justify-center space-y-2 bg-black p-4">
        <Link href={"/"}>
          <a className="text-lg uppercase text-white">
            {t("footer.privacy-policy")}
          </a>
        </Link>
        <Link href={"/"}>
          <a className="text-lg uppercase text-white">{t("footer.terms")}</a>
        </Link>
        <p className="text-sm text-gray-400">
          © Požgaj Grupa. {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
