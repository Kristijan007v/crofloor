import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ButtonDefault from "../components/Buttons/ButtonDefault";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import FormField from "../components/FormField/FormField";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Skeleton from "../components/Skeleton/Skeleton";
import nextI18NextConfig from "../next-i18next.config.js";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "menu",
        "heroSection",
        "cookieBanner",
        "footer",
        "contactUs",
      ])),
      nextI18NextConfig,
    },
  };
}

export default function ContactUs() {
  const { t } = useTranslation(["contactUs", "common"]);

  return (
    <Skeleton
      title="Contact us"
      metaDescription="Contact Požgaj Group."
      navigation={true}
    >
      <ErrorBoundary moduleName="SectionHeader">
        <SectionHeader
          title={t("section-header.title")}
          image="contact-us.jpg"
          alt={t("section-header.image.alt")}
        />
      </ErrorBoundary>

      <div className="flex flex-col space-y-8">
        <form
          className="flex flex-col bg-primary-yellow p-4"
          method="POST"
          action="https://getform.io/f/bca9d5f9-ce66-41be-b858-03656b93a86d"
        >
          <FormField
            label={t("form.name")}
            type="text"
            name="name"
            id="name"
            htmlFor="name"
          />
          <FormField
            label={t("form.email")}
            htmlFor="email"
            type="text"
            name="email"
            id="email"
          />
          <FormField
            label={t("form.message")}
            htmlFor="message"
            type="textarea"
            name="message"
            id="message"
          />
          <span className="flex items-center space-x-4 p-4">
            <label className="font-medium" htmlFor="terms">
              {t("form.terms")}
            </label>
            <input type={"checkbox"} name={"terms"} id={"terms"} required />
          </span>
          {/* <ButtonDefault
            text={t("form.submit")}
            ariaLabel={t("form.submit")}
            style="mt-4"
          /> */}
          <button className="btn__basic bg-black text-white" type={"submit"}>
            {t("form.submit")}
          </button>
        </form>
        <div className="m-4 rounded-2xl border border-black">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.4923100866913!2d16.17125381574605!3d45.88146601352417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476676c82e1c57a5%3A0x16294928bda8e9b6!2sBOHOR%20d.o.o.!5e0!3m2!1sen!2shr!4v1651139897150!5m2!1sen!2shr"
            className="rounded-2xl"
            width={"100%"}
            height={"300"}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Contact and address info */}
        <div className="items-left m-6 flex flex-col justify-center space-y-2 pb-8">
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
        </div>
      </div>
    </Skeleton>
  );
}
