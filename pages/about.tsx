import { AnimatePresence } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import DownloadCard from "../components/DownloadCard/DownloadCard";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Gallery from "../components/Gallery/Gallery";
import LocationContainer from "../components/LocationContainer/LocationContainer";
import LocationInfoPopup from "../components/LocationInfoPopup/LocationInfoPopup";
import OverlayNew from "../components/OverlayNew/OverlayNew";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import Skeleton from "../components/Skeleton/Skeleton";
import useLocale from "../hooks/useLocale";
import { Locations } from "../interfaces/model";
import nextI18NextConfig from "../next-i18next.config.js";
import { useLocationStore } from "../store/app/locations.module";

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

const locations: Locations[] = [
  {
    image: "varazdin-location.jpg",
    cityName: "Varaždin",
    address: "section.locations.tag",
    href: "https://goo.gl/maps/DyaoKQmL34nuvJ8B7",
    cityPosition: "left",
    tagPosition: "right",
    locationInfo: {
      image: "varazdin-location.jpg",
      title: "Varaždin",
      description: "Ovo je test",
      contactInfo: {
        address: "Varaždin, Croatia",
        email: "pozgaj@pozgaj,com",
        phone: "+385 99 9999999",
      },
      workingHours: {
        monday: "9:00 - 18:00",
        tuesday: "9:00 - 18:00",
        wednesday: "9:00 - 18:00",
        thursday: "9:00 - 18:00",
        friday: "9:00 - 18:00",
      },
      googleMaps: "https://goo.gl/maps/DyaoKQmL34nuvJ8B7",
      googleMapsLink: "https://goo.gl/maps/DyaoKQmL34nuvJ8B7",
    },
  },
  {
    image: "zagreb-location.jpg",
    cityName: "Zagreb",
    address: "section.locations.tag",
    href: "https://goo.gl/maps/DyaoKQmL34nuvJ8B7",
    cityPosition: "left",
    tagPosition: "right",
    locationInfo: {
      image: "zagreb-location.jpg",
      title: "Zagreb",
      description: "Ovo je test",
      contactInfo: {
        address: "Varaždin, Croatia",
        email: "pozgaj@pozgaj,com",
        phone: "+385 99 9999999",
      },
      workingHours: {
        monday: "9:00 - 18:00",
        tuesday: "9:00 - 18:00",
        wednesday: "9:00 - 18:00",
        thursday: "9:00 - 18:00",
        friday: "9:00 - 18:00",
      },
      googleMaps: "https://goo.gl/maps/DyaoKQmL34nuvJ8B7",
      googleMapsLink: "https://goo.gl/maps/DyaoKQmL34nuvJ8B7",
    },
  },
  {
    image: "split-location.jpg",
    cityName: "Split",
    address: "section.locations.tag",
    href: "https://goo.gl/maps/DyaoKQmL34nuvJ8B7",
    cityPosition: "left",
    tagPosition: "right",
    locationInfo: {
      image: "split-location.jpg",
      title: "Split",
      description: "Ovo je test",
      contactInfo: {
        address: "Varaždin, Croatia",
        email: "pozgaj@pozgaj,com",
        phone: "+385 99 9999999",
      },
      workingHours: {
        monday: "9:00 - 18:00",
        tuesday: "9:00 - 18:00",
        wednesday: "9:00 - 18:00",
        thursday: "9:00 - 18:00",
        friday: "9:00 - 18:00",
      },
      googleMaps: "https://goo.gl/maps/DyaoKQmL34nuvJ8B7",
      googleMapsLink: "https://goo.gl/maps/DyaoKQmL34nuvJ8B7",
    },
  },
];

export default function About() {
  const { t } = useTranslation("about");

  const lang = useLocale();

  // const [locationInfo, setLocationInfo] = useState(false);

  //Location store
  const locationStore = useLocationStore();

  const { showLocationInfo, locationInfo, setLocationInfo } = locationStore;

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
        {locations.map((location, index) => (
          <div className="md:col-span-2 xl:col-span-1" key={index}>
            <LocationContainer
              image={location.image}
              cityName={location.cityName}
              address={location.address}
              href={location.href}
              cityPosition={location.cityPosition}
              tagPosition={location.tagPosition}
              onclick={() => setLocationInfo(location.locationInfo)}
            />
          </div>
        ))}
        {/* <LocationContainer
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
        /> */}
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

      {/* LOCATION INFO */}
      <AnimatePresence>
        {showLocationInfo && (
          <OverlayNew
            position={"right"}
            closeOverlay={() => {
              useLocationStore.setState({ showLocationInfo: false });
            }}
          >
            <LocationInfoPopup locationInfo={locationInfo} />
          </OverlayNew>
        )}
      </AnimatePresence>
    </Skeleton>
  );
}
