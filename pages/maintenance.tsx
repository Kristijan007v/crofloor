import React from "react";
import ButtonDefault from "../components/Buttons/ButtonDefault";
import Skeleton from "../components/Skeleton/Skeleton";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";
import { useTranslation } from "next-i18next";
import HammerIcon from "../components/Icons/HammerIcon";
import MailIcon from "../components/Icons/MailIcon";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["maintenance"])),
      nextI18NextConfig,
    },
  };
}

export default function Maintenance() {
  const { t } = useTranslation("maintenance");

  return (
    <div className="m-6 flex h-screen flex-col items-center justify-center space-y-4 text-center">
      <HammerIcon />
      <p className="h2">Under construction</p>
      <p className="paragraph">
        This page is under a scheduled maintaince, if you have any questions
        feel free to contact us.
      </p>
      <button
        className="flex space-x-4 rounded-xl bg-black pt-3 pb-3 pr-8 pl-8"
        onClick={() => {
          window.location.href = "mailto:pozgaj@pozgaj.com";
        }}
      >
        <a className="font-medium text-white">Contact us</a>
        <MailIcon />
      </button>
    </div>
  );
}
