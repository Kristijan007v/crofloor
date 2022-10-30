import { useTranslation } from "next-i18next";
import useLocale from "../../hooks/useLocale";
import { useLocationStore } from "../../store/app/locations.module";
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

  const { title, description, contactInfo, workingHours, googleMapsLink } =
    locationInfo;

  return (
    <div className="hide-scrollbar h-screen w-full overflow-y-auto rounded-sm bg-primary-yellow p-6 md:w-4/6 lg:w-3/6">
      <div className="">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="h2__responsive font-semibold uppercase">
              Lokacija - {title}
            </h2>
            <CloseIcon
              style="hover:cursor-pointer"
              onclick={() => {
                useLocationStore.setState({ showLocationInfo: false });
              }}
            />
          </div>
          <p className="paragraph p__responsive">{description}</p>
          <div>
            <p className="heading__4 h4__responsive">
              {t("location-info.section.contact.title")}
            </p>
            <p className="paragraph p__responsive">
              {t("location-info.section.contact.address")} :{" "}
              {contactInfo.address}
            </p>
            <p className="paragraph p__responsive">
              {t("location-info.section.contact.phone")} : {contactInfo.email}
            </p>
            <p className="paragraph p__responsive">
              {t("location-info.section.contact.email")} : {contactInfo.phone}
            </p>
          </div>
          <div>
            <p className="heading__4 h4__responsive">
              {t("location-info.section.work-hours.title")}
            </p>
            <p className="paragraph p__responsive">
              {t("location-info.section.work-hours.monday")} :{" "}
              {workingHours.monday}
            </p>
            <p className="paragraph p__responsive">
              {t("location-info.section.work-hours.tuesday")} :{" "}
              {workingHours.tuesday}
            </p>
            <p className="paragraph p__responsive">
              {t("location-info.section.work-hours.wednesday")} :{" "}
              {workingHours.wednesday}
            </p>
            <p className="paragraph p__responsive">
              {t("location-info.section.work-hours.thursday")} :{" "}
              {workingHours.thursday}
            </p>
            <p className="paragraph p__responsive">
              {t("location-info.section.work-hours.friday")} :{" "}
              {workingHours.monday}
            </p>
          </div>
          <iframe
            title="Crofloor store locations"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.4923100866913!2d16.17125381574605!3d45.88146601352417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476676c82e1c57a5%3A0x16294928bda8e9b6!2sBOHOR%20d.o.o.!5e0!3m2!1sen!2shr!4v1651139897150!5m2!1sen!2shr"
            className="w-full rounded-2xl md:w-5/6"
            width={"100%"}
            height={"300"}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Tag text="See location on Google Maps" />
        </div>
      </div>
      {/* <Gallery images={images} /> */}
    </div>
  );
}
