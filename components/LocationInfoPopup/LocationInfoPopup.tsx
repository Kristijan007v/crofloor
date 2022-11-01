import { useTranslation } from "next-i18next";
import useLocale from "../../hooks/useLocale";
import { useLocationStore } from "../../store/app/locations.module";
import ButtonLink from "../ButtonLink/ButtonLink";
import CloseIcon from "../Icons/CloseIcon";
import Tag from "../Tag/Tag";

// const locations = [
//   {
//     title: "Zagreb",
//     text: "Opis",
//     address: "Zagreb, Croatia",
//     email: "test@pozgaj.com",
//     phone: "+385 99 9999999",
//     workHours: {
//       monday: "9:00 - 18:00",
//       tuesday: "9:00 - 18:00",
//       wednesday: "9:00 - 18:00",
//       thursday: "9:00 - 18:00",
//       friday: "9:00 - 18:00",
//       saturday: "9:00 - 18:00",
//       sunday: "9:00 - 18:00",
//     },
//   },
// ];

export interface LocationInfoPopupProps {
  locationInfo: {
    image: string;
    title: string;
    description: string;
    contactInfo: {
      address: string;
      phone: string;
      email: string;
    };
    workingHours: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday?: string;
    };
    googleMaps: string;
    googleMapsLink: string;
  };
}

export default function LocationInfoPopup({
  locationInfo,
}: LocationInfoPopupProps) {
  const { t } = useTranslation("about");

  const lang = useLocale();

  const {
    title,
    description,
    contactInfo,
    workingHours,
    googleMaps,
    googleMapsLink,
  } = locationInfo;

  return (
    <div className="h-screen w-full overflow-y-auto rounded-sm bg-primary-yellow p-6 md:w-4/6 lg:w-3/6">
      <div className="">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="h2__responsive font-semibold uppercase">
              {t("location-info.heading")} - {title}
            </h2>
            <CloseIcon
              style="hover:cursor-pointer"
              onclick={() => {
                useLocationStore.setState({ showLocationInfo: false });
              }}
            />
          </div>
          <p className="paragraph p__responsive">
            {t(`location-info.descriptions.${description.toLocaleLowerCase()}`)}
          </p>
          <div className="flex flex-col space-y-2">
            <p className="heading__4 h4__responsive">
              {t("location-info.section.contact.title")}
            </p>
            <a href={googleMaps} className="paragraph p__responsive">
              {t("location-info.section.contact.address")}:{" "}
              {contactInfo.address}
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="paragraph p__responsive"
            >
              {t("location-info.section.contact.phone")} {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="paragraph p__responsive"
            >
              {t("location-info.section.contact.email")} {contactInfo.email}
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="heading__4 h4__responsive">
              {t("location-info.section.work-hours.title")}
            </p>
            <p className="paragraph p__responsive">
              {t("location-info.section.work-hours.monday")}:{" "}
              {workingHours.monday}
            </p>
            <p className="paragraph p__responsive">
              {t("location-info.section.work-hours.tuesday")}:{" "}
              {workingHours.tuesday}
            </p>
            <p className="paragraph p__responsive">
              {t("location-info.section.work-hours.wednesday")}:{" "}
              {workingHours.wednesday}
            </p>
            <p className="paragraph p__responsive">
              {t("location-info.section.work-hours.thursday")}:{" "}
              {workingHours.thursday}
            </p>
            <p className="paragraph p__responsive">
              {t("location-info.section.work-hours.friday")}:{" "}
              {workingHours.friday}
            </p>
            {workingHours.saturday && (
              <p className="paragraph p__responsive">
                {t("location-info.section.work-hours.saturday")}:{" "}
                {workingHours.saturday}
              </p>
            )}
          </div>
          <div>
            <iframe
              title="Crofloor store locations"
              src={googleMapsLink}
              className="mb-2 w-full rounded-2xl md:w-5/6"
              width={"100%"}
              height={"300"}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <ButtonLink href={googleMaps}>
              {t("location-info.google-maps")}
            </ButtonLink>
          </div>
          {/* <Tag text="See location on Google Maps" /> */}
        </div>
      </div>
      {/* <Gallery images={images} /> */}
    </div>
  );
}
