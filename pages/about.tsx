import { AnimatePresence } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import DownloadCard from "../components/DownloadCard/DownloadCard";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Gallery from "../components/Gallery/Gallery";
import CloseIcon from "../components/Icons/CloseIcon";
import LocationContainer from "../components/LocationContainer/LocationContainer";
import OverlayNew from "../components/OverlayNew/OverlayNew";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import Skeleton from "../components/Skeleton/Skeleton";
import useLocale from "../hooks/useLocale";
import nextI18NextConfig from "../next-i18next.config.js";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "menu",
        "cookieBanner",
        "footer",
        "about",
      ])),
      nextI18NextConfig,
    },
  };
}

export default function About() {
  const { t } = useTranslation("about");

  const lang = useLocale();

  const [locationInfo, setLocationInfo] = useState(false);

  const images = [
    {
      original: "/images/factory_1.jpg",
      thumbnail: "/images/factory_1.jpg",
      originalAlt: "Factory image",
      thumbnailAlt: "Factory image",
      originalTitle: "Factory image",
    },
    {
      original: "/images/factory_2.jpg",
      thumbnail: "/images/factory_2.jpg",
      originalAlt: "Factory image",
      thumbnailAlt: "Factory image",
      originalTitle: "Factory image",
    },
    {
      original: "/images/factory_3.jpg",
      thumbnail: "/images/factory_3.jpg",
      originalAlt: "Factory image",
      thumbnailAlt: "Factory image",
      originalTitle: "Factory image",
    },
    {
      original: "/images/factory_5.jpg",
      thumbnail: "/images/factory_5.jpg",
      originalAlt: "Factory image",
      thumbnailAlt: "Factory image",
      originalTitle: "Factory image",
    },
  ];

  const locations = [
    {
      title: "Zagreb",
      text: "Opis",
      address: "Zagreb, Croatia",
      email: "test@pozgaj.com",
      phone: "+385 99 9999999",
      workHours: {
        monday: "9:00 - 18:00",
        tuesday: "9:00 - 18:00",
        wednesday: "9:00 - 18:00",
        thursday: "9:00 - 18:00",
        friday: "9:00 - 18:00",
        saturday: "9:00 - 18:00",
        sunday: "9:00 - 18:00",
      },
    },
  ];

  return (
    <Skeleton
      title="About us"
      metaDescription="Find out everything about Požgaj Group, our locations and what certificates we own."
      navigation={true}
    >
      <ErrorBoundary moduleName="SectionHeader">
        {/* <SectionHeader
          title={t("section-header.title")}
          image="about.jpg"
          alt={t("section-header.image.alt")}
          description={t("section-header.description")}
        /> */}
        <SectionHeading heading={t("section-header.title")} />
      </ErrorBoundary>
      <div className="mt-4 flex flex-col space-y-4 bg-white p-8 text-left md:mt-12 md:bg-white md:text-center">
        <h2 className="h2__responsive font-semibold uppercase">
          {t("section.locations.heading")}
        </h2>
        <p className="paragraph p__responsive">
          {t("section.locations.description")}
        </p>
        <div></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div className="md:col-span-2 xl:col-span-1">
          <LocationContainer
            image="varazdin-location.jpg"
            cityName="Varaždin"
            address={t("section.locations.tag")}
            href="https://goo.gl/maps/DyaoKQmL34nuvJ8B7"
            cityPosition="left"
            tagPosition="right"
            onclick={() => setLocationInfo(true)}
          />
        </div>
        <LocationContainer
          image="zagreb-location.jpg"
          cityName="Zagreb"
          address={t("section.locations.tag")}
          href="https://goo.gl/maps/DyaoKQmL34nuvJ8B7"
          cityPosition="left"
          tagPosition="right"
        />
        <LocationContainer
          image="split-location.jpg"
          cityName="Split"
          address={t("section.locations.tag")}
          href="https://goo.gl/maps/DyaoKQmL34nuvJ8B7"
          cityPosition="left"
          tagPosition="right"
        />
      </div>
      <div className="flex flex-col space-y-2 bg-primary-yellow p-8 text-left md:text-center">
        <h2 className="h2__responsive font-semibold uppercase">
          {t("section.our-motivation.heading")}
        </h2>
        <p className="paragraph p__responsive">
          {t("section.our-motivation.description")}
        </p>
        <p className="p__responsive font-semibold text-gray-600">
          {t("section.our-motivation.ceo")}
        </p>
      </div>
      <div className="m-auto mt-10 w-full md:w-5/6 lg:w-4/6 xl:w-3/6">
        <div className="flex flex-col space-y-2 bg-white p-8">
          <h2 className="h2__responsive text-left font-semibold uppercase md:text-center">
            {t("section.factory.heading")}
          </h2>
        </div>
        <Gallery images={images} />
      </div>
      <div className="m-auto mt-10 flex w-full flex-col space-y-6 bg-white p-8 pb-24 md:w-5/6 lg:w-4/6 lg:pb-32 2xl:w-3/6">
        <h2 className="h2__responsive font-semibold uppercase">
          {t("section.certificate.heading")}
        </h2>
        <div className="w-full md:w-5/6 lg:w-4/6 xl:w-3/6">
          <DownloadCard
            text={lang === "en" ? "Certificates file" : "Datoteka certifikata"}
            downloadURL={`/files/specifications.pdf`}
          />
        </div>
      </div>

      {/* Image info */}
      <AnimatePresence>
        {locationInfo && (
          <OverlayNew
            position={"right"}
            closeOverlay={() => {
              setLocationInfo(false);
            }}
          >
            <div className="h-screen w-full rounded-sm bg-primary-yellow p-6 md:w-4/6 lg:w-3/6">
              <div className="">
                {locations.map((location, index) => (
                  <div key={index} className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="h2__responsive font-semibold uppercase">
                        Lokacija - {location.title}
                      </h2>
                      <CloseIcon
                        style="hover:cursor-pointer"
                        onclick={() => {
                          setLocationInfo(false);
                        }}
                      />
                    </div>
                    <p className="paragraph p__responsive">{location.text}</p>
                    <div>
                      <p className="heading__4 h4__responsive">
                        {t("location-info.section.contact.title")}
                      </p>
                      <p className="paragraph p__responsive">
                        {t("location-info.section.contact.address")} :{" "}
                        {location.address}
                      </p>
                      <p className="paragraph p__responsive">
                        {t("location-info.section.contact.phone")} :{" "}
                        {location.email}
                      </p>
                      <p className="paragraph p__responsive">
                        {t("location-info.section.contact.email")} :{" "}
                        {location.phone}
                      </p>
                    </div>
                    <div>
                      <p className="heading__4 h4__responsive">
                        {t("location-info.section.work-hours.title")}
                      </p>
                      <p className="paragraph p__responsive">
                        {t("location-info.section.work-hours.monday")} :{" "}
                        {location.workHours?.monday}
                      </p>
                      <p className="paragraph p__responsive">
                        {t("location-info.section.work-hours.tuesday")} :{" "}
                        {location.workHours?.tuesday}
                      </p>
                      <p className="paragraph p__responsive">
                        {t("location-info.section.work-hours.wednesday")} :{" "}
                        {location.workHours?.wednesday}
                      </p>
                      <p className="paragraph p__responsive">
                        {t("location-info.section.work-hours.thursday")} :{" "}
                        {location.workHours?.thursday}
                      </p>
                      <p className="paragraph p__responsive">
                        {t("location-info.section.work-hours.friday")} :{" "}
                        {location.workHours?.monday}
                      </p>
                    </div>
                    <iframe
                      title="Crofloor store locations"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.4923100866913!2d16.17125381574605!3d45.88146601352417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476676c82e1c57a5%3A0x16294928bda8e9b6!2sBOHOR%20d.o.o.!5e0!3m2!1sen!2shr!4v1651139897150!5m2!1sen!2shr"
                      className="w-full rounded-2xl md:w-5/6"
                      width={"100%"}
                      height={"300"}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                ))}
              </div>
              {/* <Gallery images={images} /> */}
            </div>
          </OverlayNew>
        )}
      </AnimatePresence>
    </Skeleton>
  );
}
