import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import React from "react";
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

      <div className="m-auto flex w-full flex-col space-y-8 md:mb-8 md:mt-8 md:flex-row md:space-x-6 lg:mb-16 lg:mt-16 lg:w-5/6 2xl:w-4/6">
        <form
          className="flex flex-grow flex-col bg-primary-yellow p-4 md:bg-white"
          method="POST"
          action="https://getform.io/f/bca9d5f9-ce66-41be-b858-03656b93a86d"
        >
          <FormField
            label={t("form.name")}
            type="text"
            name="name"
            htmlFor="name"
          />
          <FormField
            label={t("form.email")}
            htmlFor="email"
            type="text"
            name="email"
          />
          <FormField
            label={t("form.message")}
            htmlFor="message"
            type="textarea"
            name="message"
          />
          <span className="flex items-center space-x-4 p-4">
            <input type={"checkbox"} name={"terms"} id={"terms"} required />
            <label className="font-medium" htmlFor="terms">
              {t("form.terms")}
            </label>
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
        <div className="flex-grow">
          <h2 className="h3__responsive pt-2 pl-6 pr-6 text-center font-semibold">
            {t("map.title")}
          </h2>
          <div className="m-4 rounded-2xl border border-black">
            <iframe
              title="Map location of Požgaj Group headquarters"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.4923100866913!2d16.17125381574605!3d45.88146601352417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476676c82e1c57a5%3A0x16294928bda8e9b6!2sBOHOR%20d.o.o.!5e0!3m2!1sen!2shr!4v1651139897150!5m2!1sen!2shr"
              className="rounded-2xl"
              width={"100%"}
              height={"300"}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Contact and address info */}
          <div className="items-left m-6 flex flex-col justify-center space-y-3 pb-8">
            <p className="heading__4 h4__responsive">
              {t("contact-details.title")}
            </p>
            <Link
              href={
                "https://www.google.com/maps/place/Dravska+ul.+40,+42231,+Veliki+Bukovec/@46.2869072,16.7099287,17z/data=!4m2!3m1!1s0x4768a18575c182bf:0xfbb76f3cb4d6b219"
              }
            >
              <a className="p__responsive">Dravska 40, 42 231 Veliki Bukovec</a>
            </Link>
            <p className="p__responsive">
              {t("info.phone")}{" "}
              <a href="tel:+385 42 406 600">+385 42 406 600</a>
            </p>
            <p className="p__responsive">
              {t("info.email")}{" "}
              <a href="mailto:pozgaj@pozgaj.com">pozgaj@pozgaj.com</a>
            </p>
            <p className="heading__4 h4__responsive">{t("work-hours.title")}</p>
            <p className="p__responsive">
              {t("work-hours.monday-friday")}: 08h-17h
            </p>
            <p className="p__responsive">{t("work-hours.saturday")}: 08h-17h</p>
          </div>
        </div>
      </div>
    </Skeleton>
  );
}
