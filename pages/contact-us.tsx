import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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

      <div className="m-auto flex w-full flex-col space-y-8 md:mb-8 md:mt-8 md:flex-row md:space-x-6 lg:mb-16 lg:mt-16 lg:w-5/6 2xl:w-4/6">
        {/* <form
        name="contact" method="POST" data-netlify="true"
        className="flex flex-grow flex-col bg-primary-yellow p-4 md:bg-white"
      > */}
       <form
          className="flex flex-grow flex-col bg-primary-yellow p-4 md:bg-white"
          method="POST"
          action="https://getform.io/f/bca9d5f9-ce66-41be-b858-03656b93a86d"
        > 
          <FormField label={t("form.name")} type="text" />
          <FormField label={t("form.email")} type="text" />
          <FormField label={t("form.message")} type="textarea" />
          <span className="flex items-center space-x-4 p-4">
            <input
              type={"checkbox"}
              className="accent-black"
              name={"terms"}
              id={"terms"}
              required
            />
            <label className="font-medium" htmlFor="terms">
              {t("form.terms")}
            </label>
          </span>

          <ButtonDefault
            text={t("form.submit")}
            ariaLabel="Pošalji kontakt formu"
            icon={"mail"}
          />
        </form>

        <div className="flex-grow">
          <h2 className="h3__responsive pt-2 pl-6 pr-6 text-center font-semibold">
            {t("map.title")}
          </h2>
          <div className="m-4 rounded-2xl border border-black">
            <iframe
              title="Map location of Požgaj Group headquarters"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2757.2081510449625!2d16.706909715773744!3d46.285838786262616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4768a18691ede5fb%3A0xe929edee227d54d9!2sPO%C5%BDGAJ%20Ltd.!5e0!3m2!1sen!2shr!4v1667311460839!5m2!1sen!2shr"
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
            <a
              href="https://goo.gl/maps/tgqN1zZ1owGahwXe8"
              className="p__responsive"
            >
              Dravska 24, Veliki Bukovec, 42 231 Mali Bukovec, Hrvatska
            </a>
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
              {t("work-hours.monday-friday")}: 08:00h-15:00h
            </p>
            <p className="p__responsive">
              {t("work-hours.saturday")}: {t("work-hours.closed")}
            </p>
            <p className="p__responsive">
              {t("work-hours.sunday")}: {t("work-hours.closed")}
            </p>
          </div>
        </div>
      </div>
    </Skeleton>
  );
}
