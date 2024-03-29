import { AnimatePresence } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
      description: "varazdin",
      contactInfo: {
        address: "Miroslava Krleže 1/1, 42000 Varaždin",
        email: "varazdin@pozgaj.com",
        phone: "+385 042-210-555",
      },
      workingHours: {
        monday: "9:00 - 17:00",
        tuesday: "9:00 - 17:00",
        wednesday: "9:00 - 17:00",
        thursday: "9:00 - 17:00",
        friday: "9:00 - 17:00",
        saturday: "po dogovoru",
      },
      googleMaps: "https://goo.gl/maps/bocx2nCmG2TcT7jFA",
      googleMapsLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.608845719314!2d16.33428111577399!3d46.29774458545724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4768ab85106ecb87%3A0x1aec5ba3e0166be7!2sPO%C5%BDGAJ%20Grupa!5e0!3m2!1sen!2shr!4v1667309900302!5m2!1sen!2shr",
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
      description: "zagreb",
      contactInfo: {
        address: "Buzinski prilaz 36, 10 010 Zagreb (Buzin)",
        email: "zagreb@pozgaj.com",
        phone: "+385 01-660-8843",
      },
      workingHours: {
        monday: "9:00 - 19:00",
        tuesday: "9:00 - 19:00",
        wednesday: "9:00 - 19:00",
        thursday: "9:00 - 19:00",
        friday: "9:00 - 19:00",
        saturday: "9:00 - 13:00",
      },
      googleMaps: "https://goo.gl/maps/p8RKTzZC2YhePwPQ9",
      googleMapsLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.288822899135!2d15.995049615760072!3d45.74535542265931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d58973f415f3%3A0xac6045f06d3a4bd2!2sPo%C5%BEgaj%20Grupa%20-%20prodajni%20salon!5e0!3m2!1sen!2shr!4v1667307863690!5m2!1sen!2shr",
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
      description: "split",
      contactInfo: {
        address: "Poljička cesta 71, 21 000 Split",
        email: "split@pozgaj.com",
        phone: "+385 021-656-530",
      },
      workingHours: {
        monday: "8:00 - 19:00",
        tuesday: "8:00 - 19:00",
        wednesday: "8:00 - 19:00",
        thursday: "8:00 - 19:00",
        friday: "8:00 - 19:00",
        saturday: "8:00 - 12:30",
      },
      googleMaps: "https://goo.gl/maps/dTEhbXCghMpSuYGB9",
      googleMapsLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.586926381489!2d16.47831191570543!3d43.51095206963502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355f4e1a282843%3A0x60960a6a7ab2b933!2sPo%C5%BEgaj%20Grupa%20-%20prodajni%20salon!5e0!3m2!1sen!2shr!4v1667310190956!5m2!1sen!2shr",
    },
  },
  {
    image: "osijek-location.jpg",
    cityName: "Osijek",
    address: "section.locations.tag",
    href: "https://goo.gl/maps/DyaoKQmL34nuvJ8B7",
    cityPosition: "left",
    tagPosition: "right",
    locationInfo: {
      image: "osijek-location.jpg",
      title: "osijek",
      description: "osijek",
      contactInfo: {
        address: "Josipa Jurja Strossmayera 217, 31000 Osijek",
        email: "osijek@pozgaj.com",
        phone: "+385 031-544-030",
      },
      workingHours: {
        monday: "10:00 - 18:00",
        tuesday: "10:00 - 18:00",
        wednesday: "10:00 - 18:00",
        thursday: "10:00 - 18:00",
        friday: "10:00 - 18:00",
      },
      googleMaps: "https://goo.gl/maps/p6Dd4L3JjGZK9DU16",
      googleMapsLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.294196174025!2d18.648890715755517!3d45.564522134764395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce716a0c72373%3A0x1b7c2ab04848344b!2sPo%C5%BEgaj%20Grupa%20-%20prodajni%20salon!5e0!3m2!1sen!2shr!4v1667310530171!5m2!1sen!2shr",
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
      <div className="flex flex-col space-y-4  p-8 text-left md:text-left">
        <p className="paragraph p__responsive text-justify">
          {t("section-header.description.first-part")}
        </p>
        <p className="paragraph p__responsive text-justify">
          {t("section-header.description.second-part")}
        </p>
        <p className="paragraph p__responsive text-justify">
          {t("section-header.description.third-part")}
        </p>
      </div>
      <div className="mt-4 flex flex-col space-y-4 bg-white p-8 text-left md:mt-12 md:bg-white md:text-center">
        <h2 className="h2__responsive font-semibold uppercase">
          {t("section.locations.heading")}
        </h2>
        <p className="paragraph p__responsive">
          {t("section.locations.description")}
        </p>
        <div></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
        {locations.map((location, index) => (
          <div className="" key={index}>
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
      </div>
      <div className="flex flex-col space-y-4 bg-primary-yellow p-8 text-left md:text-left">
        <h2 className="h2__responsive font-semibold uppercase">
          {t("section.our-motivation.heading")}
        </h2>
        <p className="paragraph p__responsive text-justify">
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
